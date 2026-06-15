import * as THREE from 'three';
import {SceneManager} from "./core/SceneManager.js";
import {CameraManager} from "./core/CameraManager.js";
import {LightManager} from "./core/LightManager.js";
import {SkySettings} from "./utils/SkySettings.js";
import {ModelLoader} from "./core/ModelLoader.js";
import {Ship} from './entities/Ship.js';
import { NetworkManager } from './core/NetworkManager.js';


class Main{
    constructor(){
        this.sceneManager = null;
        this.cameraManager = null;
        this.lightManager = null;
        this.settings = null;
        this.renderer = null;
        this.camera = null;
        
        this.skySettings = null;
        this.modelLoader = null;
        
        this.clock = null;
        this.model = null;

        this.ship = null;

        this.networkManager = null;
        this.remotePlayers = new Map();

        this.fuel = 100;
        this.isMoving = false;
        
        this.init()
    }
    
    init(){
        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.shadowMap.enable = true;
        this.renderer.setPixelRatio(window.devicePixelRatio);
        document.body.appendChild(this.renderer.domElement);

        this.sceneManager = new SceneManager();
        const scene = this.sceneManager.create();

        this.lightManager = new LightManager(scene);
        this.lightManager.createAll();
        
        this.skySettings = new SkySettings(scene);
        this.skySettings.createStars();

        this.modelLoader = new ModelLoader(scene);
        //this.ship = new Ship(this.modelLoader, 0);
        const urlParams = new URLSearchParams(window.location.search);
        const sessionId = urlParams.get('session');

        if(sessionId){
            const playerName = urlParams.get('name');
            this.networkManager = new NetworkManager();

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

            this.networkManager.onFuelUpdate = (fuel) => {
                this.fuel = fuel;
                console.log(`Топливо обновлено: ${this.fuel}%`);
            };

            const modelIndex = 0;
            this.networkManager.connect(sessionId, playerName, modelIndex);
        }

        this.ship = new Ship(this.modelLoader, 0);

        setTimeout(()=> {
            this.model = this.modelLoader.model;
            this.modelLoader.model = null;
            this.cameraManager = new CameraManager(this.renderer.domElement);
            this.cameraManager.create(this.model);
            this.cameraManager.createOrbitControls(this.model);
        }, 500)  

        this.clock = new THREE.Clock();

        window.addEventListener('resize', () => this.onWindowResize());

        this.setupControls();

        this.animate();
    }

    addRemotePlayer(player){
        if(this.remotePlayers.has(player.id)) return;

        const remoteLoader = new ModelLoader(this.sceneManager.getScene());
        new Ship(remoteLoader, player.model_ship);

        const checkInterval = setInterval(() => {
            if(remoteLoader.model){
                clearInterval(checkInterval);
                remoteLoader.model.position.copy(player.position);
                remoteLoader.model.rotation.copy(player.rotation);

                this.remotePlayers.set(player.id, {
                    model: remoteLoader.model,
                    targetPosition: player.position,
                    targetRotation: player.rotation
                })
            }
        }, 50);
    }

    setupControls(){
        const FUEL_COST = 0.3;
        window.addEventListener('keydown', (event) => {
            let moved = false;
            if(event.key === 'a'){
                this.model.rotation.z -= 0.01;
            }
            if(event.key === 'd'){
                this.model.rotation.z += 0.01;
            }
            if(event.key === 'w'){
                if (this.fuel > 0){
                    this.model.position.z += 0.03;
                    this.fuel = Math.max(0, this.fuel - FUEL_COST);
                    moved = true;
                }  
            }
            if(event.key === 's'){
                if(this.fuel > 0){
                    this.model.position.z -= 0.03;
                    this.fuel = Math.max(0, this.fuel - FUEL_COST);
                    moved = true;
                }
            }
        })
    }
    
    onWindowResize(){
        this.cameraManager.onWindowResize();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
    }
    
    animate(){
        requestAnimationFrame(() => this.animate());

        const delta = this.clock.getDelta();

        for(const[_, remote] of this.remotePlayers){
            if(remote.model && remote.targetPosition){
                remote.model.position.lerp(remote.targetPosition, 0.3);
                if (remote.targetRotation) {
                    remote.model.rotation.x += (remote.targetRotation.x - remote.model.rotation.x) * 0.3;
                    remote.model.rotation.y += (remote.targetRotation.y - remote.model.rotation.y) * 0.3;
                    remote.model.rotation.z += (remote.targetRotation.z - remote.model.rotation.z) * 0.3;
                }
            }
        }

        if (this.networkManager) {
            this.networkManager.sendPosition(this.model.position, this.model.rotation, this.fuel);
        }

        if(this.model){
            this.cameraManager.update(this.model, delta);
        }

        if(this.cameraManager){
            this.renderer.render(
                this.sceneManager.getScene(),         
                this.cameraManager.getCamera(),
                this.camera = this.cameraManager.getCamera()
            )
        }
        
    }
}

const game = new Main();
