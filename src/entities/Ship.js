import * as THREE from 'three';

export class Ship {
    constructor(scene, cameraManager){
        this.scene = scene;
        this.cameraManager = cameraManager;
        this.model = null;
        this.spid = 5;
        this.offsetFromCamera = new THREE.Vector3(0, -23, 0);
    }

    setModel(model){
        this.model = model;
        this.scene.add(model);
    }

    update(){
        if(!this.model && !this.cameraManager) return;

        const camera = this.cameraManager.getCamera();

        this.model.position.copy(camera.position);
        this.model.position.y += this.offsetFromCamera.y;
        this.model.position.z += this.offsetFromCamera.z;

        this.model.rotation.x = camera.rotation.x;
        this.model.rotation.y = camera.rotation.y + Math.PI / 4;
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
}