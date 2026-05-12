import * as THREE from 'three';
import { SceneManager } from './core/SceneManager.js';
import { CameraManager } from './core/CameraManager.js';
import { LightManager } from './core/LightManager.js';
import { Settings } from './utils/Settings.js';
import { ModelLoader } from './core/ModelLoader.js';
import { MODELS_CONFIG } from './config/model.js';

class Game {
    constructor() {
        this.renderer = null;
        this.sceneManager = null;
        this.cameraManager = null;
        this.lightManager = null;
        this.modelLoader = null;
        this.camera = null;

        this.settings = null;

        this.init();

    }

    init() {
        this.renderer = new THREE.WebGLRenderer({ antialias: true });
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.shadowMap.enabled = true;
        this.renderer.setPixelRatio(window.devicePixelRatio);
        document.body.appendChild(this.renderer.domElement);

        this.sceneManager = new SceneManager();
        const scene = this.sceneManager.create();

        this.cameraManager = new CameraManager(this.renderer.domElement);
        this.cameraManager.create();
        this.cameraManager.createControls();

        this.lightManager = new LightManager(scene);
        this.lightManager.createAll();

        this.modelLoader = new ModelLoader(scene);
        this.modelLoader.setModels(MODELS_CONFIG.ships);

        this.settings = new Settings(scene);
        this.settings.createAllSettigs();

        this.loadCurrentModel();

        window.addEventListener('resize', () => this.onWindowResize());

        this.animate();
    }

    onWindowResize() {
        this.cameraManager.onWindowResize();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
    }

    async loadCurrentModel(){
        await this.modelLoader.showModel(this.modelLoader.currentIndex);

    }

    animate() {
        requestAnimationFrame(() => this.animate());

        this.sceneManager.update();
        this.cameraManager.update();
        this.lightManager.update();
        
        this.renderer.render(
            this.sceneManager.getScene(),
            this.cameraManager.getCamera()
        );
    }
 }

const game = new Game();