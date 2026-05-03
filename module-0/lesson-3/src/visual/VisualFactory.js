import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { PALETTES, createMaterial } from './materials.js';
import { createNoseGeometry, createCanopyGeometry, createNozzleGeometry, createRingGeometry } from './shapes.js';
import { EXTERNAL_ASSETS } from '../config/externalAssets.js';

// ============================================
// VISUAL FACTORY — создаёт красивые составные меши
// ============================================

export class VisualFactory {
    // Статический загрузчик и кэш
    static loader = new GLTFLoader();
    static modelCache = new Map();
    static loadingPromises = new Map(); // для предотвращения повторной загрузки
    
    /**
     * Загрузить модель с GitHub
     */
    static async loadModelFromUrl(url, partId) {
        // Проверяем кэш
        if (this.modelCache.has(url)) {
            const cached = this.modelCache.get(url);
            return cached.clone();
        }
        
        // Проверяем, не загружается ли уже
        if (this.loadingPromises.has(url)) {
            await this.loadingPromises.get(url);
            const cached = this.modelCache.get(url);
            return cached ? cached.clone() : this.createFallbackVisual(partId);
        }
        
        // Создаём promise загрузки
        const loadPromise = new Promise((resolve, reject) => {
            console.log(`🔄 Загрузка модели: ${url}`);
            
            this.loader.load(url, 
                (gltf) => {
                    const model = gltf.scene;
                    
                    // Оптимизация модели
                    model.traverse((child) => {
                        if (child.isMesh) {
                            child.castShadow = true;
                            child.receiveShadow = true;
                            // Настройка материалов для лучшего рендеринга
                            if (child.material) {
                                child.material.roughness = 0.4;
                                child.material.metalness = 0.6;
                            }
                        }
                    });
                    
                    this.modelCache.set(url, model.clone());
                    console.log(`✅ Модель загружена: ${url}`);
                    resolve(model);
                },
                (xhr) => {
                    // Прогресс загрузки
                    const progress = (xhr.loaded / xhr.total) * 100;
                    console.log(`📥 Загрузка: ${Math.round(progress)}%`);
                },
                (error) => {
                    console.error(`❌ Ошибка загрузки модели ${url}:`, error);
                    // Создаём fallback визуал
                    const fallback = this.createFallbackVisual(partId);
                    resolve(fallback);
                }
            );
        });
        
        this.loadingPromises.set(url, loadPromise);
        const model = await loadPromise;
        this.loadingPromises.delete(url);
        
        return model.clone();
    }
    
    /**
     * Создать простую модель-заглушку если не загрузилась
     */
    static createFallbackVisual(partId) {
        console.log(`⚠️ Использую заглушку для: ${partId}`);
        const geometry = new THREE.BoxGeometry(1, 1, 1);
        const material = new THREE.MeshStandardMaterial({ color: 0x888888 });
        return new THREE.Mesh(geometry, material);
    }
    
    /**
     * Асинхронное создание визуала с поддержкой кастомных моделей
     */
    static async createVisualAsync(part) {
        // Проверяем, есть ли кастомная модель для этой детали
        const customModelFile = EXTERNAL_ASSETS.customModels[part.id];
        
        if (customModelFile) {
            const modelUrl = EXTERNAL_ASSETS.baseUrl + customModelFile;
            const model = await this.loadModelFromUrl(modelUrl, part.id);
            
            // Масштабируем модель под размер
            const bbox = new THREE.Box3().setFromObject(model);
            const size = bbox.getSize(new THREE.Vector3());
            const scale = Math.max(
                part.size.x / size.x,
                part.size.y / size.y,
                part.size.z / size.z
            );
            model.scale.set(scale, scale, scale);
            
            return model;
        }
        
        // Если нет кастомной модели, используем стандартную генерацию
        return this.createVisual(part);
    }
    
    /**
     * Старый синхронный метод (для совместимости)
     */
    static createVisual(part) {
        switch (part.category) {
            case 'cabin':  return this.createCabin(part.size);
            case 'engine': return this.createEngine(part.size);
            case 'wing':   return this.createWing(part.size);
            case 'weapon': return this.createWeapon(part.size);
            case 'cargo':  return this.createCargo(part.size);
            case 'fuel':   return this.createFuel(part.size);
            default:
                return new THREE.Mesh(
                    new THREE.BoxGeometry(part.size.x, part.size.y, part.size.z),
                    new THREE.MeshStandardMaterial({ color: 0x888888 })
                );
        }
    }
    
    // ... остальные методы (createCabin, createEngine, etc.) остаются без изменений ...
    static createCabin(size) { /* ваш существующий код */ }
    static createEngine(size) { /* ваш существующий код */ }
    static createWing(size) { /* ваш существующий код */ }
    static createWeapon(size) { /* ваш существующий код */ }
    static createCargo(size) { /* ваш существующий код */ }
    static createFuel(size) { /* ваш существующий код */ }
}