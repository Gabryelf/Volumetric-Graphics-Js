/**
 * CameraManager - управление камерой и контролами
 * 
 * Ответственность:
 * - создание и настройка камеры
 * - настройка OrbitControls
 * - обработка изменения размера окна
 */

 import * as THREE from 'three';
 import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
 import { CAMERA_CONFIG } from '../config/camera.js';
 
 export class CameraManager {
     constructor(rendererDomElement) {
         this.camera = null;
         this.controls = null;
         this.rendererDomElement = rendererDomElement;
     }
     
     /**
      * Создать и настроить камеру
      */
     create() {
         // Создаём перспективную камеру
         this.camera = new THREE.PerspectiveCamera(
             CAMERA_CONFIG.fov,
             window.innerWidth / window.innerHeight,
             CAMERA_CONFIG.near,
             CAMERA_CONFIG.far
         );
         
         // Устанавливаем позицию
         this.camera.position.set(
             CAMERA_CONFIG.position.x,
             CAMERA_CONFIG.position.y,
             CAMERA_CONFIG.position.z
         );
         
         // Устанавливаем точку обзора
         this.camera.lookAt(
             CAMERA_CONFIG.target.x,
             CAMERA_CONFIG.target.y,
             CAMERA_CONFIG.target.z
         );
         
         console.log('✅ CameraManager: камера создана');
         return this.camera;
     }
     
     /**
      * Создать управление камерой
      */
     createControls() {
         this.controls = new OrbitControls(this.camera, this.rendererDomElement);
         
         // Применяем настройки из конфига
         this.controls.enableDamping = CAMERA_CONFIG.controls.enableDamping;
         this.controls.dampingFactor = CAMERA_CONFIG.controls.dampingFactor;
         this.controls.autoRotate = CAMERA_CONFIG.controls.autoRotate;
         this.controls.enableZoom = CAMERA_CONFIG.controls.enableZoom;
         this.controls.enablePan = CAMERA_CONFIG.controls.enablePan;
         this.controls.zoomSpeed = CAMERA_CONFIG.controls.zoomSpeed;
         this.controls.rotateSpeed = CAMERA_CONFIG.controls.rotateSpeed;
         
         // Устанавливаем цель
         this.controls.target.set(
             CAMERA_CONFIG.target.x,
             CAMERA_CONFIG.target.y,
             CAMERA_CONFIG.target.z
         );
         
         console.log('✅ CameraManager: управление настроено');
         return this.controls;
     }
     
     /**
      * Обновить камеру (вызывать каждый кадр)
      */
     update() {
         if (this.controls) {
             this.controls.update();
         }
     }
     
     /**
      * Обработка изменения размера окна
      */
     onWindowResize() {
         this.camera.aspect = window.innerWidth / window.innerHeight;
         this.camera.updateProjectionMatrix();
     }
     
     /**
      * Получить камеру
      */
     getCamera() {
         return this.camera;
     }
     
     /**
      * Получить контролы
      */
     getControls() {
         return this.controls;
     }
 }