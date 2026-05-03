/**
 * SceneManager - управление сценой и окружением
 * 
 * Ответственность:
 * - создание сцены
 * - настройка фона и тумана
 * - создание звёздного поля
 * - добавление вспомогательных элементов
 */

 import * as THREE from 'three';
 import { SCENE_CONFIG } from '../config/scene.js';
 
 export class SceneManager {
     constructor() {
         this.scene = null;
         this.stars = null;
     }
     
     /**
      * Создать и настроить сцену
      */
     create() {
         // Создаём сцену
         this.scene = new THREE.Scene();
         
         // Настраиваем фон
         this.scene.background = new THREE.Color(SCENE_CONFIG.background);
         
         // Настраиваем туман (если включён)
         if (SCENE_CONFIG.fog.enabled) {
             this.scene.fog = new THREE.FogExp2(
                 SCENE_CONFIG.fog.color,
                 SCENE_CONFIG.fog.density
             );
         }
         
         // Создаём звёздное поле
         this._createStars();
         
         // Создаём опорную сетку
         this._createGrid();
         
         console.log('✅ SceneManager: сцена создана');
         return this.scene;
     }
     
     /**
      * Создать звёздное поле (система частиц)
      */
     _createStars() {
         const { count, size, color, range } = SCENE_CONFIG.stars;
         
         // Создаём геометрию с позициями звёзд
         const geometry = new THREE.BufferGeometry();
         const positions = new Float32Array(count * 3);
         
         for (let i = 0; i < count; i++) {
             // Случайные координаты в кубе
             positions[i * 3] = (Math.random() - 0.5) * range;
             positions[i * 3 + 1] = (Math.random() - 0.5) * range * 0.6;
             positions[i * 3 + 2] = (Math.random() - 0.5) * range * 0.5 - 50;
         }
         
         geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
         
         // Создаём материал и точки
         const material = new THREE.PointsMaterial({
             color: color,
             size: size,
             transparent: true,
             opacity: 0.8
         });
         
         this.stars = new THREE.Points(geometry, material);
         this.scene.add(this.stars);
     }
     
     /**
      * Создать опорную сетку (для ориентации в пространстве)
      */
     _createGrid() {
         // Полупрозрачная сетка
         const gridHelper = new THREE.GridHelper(20, 20, 0x4488ff, 0x335588);
         gridHelper.position.y = -1.2;
         gridHelper.material.transparent = true;
         gridHelper.material.opacity = 0.3;
         this.scene.add(gridHelper);
         
         // Декоративная плоскость под объектами
         const floorPlane = new THREE.Mesh(
             new THREE.PlaneGeometry(12, 12),
             new THREE.MeshStandardMaterial({
                 color: 0x112233,
                 roughness: 0.8,
                 metalness: 0.2,
                 transparent: true,
                 opacity: 0.2,
                 side: THREE.DoubleSide
             })
         );
         floorPlane.rotation.x = -Math.PI / 2;
         floorPlane.position.y = -1.1;
         floorPlane.receiveShadow = true;
         this.scene.add(floorPlane);
     }
     
     /**
      * Добавить тестовый объект (пока нет моделей)
      */
     addTestObject() {
         const geometry = new THREE.BoxGeometry(1, 1, 1);
         const material = new THREE.MeshStandardMaterial({ color: 0xff6600 });
         const cube = new THREE.Mesh(geometry, material);
         cube.castShadow = true;
         cube.position.y = 0.5;
         this.scene.add(cube);
         return cube;
     }
     
     /**
      * Получить сцену
      */
     getScene() {
         return this.scene;
     }
     
     /**
      * Обновление (анимация)
      */
     update(time) {
         // Лёгкое мерцание звёзд
         if (this.stars && this.stars.material) {
             this.stars.material.opacity = 0.7 + Math.sin(time * 0.3) * 0.1;
         }
     }
 }