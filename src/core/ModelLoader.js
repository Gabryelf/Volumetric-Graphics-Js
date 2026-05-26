import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js';
import {MODELS_CONFIG} from "../config/model.js"
import {TextureLoader} from '../core/TextureLoader.js'

export class ModelLoader{
    constructor(scene){
        this.model = null;
        this.scene = scene;
        this.textureLoader = new TextureLoader();
    }

    load(id, onLoad = null) {
        this.model = null;
        const gltfLoader = new GLTFLoader();
        let url = null;
        
        if (id === 'scout') url = MODELS_CONFIG.ships[0].url;
        if (id === 'assault') url = MODELS_CONFIG.ships[1].url;
        if (id === 'asteroid') url = MODELS_CONFIG.body[0].url;
        
        gltfLoader.load(url, 
            (gltf) => {
                this.model = gltf.scene;
                this.scene.add(gltf.scene);
                
                if (onLoad) {
                    onLoad(gltf.scene);
                }
            },
            (progress) => {
                console.log('Loading progress:', (progress.loaded / progress.total * 100) + '%');
            },
            (error) => {
                console.error('Error loading model:', error);
            }
        );
    }

}