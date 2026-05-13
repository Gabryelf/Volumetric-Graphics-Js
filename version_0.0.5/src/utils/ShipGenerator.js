import * as THREE from 'three';
import {PartsShip} from "./PartsShip.js"

export class ShipGenerator{
    constructor(scene){
        this.ship = null;
        this.scene = scene;
        this.partsShip = new PartsShip();
    }

    createShip(){
        this.ship = new THREE.Group();
        this.ship.add(this.partsShip.formatParts());
        this.scene.add(this.ship);
    }

    
}