import * as THREE from 'three';
import { VisualFactory } from '../visual/VisualFactory.js';

export class Part {
    constructor(config) {
        this.id = config.id; // добавляем id для идентификации
        this.name = config.name;
        this.category = config.category;
        this.shape = config.shape;
        this.stats = { ...config.stats };
        this.size = { ...config.size };
        
        // Инициализируем mesh как null, загрузка будет позже
        this.mesh = null;
        this.isLoading = false;
    }
    
    /**
     * Асинхронная загрузка визуала
     */
    async loadVisual() {
        if (this.mesh) return this.mesh;
        if (this.isLoading) return null;
        
        this.isLoading = true;
        try {
            this.mesh = await VisualFactory.createVisualAsync(this);
            this.mesh.castShadow = true;
            this.mesh.receiveShadow = true;
            return this.mesh;
        } catch (error) {
            console.error(`Ошибка загрузки визуала для ${this.name}:`, error);
            // Создаём простой куб как fallback
            this.mesh = new THREE.Mesh(
                new THREE.BoxGeometry(this.size.x, this.size.y, this.size.z),
                new THREE.MeshStandardMaterial({ color: 0xff00ff })
            );
            return this.mesh;
        } finally {
            this.isLoading = false;
        }
    }
    
    getStats() {
        return { ...this.stats };
    }
}