import * as THREE from 'three';
import { SHIP_BLUEPRINTS } from '../config/ships.js';

/**
 * Ship — корабль со слотами.
 * Слоты определены в чертеже (blueprint).
 * В каждый слот можно поставить деталь нужной категории.
 */
export class Ship {
    /**
     * @param {string} blueprintId — ключ из SHIP_BLUEPRINTS
     * @param {PartCatalog} catalog — каталог деталей
     * @param {THREE.Group} container — группа для всех мешей корабля
     */
    constructor(blueprintId, catalog, container) {
        const bp = SHIP_BLUEPRINTS[blueprintId];
        if (!bp) throw new Error(`Чертёж "${blueprintId}" не найден`);
        
        this.name = bp.name;
        this.description = bp.description;
        this.blueprintId = blueprintId;
        this.container = container;
        
        // Слоты: { slotId: { category, position, rotation, part|null } }
        this.slots = {};
        
        for (const slotDef of bp.slots) {
            this.slots[slotDef.id] = {
                id: slotDef.id, // добавляем id для удобства
                category: slotDef.category,
                position: new THREE.Vector3(...slotDef.position),
                rotation: slotDef.rotation ? new THREE.Euler(...slotDef.rotation) : null,
                part: null
            };
        }
        
        // Сохраняем catalog для использования в installPart
        this.catalog = catalog;
        
        // Устанавливаем детали по умолчанию (сохраняем их для асинхронной загрузки)
        this.defaultPartsToLoad = bp.defaultParts ? { ...bp.defaultParts } : {};
    }
    
    /**
     * Асинхронная инициализация корабля (загрузка деталей по умолчанию)
     */
    async init() {
        const loadPromises = [];
        
        for (const [slotId, partId] of Object.entries(this.defaultPartsToLoad)) {
            if (this.slots[slotId]) {
                const part = this.catalog.createPart(partId);
                if (part) {
                    // Загружаем визуал детали
                    const loadPromise = part.loadVisual().then(() => {
                        return this.installPart(slotId, part);
                    });
                    loadPromises.push(loadPromise);
                }
            }
        }
        
        await Promise.all(loadPromises);
        return this;
    }
    
    /**
     * Установить деталь в слот
     * @returns {boolean} успешно ли
     */
    installPart(slotId, part) {
        const slot = this.slots[slotId];
        if (!slot) {
            console.warn(`Слот "${slotId}" не найден`);
            return false;
        }
        
        if (slot.category !== part.category) {
            console.warn(`Слот "${slotId}" принимает только "${slot.category}", а это "${part.category}"`);
            return false;
        }
        
        // Проверяем, загружен ли меш детали
        if (!part.mesh) {
            console.error(`Деталь "${part.name}" еще не загружена`);
            return false;
        }
        
        // Убираем старую деталь если есть
        if (slot.part) {
            this.container.remove(slot.part.mesh);
        }
        
        // Ставим новую
        slot.part = part;
        
        // Клонируем меш, чтобы можно было использовать одну деталь несколько раз
        const partMesh = part.mesh.clone();
        partMesh.position.copy(slot.position);
        if (slot.rotation) {
            partMesh.rotation.copy(slot.rotation);
        }
        
        // Сохраняем ссылку на mesh в детали
        part.meshInstance = partMesh;
        this.container.add(partMesh);
        
        return true;
    }
    
    /** Снять деталь из слота */
    removePart(slotId) {
        const slot = this.slots[slotId];
        if (!slot || !slot.part) return null;
        
        const part = slot.part;
        if (part.meshInstance) {
            this.container.remove(part.meshInstance);
            part.meshInstance = null;
        }
        slot.part = null;
        return part;
    }
    
    /** Суммарные статы всех установленных деталей */
    getStats() {
        const totals = { speed: 0, armor: 0, damage: 0, cargo: 0, fuel: 0 };
        for (const slot of Object.values(this.slots)) {
            if (!slot.part) continue;
            const s = slot.part.getStats();
            for (const key in s) {
                if (key in totals) totals[key] += s[key];
            }
        }
        return totals;
    }
    
    /** Список занятых слотов */
    getFilledSlots() {
        return Object.entries(this.slots)
            .filter(([, slot]) => slot.part !== null)
            .map(([id, slot]) => ({ id, ...slot, part: slot.part }));
    }
    
    /** Список свободных слотов */
    getEmptySlots() {
        return Object.entries(this.slots)
            .filter(([, slot]) => slot.part === null)
            .map(([id, slot]) => ({ id, category: slot.category }));
    }
    
    /** Проверить, можно ли установить деталь в слот */
    canInstall(slotId, part) {
        const slot = this.slots[slotId];
        if (!slot) return false;
        if (slot.category !== part.category) return false;
        return true;
    }
}