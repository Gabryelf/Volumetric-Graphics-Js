import * as THREE from 'three';
import {TextureLoader} from '../core/TextureLoader.js';
import { MaterialManager } from '../core/MaterialManager.js';

export class AsteroidsGenerator{
    constructor(scene){
        this.textureLoader = new TextureLoader();
        this.materialManager = new MaterialManager();
        this.scene = scene;
        this.asteroid = null;
        this.asteroidRadius = 0.001;
    }

    addAsteroidToScene(){
        this.createAsteroids();
        console.log(this.asteroid)
        this.scene.add(this.asteroid);
    }

    createAsteroids(){
        const geometry = new THREE.SphereGeometry(1, 16 , 16);
        //const material = this.textureLoader.load(0, 'cratered_rock');
        const material = this.materialManager.createMaterial('cratered_rock');
        this.asteroid = new THREE.Mesh(geometry, material);
        return this.asteroid;
    }

     // Метод для проверки коллизии
     checkCollisionWithSphere(center, radius) {
        if (!this.asteroid) return false;
        
        const distance = this.asteroid.position.distanceTo(center);
        const collisionThreshold = this.asteroidRadius + radius;
        
        return distance < collisionThreshold;
    }
    
    // Получение центра и радиуса для внешних проверок
    getCollisionData() {
        return {
            center: this.asteroid.position,
            radius: this.asteroidRadius
        };
    }
}