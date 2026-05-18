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

        // Загружаем текстуру
        const texture = this.textureLoader.load(
            url,
            (loadedTexture) => {
                // После загрузки применяем к модели
                loadedTexture.colorSpace = THREE.SRGBColorSpace;
                this.textureCache.set(url, loadedTexture);
                this.applyTextureToModel(model, loadedTexture);
            },

        );
    }

    // Применение текстуры к модели
    applyTextureToModel(model, texture) {
        const {
            color,
            roughness,
            metalness,
            emissive,
            transparent,
            opacity,
            repeat,
            offset
        } = TEXTURES_CONFIG.textureOptions;

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

    // метод для применения всех дополнительных карт
    loadMaps(model, maps) {
        // maps = { ao, metallic, roughness, normal, height }
        
        if (maps.ao) {
            const texture = this.textureLoader.load(maps.ao);
            texture.colorSpace = THREE.LinearSRGBColorSpace;
            model.traverse(child => {
                if (child.isMesh) child.material.aoMap = texture;
            });
        }
        
        if (maps.metallic) {
            const texture = this.textureLoader.load(maps.metallic);
            texture.colorSpace = THREE.LinearSRGBColorSpace;
            model.traverse(child => {
                if (child.isMesh) child.material.metalnessMap = texture;
            });
        }
        
        if (maps.roughness) {
            const texture = this.textureLoader.load(maps.roughness);
            texture.colorSpace = THREE.LinearSRGBColorSpace;
            model.traverse(child => {
                if (child.isMesh) child.material.roughnessMap = texture;
            });
        }
        
        if (maps.normal) {
            const texture = this.textureLoader.load(maps.normal);
            texture.colorSpace = THREE.LinearSRGBColorSpace;
            model.traverse(child => {
                if (child.isMesh) child.material.normalMap = texture;
            });
        }
        
        if (maps.height) {
            const texture = this.textureLoader.load(maps.height);
            texture.colorSpace = THREE.LinearSRGBColorSpace;
            model.traverse(child => {
                if (child.isMesh) child.material.displacementMap = texture;
            });
        }
        
        console.log('Maps applied');
    }
}