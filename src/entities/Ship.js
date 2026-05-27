import * as THREE from 'three';

export class Ship {
    constructor(scene, cameraManager){
        this.scene = scene;
        this.cameraManager = cameraManager;
        this.model = null;
        this.spid = 0;
        this.hp = 100;
        this.maxHp = 100;
        this.offsetFromCamera = new THREE.Vector3(0, -4, 0);
    }

    setModel(model){
        this.model = model;
        this.scene.add(model);
    }

    update(){
        if(!this.model && !this.cameraManager) return;

        const camera = this.cameraManager.getCamera();

        this.model.position.copy(camera.position);
        this.model.position.x += this.offsetFromCamera.x;
        this.model.position.y += this.offsetFromCamera.y - 3;
        this.model.position.z += this.offsetFromCamera.z - 12;

        this.model.rotation.x = camera.rotation.x;
        this.model.rotation.y = camera.rotation.y - 5;
        this.model.rotation.z = camera.rotation.z;
    }

    getPosition() {
        return this.model ? this.model.position : new THREE.Vector3();
    }

    rotate(angleX, angleY, angleZ) {
        if (!this.model) return;
        this.model.rotation.x += angleX;
        this.model.rotation.y += angleY;
        this.model.rotation.z += angleZ;
    }

    takeDamage(amount) {
        this.hp -= amount;
        return this.hp;
    }

    getHealth() {
        return this.hp;
    }

    getMaxHealth() {
        return this.maxHp;
    }

    isAlive() {
        return this.hp > 0;
    }

    resetHealth() {
        this.hp = this.maxHp;
    }
}