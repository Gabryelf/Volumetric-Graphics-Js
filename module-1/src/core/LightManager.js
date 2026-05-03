/**
 * LightManager - управление освещением
 * 
 * Ответственность:
 * - создание всех источников света
 * - управление интенсивностью (для анимаций)
 * - обновление параметров
 */

 import * as THREE from 'three';
 import { LIGHTS_CONFIG } from '../config/lights.js';
 
 export class LightManager {
     constructor(scene) {
         this.scene = scene;
         this.lights = {};
     }
     
     /**
      * Создать все источники света
      */
     createAll() {
         this._createAmbientLight();
         this._createMainLight();
         this._createRimLight();
         this._createFillLight();
         this._createBackLight();
         
         console.log('✅ LightManager: все источники света созданы');
         return this.lights;
     }
     
     /**
      * Рассеянный свет
      */
     _createAmbientLight() {
         const config = LIGHTS_CONFIG.ambient;
         const light = new THREE.AmbientLight(config.color, config.intensity);
         this.scene.add(light);
         this.lights.ambient = light;
     }
     
     /**
      * Основной направленный свет
      */
     _createMainLight() {
         const config = LIGHTS_CONFIG.main;
         const light = new THREE.DirectionalLight(config.color, config.intensity);
         light.position.set(config.position.x, config.position.y, config.position.z);
         
         if (config.castShadow) {
             light.castShadow = true;
             light.shadow.mapSize.width = config.shadowMapSize;
             light.shadow.mapSize.height = config.shadowMapSize;
         }
         
         this.scene.add(light);
         this.lights.main = light;
     }
     
     /**
      * Контровой свет (подсветка сзади-сбоку)
      */
     _createRimLight() {
         const config = LIGHTS_CONFIG.rim;
         const light = new THREE.DirectionalLight(config.color, config.intensity);
         light.position.set(config.position.x, config.position.y, config.position.z);
         this.scene.add(light);
         this.lights.rim = light;
     }
     
     /**
      * Заполняющий свет снизу
      */
     _createFillLight() {
         const config = LIGHTS_CONFIG.fill;
         const light = new THREE.PointLight(config.color, config.intensity);
         light.position.set(config.position.x, config.position.y, config.position.z);
         this.scene.add(light);
         this.lights.fill = light;
     }
     
     /**
      * Подсветка сзади
      */
     _createBackLight() {
         const config = LIGHTS_CONFIG.back;
         const light = new THREE.PointLight(config.color, config.intensity);
         light.position.set(config.position.x, config.position.y, config.position.z);
         this.scene.add(light);
         this.lights.back = light;
     }
     
     /**
      * Обновление (для анимации)
      */
     update(time) {
         // Пульсация контрового света
         if (this.lights.rim) {
             const baseIntensity = LIGHTS_CONFIG.rim.intensity;
             this.lights.rim.intensity = baseIntensity + Math.sin(time * 2) * 0.15;
         }
         
         // Пульсация заднего света
         if (this.lights.back) {
             const baseIntensity = LIGHTS_CONFIG.back.intensity;
             this.lights.back.intensity = baseIntensity + Math.sin(time * 1.5) * 0.1;
         }
     }
     
     /**
      * Получить конкретный свет
      */
     getLight(name) {
         return this.lights[name];
     }
 }