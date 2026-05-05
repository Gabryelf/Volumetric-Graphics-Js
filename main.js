import * as THREE from 'three';
import {SceneManager} from "./core/SceneManager.js";
import {CameraManager} from "./core/CameraManager.js";
import {LightManager} from "./core/LightManager.js";


class Main{
    constructor(){
        this.sceneManager = null;
        this.cameraManager = null;
        this.lightManager = null;
        this.renderer = null;
        this.camera = null;
        
        this.time = 0;
        this.init()
    }
    init(){
        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.shadowMap.enable = true;
        this.renderer.setPixelRatio(window.devicePixelRatio);
        document.body.appendChild(this.renderer.domElement);
        
        this.sceneManager = new SceneManager();
        const scene = this.sceneManager.create();
        
        this.cameraManager = new CameraManager(this.renderer.domElement);
        this.cameraManager.create();
        
        this.lightManager = new LightManager(scene);
        this.lightManager.createAll();
        
        this.animate();
    }
    animate(){
        requestAnimationFrame(() => this.animate());
        this.time += 0.016;
        
        this.renderer.render(
            this.sceneManager.getScene(),
            this.cameraManager.getCamera()
        )
    }
}

const game = new Main();
game.init();
