    // === УПРАВЛЯЮЩИЙ СЦЕНАМИ ===
import * as THREE from 'three';
import { SCENE_CONFIG } from '../config/scene.js';
import { SkyGenerator } from '../utils/SkyGenerator.js';
 
export class SceneManager {
     constructor() {
         this.scene = null;
         this.skyGenerator = null;
    }
    
    create() {    
        this.scene = new THREE.Scene();
        this.skyGenerator = new SkyGenerator(this.scene);
        this.skyGenerator.generateAll();
        this.stars = this.skyGenerator.stars; 
         
        this.scene.background = new THREE.Color(SCENE_CONFIG.background);

        if (SCENE_CONFIG.fog.enabled) {
            this.scene.fog = new THREE.FogExp2(
                SCENE_CONFIG.fog.color,
                SCENE_CONFIG.fog.density
            );
        }    
        return this.scene;
    }
 
    getScene() {
         return this.scene;
    }
 
    update() {
        if (this.stars && this.stars.material) {
            this.stars.material.opacity = 0.7 + Math.random() * 0.5;
        }
    }
}