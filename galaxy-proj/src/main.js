import * as THREE from 'three';
import { SceneManager } from './core/SceneManager.js';
import { CameraManager } from './core/CameraManager.js';
import { LightManager } from './core/LightManager.js';
import { Settings } from './utils/Settings.js';
import { ModelLoader } from './core/ModelLoader.js';
import { MODELS_CONFIG } from './config/model.js';
import {ShipGenerator} from './utils/ShipGenerator.js'
import {PaneConstructor, PaneLights} from './utils/PaneConstructor.js';
import {AsteroidsGenerator} from './utils/AsteroidsGenerator.js'

class Game {
    constructor() {
        this.renderer = null;
        this.sceneManager = null;
        this.cameraManager = null;
        this.lightManager = null;
        this.modelLoader = null;
        this.shipGenerator = null;
        this.asteroidsGenerator = null;

        this.camera = null;

        this.settings = null;
        this.ship = null;

        this.clock = null;
        this.prevTime = 0;

        this.pane = null;

        this.lights = null;

        this.init();

    }

    async init() {
        this.renderer = new THREE.WebGLRenderer({ antialias: true });
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.shadowMap.enabled = true;  
        const maxPixelSize = Math.min(window.devicePixelRatio, 2);
        this.renderer.setPixelRatio(maxPixelSize);
        document.body.appendChild(this.renderer.domElement);

        this.sceneManager = new SceneManager();
        const scene = this.sceneManager.create();

        this.lightManager = new LightManager(scene);
        this.lightManager.createAll();

        this.settings = new Settings(scene);
        this.settings.createAllSettigs();

        //this.modelLoader = new ModelLoader(scene);
        //this.ship = await this.modelLoader.load('assault', null);
        //this.modelLoader.load('asteroid', 1);

        this.shipGenerator = new ShipGenerator(scene);
        await this.shipGenerator.createShip(1);
        this.ship = this.shipGenerator.ship;

        this.clock = new THREE.Clock();

        this.lights = this.lightManager.lights;
        console.log(this.lights);
        //this.pane = new PaneLights();
        //const objs = [this.lightManager.getLight('ambient',), this.lightManager.getLight('main'), this.lightManager.getLight('rim')]
        //this.pane.createAll(objs[0], objs[1], objs[2]);

        this.asteroidsGenerator = new AsteroidsGenerator(scene);
        this.asteroidsGenerator.addAsteroidToScene();
        console.log(this.asteroidsGenerator.asteroid)

        this.cameraManager = new CameraManager(this.renderer.domElement);
        this.cameraManager.createPerspectiveCamera();
        this.cameraManager.createOrbitControls();

        document.addEventListener('keydown', (e) => {
            if (e.key.toLowerCase() === 'f') {
                this.toggleFlightMode();
            }
        });

        window.addEventListener('resize', () => this.onWindowResize());

        this.animate();
    }

    onWindowResize() {
        this.cameraManager.onWindowResize();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
    }

    //метод для проверки коллизий
    checkCollisions() {
        if (!this.ship || !this.asteroidsGenerator?.asteroid) return;
        
        const shipData = this.shipGenerator.getCollisionData();
        const asteroidData = this.asteroidsGenerator.getCollisionData();
        
        // Проверка пересечения сфер
        const distance = shipData.center.distanceTo(asteroidData.center);
        const collisionThreshold = shipData.radius + asteroidData.radius;
        
        if (distance < collisionThreshold) {
            console.log('AAAAAAAAAAAAA')
            this.handleCollision();
        }
    }

    // Обработка столкновения
    handleCollision() {
        this.shipGenerator.onCollision(); 
    }


    toggleFlightMode() {
        this.flightMode = !this.flightMode;
        
        if (this.flightMode) {
            this.cameraManager.createFlyControls(this.ship);
            
        } else {
            this.cameraManager.createOrbitControls();
            // Возвращаем камеру на стартовую позицию
            this.cameraManager.getCamera().position.set(0, 10, 20);
        }
    }
    
    animate() {
        requestAnimationFrame(() => this.animate());

        this.sceneManager.update();
        //this.cameraManager.update();
        this.lightManager.update();
        // получаем дельта для вращения части корабля вокруг своей оси - тестовый вариант
        //const currentTime = this.clock.getElapsedTime();
        //const delta = currentTime - this.prevTime;
        //this.prevTime = currentTime;
        //this.ship.children[0].rotation.y += THREE.MathUtils.degToRad(1) * delta * 20;

        //получаем дельта для обновления летящей камеры
        const delta = this.clock.getDelta();
        this.cameraManager.update(delta);

        this.ship.position.z -= 0.01

        this.checkCollisions();
        
        this.renderer.render(
            this.sceneManager.getScene(),
            this.cameraManager.getCamera()
        );
    }
 }

const game = new Game();