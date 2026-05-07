//================================
// менеджер управления сценой
//================================
import * as THREE from 'three';
import {SCENE_CONFIG} from "../config/scene.js";

export class SceneManager {
    constructor() {
        this.scene = null;
    }
    
    create() {
        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color(SCENE_CONFIG.background);
        
        return this.scene;
    }
    
    update() {}
    
    getScene() {
        return this.scene;
    }
}
