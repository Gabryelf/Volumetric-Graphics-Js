import * as THREE from 'three';
import {SceneManager} from "./core/SceneManager.js";
import {CameraManager} from "./core/CameraManager.js";
import {LightManager} from "./core/LightManager.js";
import {Settings} from "./utils/Settings.js";
import {SkySettings} from "./utils/SkySettings.js";
import {ModelLoader} from "./core/ModelLoader.js";
import {Ship} from './entities/Ship.js';
import { NetworkManager } from './network/NetworkManager.js';
import { RemotePlayerManager } from './network/RemotePlayerManager.js';


class Main{
    constructor(){
        this.sceneManager = null;
        this.cameraManager = null;
        this.lightManager = null;
        this.settings = null;
        this.renderer = null;
        this.camera = null;
        
        this.modelLoader = null;
        this.networkManager = null;
        this.remotePlayerManager = null;
        
        this.clock = null;
        this.model = null;

        this.ship = null;
        
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

        this.settings = new Settings(scene);
        //this.settings.createAllHelpers();
        this.settings.createAllMeshes();
        
        this.skySettings = new SkySettings(scene);
        this.skySettings.createStars();

        this.remotePlayerManager = new RemotePlayerManager(this.sceneManager.getScene());

        this.modelLoader = new ModelLoader(scene);
        this.ship = new Ship(this.modelLoader, 0);
        console.log(this.ship)

        setTimeout(()=> {
            this.model = this.modelLoader.model;
            this.modelLoader.model = null;
            this.cameraManager = new CameraManager(this.renderer.domElement);
            this.cameraManager.create(this.model);
            this.cameraManager.createOrbitControls(this.model);
            this.initNetwork();
        }, 500)  

        this.clock = new THREE.Clock();

        window.addEventListener('resize', () => this.onWindowResize());

        window.addEventListener('keydown', (event) => {
            if(event.key === 'a'){
                this.model.rotation.y -= 0.01;
                this.model.rotation.x -= 0.01;
            }
            if(event.key === 'd'){
                this.model.rotation.y += 0.01;
                this.model.rotation.x += 0.01;
            }

            if(event.key === 's'){
                this.model.rotation.z -= 0.02;
                this.model.position.y -= 0.02;
            }

            if(event.key === 'w'){
                this.model.rotation.z += 0.02;
                this.model.position.y += 0.02;
            }
        })

        this.animate();
    }

    async initNetwork(){
        console.log('🌐 Инициализация сети...');
        
        // Убедимся, что remotePlayerManager существует
        if (!this.remotePlayerManager) {
            console.error('❌ remotePlayerManager не инициализирован!');
            return;
        }
        
        this.networkManager = new NetworkManager();
    
        try {
            await this.networkManager.connect();
            console.log('✅ Подключено к серверу! Мой ID:', this.networkManager.myId);
    
            // Регистрируем обработчики ДО того, как сервер пришлёт данные
            this.networkManager.on('current-players', (players) => {
                console.log('📋 current-players callback вызван с:', players);
                if (!players || players.length === 0) {
                    console.log('Нет других игроков');
                    return;
                }
                
                players.forEach(player => {
                    if(player.id !== this.networkManager.myId){
                        console.log(`➕ Добавляем существующего игрока: ${player.id}`);
                        this.remotePlayerManager.createPlayer(
                            player.id,
                            player.position,
                            player.rotation
                        );
                    }
                });
            });
    
            this.networkManager.on('player-joined', (player) => {
                console.log(`👋 player-joined callback: ${player.id}`);
                if (player.id !== this.networkManager.myId) {
                    this.remotePlayerManager.createPlayer(
                        player.id, 
                        player.position, 
                        player.rotation
                    );
                }
            });
    
            this.networkManager.on('player-moved', (data) => {
                this.remotePlayerManager.updatePlayer(
                    data.id, 
                    data.position, 
                    data.rotation
                );
            });
    
            this.networkManager.on('player-disconnected', (playerId) => {
                console.log(`👋 Удаляем игрока: ${playerId}`);
                this.remotePlayerManager.removePlayer(playerId);
            });
    
            this.startPositionSync();
            
        } catch (error) {
            console.error('❌ Не удалось подключиться к серверу:', error);
        }
    }
    
    startPositionSync(){
        setInterval(() => {
            if (this.model && this.networkManager && this.networkManager.isConnected) {
                console.log('📤 Отправляю позицию:', this.model.position);
                this.networkManager.sendPosition(
                    this.model.position,
                    this.model.rotation
                );
            }
        }, 50);
    }
    
    onWindowResize(){
        this.cameraManager.onWindowResize();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
    }
    
    animate(){
        requestAnimationFrame(() => this.animate());

        const delta = this.clock.getDelta();

        if(this.model){
            this.cameraManager.update(this.model, delta);
            this.model.position.z += 0.03;
        }

        if (this.remotePlayerManager) {
            this.remotePlayerManager.updateAnimate(delta);
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
