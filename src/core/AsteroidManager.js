import * as THREE from 'three';
import {MaterialManager} from './MaterialManager.js'

export class AsteroidManager{
    constructor(scene, ship){
        this.scene = scene;
        this.ship = ship;
        this.asteroids = [];
        this.materialManager = new MaterialManager();

        this.spawnAsteroids();
    }

    spawnAsteroids(){
        for(let i = 0; i < 10; i++){
            setTimeout(() => {
                const shipPosition = this.getPosition();
                
                // Добавляем случайное смещение в радиусе 5-15 единиц
                const offsetX = (Math.random() - 0.5) * 2;  
                const offsetY = (Math.random() - 0.5) * 0.5;  
                const offsetZ = (Math.random() - 0.5) * 100;  

                const asteroid = this.createAsteroid();
                this.asteroids.push(asteroid);
                asteroid.position.set(
                    shipPosition.x + offsetX,
                    shipPosition.y + offsetY,
                    shipPosition.z + offsetZ
                );
                this.scene.add(asteroid);
                console.log(asteroid)
            }, Math.random(500, 2500));
        }
    }

    getPosition() {
        return this.ship ? this.ship.position : new THREE.Vector3(0, 0, 0);
    }

    createAsteroid(){
        const geometry = new THREE.SphereGeometry(1, 16, 16);
        const material = this.materialManager.createMaterial('rock');
        const mesh = new THREE.Mesh(geometry, material);
        return mesh;
    }

    updateAsteroids(){
        for(let i = 0; i < this.asteroids.length; i++){
            //this.asteroids[i].position.z += 0.01;
        }
    }
}