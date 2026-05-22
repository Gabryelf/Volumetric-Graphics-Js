import * as THREE from 'three';
import { SceneManager } from './core/SceneManager.js';
import { CameraManager } from './core/CameraManager.js';
import { LightManager } from './core/LightManager.js';
import { Settings } from './utils/Settings.js';
import { ModelLoader } from './core/ModelLoader.js';
import { MODELS_CONFIG } from './config/model.js';
import {ShipGenerator} from './utils/ShipGenerator.js'
import {PaneConstructor} from './utils/PaneConstructor.js';

class Game {
    constructor() {
        this.renderer = null;
        this.sceneManager = null;
        this.cameraManager = null;
        this.lightManager = null;
        this.modelLoader = null;
        this.shipGenerator = null;
        this.camera = null;

        this.settings = null;
        this.ship = null;

        this.clock = null;
        this.prevTime = 0;

        this.pane = null;

        this.init();

    }

    init() {
        this.renderer = new THREE.WebGLRenderer({ antialias: true });
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.shadowMap.enabled = true;
        const maxPixelSize = Math.min(window.devicePixelRatio, 2);
        this.renderer.setPixelRatio(maxPixelSize);
        document.body.appendChild(this.renderer.domElement);

        this.sceneManager = new SceneManager();
        const scene = this.sceneManager.create();

        this.cameraManager = new CameraManager(this.renderer.domElement);
        this.cameraManager.create();
        this.cameraManager.createControls();

        this.lightManager = new LightManager(scene);
        this.lightManager.createAll();

        this.settings = new Settings(scene);
        this.settings.createAllSettigs();

        this.modelLoader = new ModelLoader(scene);
        //this.modelLoader.load('assault', null);
        //this.modelLoader.load('asteroid', 1);

        this.shipGenerator = new ShipGenerator(scene);
        this.shipGenerator.createShip(1);
        this.ship = this.shipGenerator.ship;

        this.clock = new THREE.Clock();

        this.pane = new PaneConstructor();
        this.pane.createAll(this.ship.children[0]);

        window.addEventListener('resize', () => this.onWindowResize());

        this.animate();
    }

    onWindowResize() {
        this.cameraManager.onWindowResize();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
    }


    animate() {
        requestAnimationFrame(() => this.animate());

        this.sceneManager.update();
        this.cameraManager.update();
        this.lightManager.update();

        const currentTime = this.clock.getElapsedTime();
        const delta = currentTime - this.prevTime;
        this.prevTime = currentTime;

        this.ship.children[0].rotation.y += THREE.MathUtils.degToRad(1) * delta * 20;
        
        this.renderer.render(
            this.sceneManager.getScene(),
            this.cameraManager.getCamera()
        );
    }
 }

const game = new Game();