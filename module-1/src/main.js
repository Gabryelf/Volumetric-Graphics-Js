/**
 * ГЛАВНЫЙ ФАЙЛ
 * Точка входа в приложение
 * 
 * Здесь только инициализация всех компонентов
 */

 import * as THREE from 'three';
 import { SceneManager } from './core/SceneManager.js';
 import { CameraManager } from './core/CameraManager.js';
 import { LightManager } from './core/LightManager.js';
 
 class Game {
     constructor() {
         this.renderer = null;
         this.sceneManager = null;
         this.cameraManager = null;
         this.lightManager = null;
         
         this.testCube = null;
         this.time = 0;
         
         this.init();
     }
     
     /**
      * Инициализация всего приложения
      */
     init() {
         // 1. Создаём рендерер
         this.renderer = new THREE.WebGLRenderer({ antialias: true });
         this.renderer.setSize(window.innerWidth, window.innerHeight);
         this.renderer.shadowMap.enabled = true; // включаем тени
         this.renderer.setPixelRatio(window.devicePixelRatio);
         document.body.appendChild(this.renderer.domElement);
         
         // 2. Создаём менеджер сцены
         this.sceneManager = new SceneManager();
         const scene = this.sceneManager.create();
         
         // 3. Создаём менеджер камеры
         this.cameraManager = new CameraManager(this.renderer.domElement);
         const camera = this.cameraManager.create();
         this.cameraManager.createControls();
         
         // 4. Создаём менеджер освещения
         this.lightManager = new LightManager(scene);
         this.lightManager.createAll();
         
         // 5. Добавляем тестовый объект (пока куб)
         this.testCube = this.sceneManager.addTestObject();
         
         // 6. Настраиваем обработку изменения размера окна
         window.addEventListener('resize', () => this.onWindowResize());
         
         // 7. Запускаем анимацию
         this.animate();
         
         console.log('✅ Game: приложение инициализировано');
     }
     
     /**
      * Обработка изменения размера окна
      */
     onWindowResize() {
         this.cameraManager.onWindowResize();
         this.renderer.setSize(window.innerWidth, window.innerHeight);
     }
     
     /**
      * Анимационный цикл
      */
     animate() {
         requestAnimationFrame(() => this.animate());
         
         this.time += 0.016; // примерно 60 FPS
         
         // Вращаем тестовый куб
         if (this.testCube) {
             this.testCube.rotation.y = this.time * 0.5;
             this.testCube.rotation.x = Math.sin(this.time * 0.8) * 0.3;
         }
         
         // Обновляем менеджеры
         this.sceneManager.update(this.time);
         this.lightManager.update(this.time);
         this.cameraManager.update();
         
         // Рендерим
         this.renderer.render(
             this.sceneManager.getScene(),
             this.cameraManager.getCamera()
         );
     }
 }
 
 // Запускаем игру
 const game = new Game();