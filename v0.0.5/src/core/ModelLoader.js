import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js';
import {MODELS_CONFIG} from "../config/model.js"
import {TexturesLoader} from '../core/TextureLoader.js'

export class ModelLoader{
    constructor(scene){
        this.model = null;
        this.scene = scene;
        this.textureLoader = new TexturesLoader();
    }

    load(id, textureId = null, textureOptions = {}) { // Добавлен textureOptions
        const gltfLoader = new GLTFLoader();
        let url = null;
        
        if (id === 'scout') {
            url = MODELS_CONFIG.ships[0].url; // Исправлено: ships[0] для scout
        }
        if (id === 'assault') {
            url = MODELS_CONFIG.ships[1].url;
        }
        if (id === 'asteroid') {
            url = MODELS_CONFIG.body[0].url;
        }
        
        console.log('Loading model from:', url);
        
        gltfLoader.load(url, 
            (gltf) => {
                this.model = gltf.scene;
                console.log('Model loaded successfully:', id);
                
                if (textureId !== null) {
                    // Передаем textureOptions
                    this.textureLoader.loadTextureForModel(textureId, this.model, textureOptions);
                }
                
                this.scene.add(gltf.scene);
                console.log('Model added to scene');
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