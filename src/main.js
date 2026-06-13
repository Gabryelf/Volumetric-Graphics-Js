import * as THREE from 'three';
import {SceneManager} from "./core/SceneManager.js";
import {CameraManager} from "./core/CameraManager.js";
import {LightManager} from "./core/LightManager.js";
import {SkySettings} from "./utils/SkySettings.js"
import {ModelLoader} from "./core/ModelLoader.js"
import {Ship} from './entities/Ship.js'


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

    setupControls(){
        window.addEventListener('keydown', (event) => {
            if(event.key === 'a'){
                this.model.rotation.z -= 0.01;
            }
            if(event.key === 'd'){
                this.model.rotation.z += 0.01;
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

        if(this.model){
            this.cameraManager.update(this.model, delta);
            this.model.position.z += 0.03;
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
