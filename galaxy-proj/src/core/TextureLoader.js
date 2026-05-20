import * as THREE from 'three';
import {TEXTURES_CONFIG} from '../config/texture.js';

export class TextureLoader {
    constructor() {
        this.texture_loader = new THREE.TextureLoader();
    }
    
    load( url ) { 
        const texture = this.texture_loader.load( 
            url, 
            ( texture ) => {
                texture.colorSpace = THREE.SRGBColorSpace
            }
        )
        return texture;
    }
    
    load_maps(index_map) {
        if(index_map === 1){
            const url_albedo = TEXTURES_CONFIG.url.rock.albedo;
            const texture = this.texture_loader.load(url_albedo);
            return texture;
        }
        if(index_map === 2){
            const url_ao = TEXTURES_CONFIG.url.rock.ao;
            const texture = this.texture_loader.load(url_ao);
            return texture;
        }
        if(index_map === 3){
            const url_height = TEXTURES_CONFIG.url.rock.height;
            const texture = this.texture_loader.load(url_height);
            return texture;
        }
        
    }
    
}