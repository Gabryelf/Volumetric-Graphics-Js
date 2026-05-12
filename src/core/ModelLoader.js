import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

export class ModelLoader{
    constructor(scene){
        this.scene = scene;
        this.loader = new GLTFLoader();
        this.modelList = [];
        this.currentModel = null;
        this.currentIndex = 0;
        this.isLoading = false;
    }

    loadModel(url, scale = 1.0) {
        return new Promise((resolve, reject) => {
            this.isLoading = true;
            this.loader.load(
                url,
                (gltf) => {
                    const model = gltf.scene;
                    model.scale.set(scale, scale, scale);

                    model.traverse((child) => {
                        if (child.isMesh) {
                            child.castShadow = true;
                            child.receiveShadow = true;
                        }
                    });
                    
                    this.isLoading = false;
                    resolve(model);
                },
                (progress) => {
                    const percent = (progress.loaded / progress.total * 100).toFixed(2);
                    console.log(`⏳ Загрузка: ${percent}%`);
                },
                (error) => {
                    this.isLoading = false;
                    console.error('❌ Ошибка загрузки модели:', error);
                    reject(error);
                }
            );
        });
    }

    async showModel(index){
        const modelInfo = this.modelsList[index];
        const model = await this.loadModel(modelInfo.url, modelInfo.scale);
        this.currentModel = model;
        model.position.x = -8;
        model.position.z = 8;
        this.scene.add(model);
    }

    setModels(models) {
        this.modelsList = models;
    }

    getCurrentModelInfo() {
        return this.modelsList[this.currentIndex];
    }
}