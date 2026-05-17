import * as THREE from 'three';
import { SCENE_CONFIG } from '../config/scene.js';
import {TexturesLoader} from '../core/TextureLoader.js'

export class SkyGenerator{
    constructor(scene){
        this.textureLoader = new TexturesLoader();
        this.scene = scene;
        this.stars = null;
    }

    generateAll(){
        this._createStars();
        this._createSkyBody();
        this._createModStars();
    }

    _createSkyBody(){
        const geometry = new THREE.BufferGeometry();
		const vertices = [];

        const sprite = new THREE.TextureLoader().load( '../../textures/disc.png' );
        sprite.colorSpace = THREE.SRGBColorSpace;

        for ( let i = 0; i < 100; i ++ ) {

            const x = 800 * Math.random() - 10;
            const y = 800 * Math.random() - 10;
            const z = 800 * Math.random() - 10;

            vertices.push( x, y, z );

        }

        geometry.setAttribute( 'position', new THREE.Float32BufferAttribute( vertices, 3 ) );
        const material = new THREE.PointsMaterial( { size: 35, sizeAttenuation: true, map: sprite, alphaTest: 0.5, transparent: true } );
		material.color.setHSL( 1.0, 0.3, 0.7, THREE.SRGBColorSpace );

		const particles = new THREE.Points( geometry, material );
		this.scene.add( particles );
    }

    _createStars() {
        const { count, size, color, range } = SCENE_CONFIG.stars;
        const geometry = new THREE.BufferGeometry();
        const positions = [];
        
        for (let i = 0; i < count; i++) {
            positions.push((Math.random() - 0.5) * range);
            positions.push((Math.random() - 0.5) * range);
            positions.push((Math.random() - 0.5) * range);
        }
        
        geometry.setAttribute('position', 
            new THREE.BufferAttribute(new Float32Array(positions), 3));
        
        const material = new THREE.PointsMaterial({
            color: color,      // цвет звезд
            size: size,        // размер каждой точки
            transparent: true, // разрешает прозрачность
            opacity: 0.8       // начальная прозрачность 80%
        });
        
        this.stars = new THREE.Points(geometry, material);
        this.scene.add(this.stars);
    }

    _createModStars(){
        const sprite = this.textureLoader.load(0);
        const geometry = new THREE.BufferGeometry();
		const vertices = [];


        for ( let i = 0; i < 10000; i ++ ) {

            const x = Math.random() * 2000 - 1000;
            const y = Math.random() * 2000 - 1000;
            const z = Math.random() * 2000 - 1000;

            vertices.push( x, y, z );

        }
        const material = new THREE.PointsMaterial( { 
            size: 10, 
            map: sprite, 
            blending: THREE.AdditiveBlending, 
            depthTest: false, 
            transparent: true,
            opacity: 0.5
            } 
        );
        geometry.setAttribute( 'position', new THREE.Float32BufferAttribute( vertices, 3 ) );

        const particles = new THREE.Points( geometry, material);
        this.scene.add( particles );
    }
}