import * as THREE from 'three';
import {TEXTURES_CONFIG} from '../config/texture.js'
import {TexturesLoader} from '../core/TextureLoader.js'

export class PartsShip{
    constructor(){
        this.parts = [];
        this.textureLoader = new TexturesLoader();
    }

    formatParts(){
        const group = new THREE.Group();
        const cabine = this._createCabine();
        group.add(cabine);
        return group;
    }

    _createCabine(){
        const geometry = new THREE.SphereGeometry(1, 32, 32);
              
        // Создаем кастомный материал с отключенным смешиванием на границах
        const material = this._createMaterialWithMaps();
        material.polygonOffset = true;
        material.polygonOffsetFactor = 1;
        material.polygonOffsetUnits = 1;
        
        const cabine = new THREE.Mesh(geometry, material);
        
        return cabine;
    }

    _addMaterials(select, color){
        if(select === 1){
            const material = new THREE.MeshBasicMaterial( { color: color} );
            return material;
        }
    }

    _createMaterialWithMaps(){
        const {ao, metallic, roughness, normal, height} = TEXTURES_CONFIG.texture_maps;
        // Загружаем все текстуры
        const aoMap = this.textureLoader.textureLoader.load(ao);
        const metalnessMap = this.textureLoader.textureLoader.load(metallic);
        const roughnessMap = this.textureLoader.textureLoader.load(roughness);
        const normalMap = this.textureLoader.textureLoader.load(normal);
        const heightMap = this.textureLoader.textureLoader.load(height);
        
        // Настраиваем цветовое пространство
        //aoMap.colorSpace = THREE.LinearSRGBColorSpace;
        //metalnessMap.colorSpace = THREE.LinearSRGBColorSpace;
        //roughnessMap.colorSpace = THREE.LinearSRGBColorSpace;
        //normalMap.colorSpace = THREE.LinearSRGBColorSpace;
        //heightMap.colorSpace = THREE.LinearSRGBColorSpace;
        
        // Создаем материал со всеми картами
        const material = new THREE.MeshStandardMaterial({
            color: 0xffffff,
            map: this.textureLoader.textureLoader.load("../../textures/space-cruiser-panels2_albedo.png"),
            aoMap: aoMap,
            metalnessMap: metalnessMap,
            roughnessMap: roughnessMap,
            normalMap: normalMap,
            displacementMap: heightMap,
            metalness: 0.8,
            roughness: 0.3,
            side: THREE.DoubleSide
        });

        [aoMap, metalnessMap, roughnessMap, normalMap, heightMap].forEach(map => {
            if (map) {
                map.wrapS = THREE.ClampToEdgeWrapping;  // Не повторять, а растянуть
                map.wrapT = THREE.ClampToEdgeWrapping;  // Не повторять, а растянуть
                map.minFilter = THREE.LinearFilter;
                map.magFilter = THREE.LinearFilter;
            }
        });
        
        // Настройка повторения текстур
        const setupTexture = (texture) => {
            if (texture) {
                texture.wrapS = THREE.RepeatWrapping;
                texture.wrapT = THREE.RepeatWrapping;
                texture.repeat.set(2, 1);
                texture.offset.set(0, 0);
            }
        };
        
        setupTexture(material.map);
        setupTexture(material.aoMap);
        setupTexture(material.metalnessMap);
        setupTexture(material.roughnessMap);
        setupTexture(material.normalMap);
        setupTexture(material.displacementMap);
        
        return material;
    }
}