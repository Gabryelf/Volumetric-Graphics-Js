import * as THREE from 'three';
import {TEXTURES_CONFIG} from "../config/texture.js"

export class TexturesLoader{
    constructor(){
        this.textureLoader = new THREE.TextureLoader();
        this.textureCache = new Map();
    }

    load(index){
        const url = TEXTURES_CONFIG.url[index];

        const assignSRGB = ( texture ) => {

            texture.colorSpace = THREE.SRGBColorSpace;

        };

        const sprite = this.textureLoader.load( url, assignSRGB );
        return sprite;
    }

    // Специальный метод для загрузки текстуры на модель
    loadTextureForModel(index, model, options = {}) {
        const url = TEXTURES_CONFIG.url[index];
        
        // Проверяем кэш
        if (this.textureCache.has(url)) {
            this.applyTextureToModel(model, this.textureCache.get(url), options);
            return;
        }

        // Загружаем текстуру
        const texture = this.textureLoader.load(
            url,
            (loadedTexture) => {
                // После загрузки применяем к модели
                loadedTexture.colorSpace = THREE.SRGBColorSpace;
                this.textureCache.set(url, loadedTexture);
                this.applyTextureToModel(model, loadedTexture, options);
            },
            undefined,
            (error) => {
                console.error('Error loading texture for model:', error);
            }
        );
    }

    // Применение текстуры к модели
    applyTextureToModel(model, texture, options = {}) {
        const {
            color = 0xffffff,
            roughness = 0.5,
            metalness = 0.5,
            emissive = 0x000000,
            transparent = false,
            opacity = 1.0,
            repeat = { x: 1, y: 1 },
            offset = { x: 0, y: 0 }
        } = options;

        // Настройки повторения текстуры
        texture.wrapS = THREE.RepeatWrapping;
        texture.wrapT = THREE.RepeatWrapping;
        texture.repeat.set(repeat.x, repeat.y);
        texture.offset.set(offset.x, offset.y);
        
        // Применяем ко всем мешам модели
        let materialCount = 0;
        model.traverse((child) => {
            if (child.isMesh) {
                materialCount++;
                
                // Создаем новый материал с текстурой
                const newMaterial = new THREE.MeshStandardMaterial({
                    map: texture,
                    color: color,
                    roughness: roughness,
                    metalness: metalness,
                    emissive: emissive,
                    transparent: transparent,
                    opacity: opacity
                });
                
                // Заменяем старый материал
                if (child.material) {
                    child.material.dispose(); // Очищаем старый материал
                }
                child.material = newMaterial;
            }
        });
        
        console.log(`Texture applied to ${materialCount} meshes in model`);
    }

    // Метод для применения разных текстур к разным частям модели
    loadMultiTexturesForModel(textureMap, model) {
        const texturesToLoad = [];
        
        // Загружаем все текстуры
        for (const [partName, textureId] of Object.entries(textureMap)) {
            const url = TEXTURES_CONFIG.url[textureId];
            const texture = this.textureLoader.load(url);
            texture.colorSpace = THREE.SRGBColorSpace;
            texturesToLoad.push({ partName, texture });
        }
        
        // Применяем после загрузки
        Promise.all(texturesToLoad.map(t => new Promise(resolve => {
            if (t.texture.image && t.texture.image.complete) {
                resolve(t);
            } else {
                t.texture.addEventListener('load', () => resolve(t));
            }
        }))).then(loadedTextures => {
            model.traverse((child) => {
                if (child.isMesh) {
                    // Ищем соответствие по имени
                    const matchedTexture = loadedTextures.find(t => 
                        child.name.toLowerCase().includes(t.partName.toLowerCase())
                    );
                    
                    if (matchedTexture) {
                        const newMaterial = new THREE.MeshStandardMaterial({
                            map: matchedTexture.texture,
                            roughness: 0.5,
                            metalness: 0.5
                        });
                        child.material = newMaterial;
                    }
                }
            });
        });
    }
}