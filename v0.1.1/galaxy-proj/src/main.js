import * as THREE from 'three';
import { SceneManager } from './core/SceneManager.js';
import { CameraManager } from './core/CameraManager.js';
import { LightManager } from './core/LightManager.js';
import { ModelLoader } from './core/ModelLoader.js';
import { SkySettings } from "./utils/SkySettings.js";
import { Ship } from './entities/Ship.js';
import { NetworkManager } from './core/NetworkManager.js';

class Game {
    constructor() {
        this.sceneManager = null;
        this.cameraManager = null;
        this.lightManager = null;
        this.modelLoader = null;
        this.renderer = null;
        this.skySettings = null;
        this.scene = null;
        this.localShip = null;
        this.clock = null;
        this.networkManager = null;
        this.remotePlayers = new Map();
        this.keys = { w: false, s: false, a: false, d: false };

        this.init();
    }

    init() {
        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.shadowMap.enable = true;
        document.body.appendChild(this.renderer.domElement);

        this.sceneManager = new SceneManager();
        const scene = this.sceneManager.create();

        this.lightManager = new LightManager(scene);
        this.lightManager.createAll();
        
        this.skySettings = new SkySettings(scene);
        this.skySettings.createStars();

        this.modelLoader = new ModelLoader(scene);

        const urlParams = new URLSearchParams(window.location.search);
        const sessionId = urlParams.get('session');
        
        if (sessionId) {
            const playerName = urlParams.get('name') || `Player_${Math.floor(Math.random() * 1000)}`;
            this.networkManager = new NetworkManager(scene, this.modelLoader);
            
            this.networkManager.onInit = (players) => {
                players.forEach(player => this.addRemotePlayer(player));
            };
            
            this.networkManager.onPlayerJoin = (player) => {
                this.addRemotePlayer(player);
            };
            
            this.networkManager.onPlayerMove = (data) => {
                const remote = this.remotePlayers.get(data.id);
                if (remote) {
                    remote.targetPosition = data.position;
                    remote.targetRotation = data.rotation;
                }
            };
            
            this.networkManager.onPlayerLeave = (id) => {
                const remote = this.remotePlayers.get(id);
                if (remote && remote.model) {
                    this.sceneManager.getScene().remove(remote.model);
                    this.remotePlayers.delete(id);
                }
            };
            
            const modelIndex = 0;
            this.networkManager.connect(sessionId, playerName, modelIndex);
        }

        this.ship = new Ship(this.modelLoader, 0);
        this.clock = new THREE.Clock();

        setTimeout(() => {
            this.localShip = this.modelLoader.model;
            this.cameraManager = new CameraManager(this.renderer.domElement);
            this.cameraManager.create(this.localShip);
            this.cameraManager.createOrbitControls(this.localShip);
        }, 500);

        this.setupControls();
        window.addEventListener('resize', () => this.onWindowResize());
        this.animate();
    }

    addRemotePlayer(playerData) {
        if (this.remotePlayers.has(playerData.id)) return;
        
        const remoteLoader = new ModelLoader(this.sceneManager.getScene());
        new Ship(remoteLoader, playerData.modelIndex || 0);
        
        const checkInterval = setInterval(() => {
            if (remoteLoader.model) {
                clearInterval(checkInterval);
                remoteLoader.model.position.copy(playerData.position);
                remoteLoader.model.rotation.copy(playerData.rotation);
                
                this.remotePlayers.set(playerData.id, {
                    model: remoteLoader.model,
                    targetPosition: playerData.position,
                    targetRotation: playerData.rotation
                });
            }
        }, 50);
    }

    setupControls() {
        window.addEventListener('keydown', (e) => {
            const key = e.key.toLowerCase();
            if (key === 'a' || key === 'arrowleft') this.keys.a = true;
            if (key === 'd' || key === 'arrowright') this.keys.d = true;
            if (key === 'w' || key === 'arrowup') this.keys.w = true;
            if (key === 's' || key === 'arrowdown') this.keys.s = true;
        });

        window.addEventListener('keyup', (e) => {
            const key = e.key.toLowerCase();
            if (key === 'a' || key === 'arrowleft') this.keys.a = false;
            if (key === 'd' || key === 'arrowright') this.keys.d = false;
            if (key === 'w' || key === 'arrowup') this.keys.w = false;
            if (key === 's' || key === 'arrowdown') this.keys.s = false;
        });
    }

    updateLocalShip(deltaTime) {
        if (!this.localShip) return;
        
        const moveSpeed = 5;
        const rotSpeed = 2;
        
        if (this.keys.a) this.localShip.rotation.y += rotSpeed * deltaTime;
        if (this.keys.d) this.localShip.rotation.y -= rotSpeed * deltaTime;
        if (this.keys.w) this.localShip.translateZ(moveSpeed * deltaTime);
        if (this.keys.s) this.localShip.translateZ(-moveSpeed * deltaTime);
        
        // Ограничения для тестирования в изоляции
        this.localShip.position.x = Math.max(-20, Math.min(20, this.localShip.position.x));
        this.localShip.position.z = Math.max(-30, Math.min(30, this.localShip.position.z));
        
        if (this.networkManager) {
            this.networkManager.sendPosition(this.localShip.position, this.localShip.rotation);
        }
        
        if (this.cameraManager) {
            this.cameraManager.update(this.localShip, deltaTime);
        }
    }

    onWindowResize() {
        if (this.cameraManager) this.cameraManager.onWindowResize();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
    }

    animate() {
        requestAnimationFrame(() => this.animate());
        const delta = Math.min(1/30, this.clock.getDelta());
        
        this.updateLocalShip(delta);
        
        // Плавное движение удаленных игроков
        for (const [_, remote] of this.remotePlayers) {
            if (remote.targetPosition && remote.model) {
                remote.model.position.lerp(remote.targetPosition, 0.3);
                if (remote.targetRotation) {
                    remote.model.rotation.x += (remote.targetRotation.x - remote.model.rotation.x) * 0.3;
                    remote.model.rotation.y += (remote.targetRotation.y - remote.model.rotation.y) * 0.3;
                    remote.model.rotation.z += (remote.targetRotation.z - remote.model.rotation.z) * 0.3;
                }
            }
        }

        if (this.cameraManager) {
            this.renderer.render(this.sceneManager.getScene(), this.cameraManager.getCamera());
        }
    }
}

const game = new Game();