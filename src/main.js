import * as THREE from 'three';
import { SceneManager } from './core/SceneManager.js';
import { CameraManager } from './core/CameraManager.js';
import { LightManager } from './core/LightManager.js';
import { Settings } from './utils/Settings.js';
import { ModelLoader } from './core/ModelLoader.js';
import { MODELS_CONFIG } from './config/model.js';
import {ShipGenerator} from './utils/ShipGenerator.js'
import { Ship } from './entities/Ship.js';
import { AsteroidManager } from './utils/AsteroidManager.js';
import { UIHelper } from './ui/UIHelper.js';
import {Pane} from 'tweakpane';

class Game {
    constructor() {
        this.sceneManager = null;
        this.cameraManager = null;
        this.lightManager = null;
        this.modelLoader = null;
        this.shipGenerator = null;

        this.camera = null;
        this.renderer = null;

        this.settings = null;
        this.ship = null;

        this.asteroid = null;
        this.asteroidManager = null;

        this.clock = null;
        this.pane = null;

        this.ui = null;
        this.gameOver = false;

        this.init();

    }

    init() {
        // Рендерер
        this.renderer = new THREE.WebGLRenderer({ antialias: true });
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.shadowMap.enabled = true;
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        document.body.appendChild(this.renderer.domElement);
        
        // Сцена
        this.sceneManager = new SceneManager();
        const scene = this.sceneManager.create();
        
        // Свет
        this.lightManager = new LightManager(scene);
        this.lightManager.createAll();
        
        // Настройки
        this.settings = new Settings(scene);
        this.settings.createAllSettigs();
        
        // Загрузчик моделей
        this.modelLoader = new ModelLoader(scene);
        
        // Камера
        this.cameraManager = new CameraManager(this.renderer.domElement);
        this.cameraManager.create();
        this.cameraManager.createFlyControls();
        
        // Корабль
        this.ship = new Ship(scene, this.cameraManager);
        
        // Менеджер астероидов
        this.asteroidManager = new AsteroidManager(scene, this.modelLoader);
        
        // Загружаем модели
        this.loadModels();
        
        // Запускаем спавн астероидов
        this.asteroidManager.start();
        
        // Таймер
        this.clock = new THREE.Clock();

        this.ui = new UIHelper();
        
        // События
        window.addEventListener('resize', () => this.onWindowResize());
        
        // Запуск анимации
        this.animate();
    }

    loadModels() {
        // Загружаем корабль
        this.modelLoader.load('assault', (model) => {
            this.ship.setModel(model);
            model.position.x -= 8;
        });
        
        // Предзагружаем модель астероида (через менеджер)
        this.modelLoader.load('asteroid', () => {});
    }

    onWindowResize() {
        this.cameraManager.onWindowResize();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
    }


    animate() {
        requestAnimationFrame(() => this.animate());

        const delta = this.clock.getDelta();

        this.sceneManager.update();
        this.cameraManager.update(delta);
        this.lightManager.update();

       // Обновляем корабль
       this.ship.update();
        
       // Обновляем астероиды
       this.asteroidManager.update();
       
       // Обновляем UI
         this.ui.updateHealth(this.ship.getHealth(), this.ship.getMaxHealth());

        // ТОЛЬКО ОДНА ПРОВЕРКА КОЛЛИЗИЙ - передаем ship объект
        this.asteroidManager.checkCollisions(this.ship, (asteroid, remainingHp) => {
        // Эффект при столкновении
            this.ship.rotate(0.3, 0.3, 0.3);
            console.log('Collision! HP left:', remainingHp);
        
            // Проверка на Game Over
            if (remainingHp <= 0) {
                 this.gameOver = true;
                this.ui.showGameOver();
                console.log('GAME OVER! Корабль уничтожен');
            }
        });

        this.renderer.render(
            this.sceneManager.getScene(),
            this.cameraManager.getCamera()
        );
    }
 }

const game = new Game();