import * as THREE from 'three';
import { SCENE_CONFIG } from '../config/scene.js';

export class Generator{
    constructor(scene){
        this.scene = scene;
        this.stars = null;
    }

    generateAll(){
        this._createStars();
        this._createSkyBody();
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
}