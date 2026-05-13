import * as THREE from 'three';
import {TEXTURES_CONFIG} from "../config/texture.js"

export class TexturesLoader{
    constructor(){
        this.textureLoader = new THREE.TextureLoader();
    }

    load(index){
        const url = TEXTURES_CONFIG.url[index];

        const assignSRGB = ( texture ) => {

            texture.colorSpace = THREE.SRGBColorSpace;

        };

        const sprite = this.textureLoader.load( url, assignSRGB );
        return sprite;
    }
}