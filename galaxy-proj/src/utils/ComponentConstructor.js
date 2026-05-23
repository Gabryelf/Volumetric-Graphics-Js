import * as THREE from 'three';

export class ComponentConstructor{
    constructor(){

    }

    createWindow(options = {}) {
        const radius = 1;
        const height = 2;
        const radialSegments = 8;
        const heightSegments = 1;
        const openEnded = false;
        const thetaStart = 0;
        const thetaLength =  Math.PI * 2;

        const geometry = new THREE.ConeGeometry(
            radius, 
            height, 
            radialSegments, 
            heightSegments, 
            openEnded, 
            thetaStart, 
            thetaLength
        );
        
        return geometry;
    }
}