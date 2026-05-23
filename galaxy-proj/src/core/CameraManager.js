import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { FlyControls } from 'three/addons/controls/FlyControls.js';
import { CAMERA_CONFIG } from '../config/camera.js';

export class CameraManager {
    constructor(rendererDomElement) {
        this.camera = null;
        this.controls = null;
        this.ship = null;
        this.shipFollowsCamera = false;
        this.cameraOffset = new THREE.Vector3(0, 4, -15);
        this.rendererDomElement = rendererDomElement;
    }

    createPerspectiveCamera() {
        this.camera = new THREE.PerspectiveCamera(
            CAMERA_CONFIG.fov,
            window.innerWidth / window.innerHeight,
            CAMERA_CONFIG.near,
            CAMERA_CONFIG.far
        );

        this.camera.position.set(
            CAMERA_CONFIG.position.x,
            CAMERA_CONFIG.position.y,
            CAMERA_CONFIG.position.z
        );

        this.camera.lookAt(
            CAMERA_CONFIG.target.x,
            CAMERA_CONFIG.target.y,
            CAMERA_CONFIG.target.z
        );
        
        return this.camera;
    }
   
    createOrbitControls(){
        this._safeDispose();

        const {
            enableDamping, dampingFactor, autoRotate, 
            enableZoom, zoomSpeed, rotateSpeed} = CAMERA_CONFIG.orbit_controls;

        this.controls = new OrbitControls(this.camera, this.rendererDomElement);

        this.controls.enableDamping = enableDamping;
        this.controls.dampingFactor = dampingFactor;
        this.controls.autoRotate = autoRotate;
        this.controls.enableZoom = enableZoom;
        this.controls.zoomSpeed = zoomSpeed;
        this.controls.rotateSpeed = rotateSpeed;

        this.controls.target.set(
            CAMERA_CONFIG.target.x,
            CAMERA_CONFIG.target.y,
            CAMERA_CONFIG.target.z
        );

        this.shipFollowsCamera = false;

        return this.controls;
    }

    createFlyControls(ship = null){
        this._safeDispose();

        const {
            movementSpeed, 
            rollSpeed,
            autoForward,
            dragToLook
        } = CAMERA_CONFIG.fly_controls;

        this.controls = new FlyControls(this.camera, this.rendererDomElement);

        this.controls.movementSpeed = movementSpeed ?? 1.0;
        this.controls.rollSpeed = rollSpeed ?? 0.005;
        this.controls.autoForward = autoForward ?? false;
        this.controls.dragToLook = dragToLook ?? false;
        // если корабль передан - привязываем логику следования
        if (ship) {
            this.ship = ship;
            this.shipFollowsCamera = true;
            
            // ставим камеру в стартовую позицию относительно корабля
            this.camera.position.copy(this.cameraOffset);
            this.camera.lookAt(this.camera.position.clone().add(new THREE.Vector3(0, 0, 1)));
        }
        return this.controls;
    }

    update(delta = 0) {
        if (this.controls) {
            this.controls.update(delta);
        }
        
        // Корабль плавно следует за камерой и её направлением
        if (this.shipFollowsCamera && this.ship && this.camera) {
            const direction = new THREE.Vector3();
            this.camera.getWorldDirection(direction);
            
            // Поворачиваем корабль в направлении взгляда камеры
            const lookTarget = this.camera.position.clone().add(direction);
            this.ship.lookAt(lookTarget);
            
            // Позиция корабля: летит "в хвосте" камеры с плавным отставанием (инерция)
            const targetShipPos = this.camera.position.clone().add(direction.clone().multiplyScalar(-8));
            this.ship.position.lerp(targetShipPos, 0.08); // 0.08 = плавность следования
        }
    }


    onWindowResize() {
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
    }

    getCamera() {
        return this.camera;
    }

    getControls(){
        return this.controls;
    }

    _safeDispose() {
        if (this.controls && typeof this.controls.dispose === 'function') {
            this.controls.dispose();
            this.controls = null;
        }
    }
}