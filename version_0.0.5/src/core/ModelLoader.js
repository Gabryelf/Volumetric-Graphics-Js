import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js';

export class ModelLoader{
    constructor(scene){
        this.model = null;
        this.scene = scene;

        this.load();
    }

    load(){
        const gltfLoader = new GLTFLoader();
        const url = '../../models/assault.glb';
        gltfLoader.load(url, (gltf) => {
            this.model = gltf.scene; 
            this.scene.add(gltf.scene);
        })
    }
    
}