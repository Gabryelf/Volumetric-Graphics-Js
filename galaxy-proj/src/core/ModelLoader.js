import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js';
import {MODELS_CONFIG} from "../config/model.js"
import { PARTS_CONFIG } from '../config/parts_model.js';
import {TextureLoader} from '../core/TextureLoader.js'

export class ModelLoader{
    constructor(scene){
        this.model = null;
        this.scene = scene;
        this.textureLoader = new TextureLoader();
    }

    async load(id, textureId = null, textureOptions = {}) { // Добавлен textureOptions
        return new Promise((resolve, reject) => {
            const gltfLoader = new GLTFLoader();
            let url = null;
            
            if (id === 'scout') {
                url = MODELS_CONFIG.ships[0].url; // Исправлено: ships[0] для scout
            }
            if (id === 'assault') {
                url = MODELS_CONFIG.ships[1].url;
            }
            if (id === 'freighter') {
                url = MODELS_CONFIG.ships[2].url;
            }
            if (id === 'asteroid') {
                url = MODELS_CONFIG.body[0].url;
            }

            
            gltfLoader.load(url, 
                (gltf) => {
                    this.model = gltf.scene; 
                    if (textureId !== null) {
                        // Передаем textureOptions
                        this.textureLoader.loadTextureForModel(textureId, this.model, textureOptions);
                        // Применяем дополнительные карты
                        this.textureLoader.loadMaps(this.model, {
                            ao: "../../textures/space-cruiser-panels2_ao.png",
                            metallic: "../../textures/space-cruiser-panels2_metallic.png",
                            roughness: "../../textures/space-cruiser-panels2_roughness.png",
                            normal: "../../textures/space-cruiser-panels2_normal-ogl.png",
                            height: "../../textures/space-cruiser-panels2_height.png"
                        });
                    }
                    this.model.position.set(0, 0, 0);
                    //this.model.rotation.set(0, 0, 0);   
                    this.model.rotation.y = Math.PI / 2;                    
                    
                    this.scene.add(gltf.scene);
                    resolve(this.model);
                },
                (progress) => {
                    console.log('Loading progress:', (progress.loaded / progress.total * 100) + '%');
                },
                (error) => {
                    console.error('Error loading model:', error);
                    reject(error);
                }
            );
        });
    }

    async loadPart(id) {
        return new Promise((resolve, reject) => {
            const gltfLoader = new GLTFLoader();
            let url = id === 'cabine' ? PARTS_CONFIG.cabines[0] : null;
           
            gltfLoader.load(url, (gltf) => {
                this.model = gltf.scene; 
    
                // Получаем текстуру и СОХРАНЯЕМ в переменную
                let texture = this.textureLoader.load(0, 'ship');
                console.log(texture)
    
                // Применяем ко всем мешам
                this.model.traverse((child) => {
                    if (child.isMesh && child.material) {
                        const materials = Array.isArray(child.material) 
                            ? child.material 
                            : [child.material];
                        
                        materials.forEach(mat => {
                            mat.map = texture;
                            mat.needsUpdate = true;
                        });
                    }
                });
    
                // 🔹 3. Финальная настройка
                this.model.position.set(0, 0, 0);
                this.model.rotation.y = Math.PI / 2;
                
                resolve(this.model);
                
            }, 
            (progress) => console.log('Progress:', progress.loaded / progress.total * 100 + '%'),
            (error) => {
                console.error('Error:', error);
                reject(error);
            });
        });
    }
    

}