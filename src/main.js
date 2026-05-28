//================================
// главный файл - точка запуска
//================================
import * as THREE from 'three';
import {SceneManager} from './core/SceneManager.js';
import {CameraManager} from './core/CameraManager.js';
import {LightManager} from './core/LightManager.js';
import {SkyGenerator} from './helpers/SkyGenerator.js';
import {ModelLoader} from './core/ModelLoader.js';

class Game{
    constructor(){
        this.sceneManager = null;
        this.cameraManager = null;
        this.lightManager = null;
        this.modelLoader = null;
        this.renderer = null;
        
        this.skyGenerator = null;

        this.ship = null;

        this.clock = null;
        
        this.init();
    }
    
    init(){
        this.sceneManager = new SceneManager();
        const scene = this.sceneManager.create();
        
        this.renderer = new THREE.WebGLRenderer({antialias: true});
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        document.body.appendChild(this.renderer.domElement);
        
        this.cameraManager = new CameraManager(this.renderer.domElement);
        this.cameraManager.create();
        this.cameraManager.createFlyControls();
        
        this.lightManager = new LightManager(scene);
        this.lightManager.createAll();

        this.modelLoader = new ModelLoader(scene);
        this.modelLoader.load(0, 'ships');

        setTimeout(() => {
            this.ship = this.modelLoader.getModel();
        }, 1000)
        
        this.skyGenerator = new SkyGenerator(scene);
        this.skyGenerator.generateAll();
        

        this.clock = new THREE.Clock();

        window.addEventListener( 'resize', () => this.onWindowResize());
        
        this.animate();
    }

    onWindowResize() {
        this.cameraManager.onWindowResize();
        this.renderer.setSize( window.innerWidth, window.innerHeight );
    }
    
    animate = ()=> {
        requestAnimationFrame(this.animate);

        const delta = this.clock.getDelta();

        this.cameraManager.update(delta);
        this.sceneManager.update(this.skyGenerator.stars);

        const camera = this.cameraManager.camera;

        if(this.ship){
            this.ship.position.copy(camera.position);
        }
        
        this.renderer.render(
            this.sceneManager.getScene(),
            this.cameraManager.getCamera()
        );
    }
}

export const game = new Game();