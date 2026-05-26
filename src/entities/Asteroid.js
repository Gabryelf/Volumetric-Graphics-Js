import * as THREE from 'three';

export class Asteroid {
    constructor(scene, model, position){
        this.scene = scene;
        this.model = model;
        this.speed = 0.5;
        this.rotationSpeed = 0.02;

        if (position) {
            this.model.position.copy(position);
        }
        
        this.scene.add(this.model);
    }

    update(){
        if(!this.model) return;

        this.model.position.x -= this.speed;

        this.model.rotation.x += this.rotationSpeed;
        this.model.rotation.y += this.rotationSpeed * 0.5;
        this.model.rotation.z += this.rotationSpeed;

        // Удаляем если улетел далеко влево
        if (this.model.position.x < -20) {
            this.destroy();
        }

    }

    destroy() {
        if (this.model) {
            this.scene.remove(this.model);
            this.model = null;
        }
    }

    getPosition() {
        return this.model ? this.model.position : new THREE.Vector3();
    }

    checkCollision(shipPosition, radius = 5) {
        if (!this.model) return false;
        return this.model.position.distanceTo(shipPosition) < radius;
    }
}