//================================
// главный файл - точка запуска
//================================
import * as THREE from 'three';
import {SceneManager} from './core/SceneManager.js';
import {CameraManager} from './core/CameraManager.js';
class Game{
    constructor(){
        this.sceneManager = null;
        this.cameraManager = null;
        this.renderer = null;
        
        this.init();
    }
    
    init(){
        this.sceneManager = new SceneManager();
        const scene = this.sceneManager.create();
        
        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(this.renderer.domElement);
        
        this.cameraManager = new CameraManager(this.renderer.domElement);
        const camera = this.cameraManager.create();
        
        this.animate();
    }
    
    animate(){
        requestAnimationFrame(() => this.animate);
        
        this.renderer.render(
            this.sceneManager.getScene(),
            this.cameraManager.getCamera()
        );
    }
}

const game = new Game();
