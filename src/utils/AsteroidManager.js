// core/AsteroidManager.js
import * as THREE from 'three';
import { Asteroid } from '../entities/Asteroid.js';

export class AsteroidManager {
    constructor(scene, modelLoader) {
        this.scene = scene;
        this.modelLoader = modelLoader;
        this.asteroids = [];
        this.spawnInterval = 2000; // Интервал спавна в мс
        this.maxAsteroids = 10;
        this.spawnTimer = null;
    }

    start() {
        // Создаём несколько астероидов сразу
        for (let i = 0; i < 3; i++) {
            setTimeout(() => this.spawnAsteroid(), i * 500);
        }
        
        // Запускаем интервал спавна
        this.spawnTimer = setInterval(() => {
            if (this.asteroids.length < this.maxAsteroids) {
                this.spawnAsteroid();
            }
        }, this.spawnInterval);
    }

    spawnAsteroid() {
        // Сохраняем ссылку на this
        const self = this;
        
        this.modelLoader.load('asteroid', function(model) {
            // Случайная позиция справа
            const position = new THREE.Vector3(
                15 + Math.random() * 10,        // X: 15-25
                (Math.random() - 0.5) * 8,       // Y: -4 до 4
                (Math.random() - 0.5) * 8        // Z: -4 до 4
            );
            
            // СОЗДАЁМ АСТЕРОИД, ПЕРЕДАВАЯ scene
            const asteroid = new Asteroid(self.scene, model, position);
            self.asteroids.push(asteroid);
        });
    }

    update() {
        // Обновляем все астероиды
        for (let i = this.asteroids.length - 1; i >= 0; i--) {
            const asteroid = this.asteroids[i];
            asteroid.update();
            
            // Удаляем уничтоженные астероиды из массива
            if (!asteroid.model) {
                this.asteroids.splice(i, 1);
            }
        }
    }

    checkCollisions(shipPosition, onCollision) {
        for (let i = this.asteroids.length - 1; i >= 0; i--) {
            const asteroid = this.asteroids[i];
            
            if (asteroid.checkCollision(shipPosition, 5)) {
                asteroid.destroy();
                this.asteroids.splice(i, 1);
                
                if (onCollision) {
                    onCollision(asteroid);
                }
                
                return true;
            }
        }
        return false;
    }

    destroy() {
        if (this.spawnTimer) {
            clearInterval(this.spawnTimer);
        }
        
        for (const asteroid of this.asteroids) {
            asteroid.destroy();
        }
        this.asteroids = [];
    }

    getCount() {
        return this.asteroids.length;
    }
}