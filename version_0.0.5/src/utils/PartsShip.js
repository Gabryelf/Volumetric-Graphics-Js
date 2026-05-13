import * as THREE from 'three';

export class PartsShip{
    constructor(){
        this.parts = [];
    }

    formatParts(){
        const group = new THREE.Group();
        const cabine = this._createCabine();
        group.add(cabine);
        return group;
    }

    _createCabine(){
        const geometry = new THREE.ConeGeometry();
        geometry.radius = 5;
        geometry.height = 10;
        geometry.radialSegments = 8;
        geometry.thetaLength = 1.878
        const material = this._addMaterials(1, 'red');
        const cabine = new THREE.Mesh(geometry, material);
        return cabine;

    }

    _addMaterials(select, color){
        if(select === 1){
            const material = new THREE.MeshBasicMaterial( { color: color} );
            return material;
        }
    }
}