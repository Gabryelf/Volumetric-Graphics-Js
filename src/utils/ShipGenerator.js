import * as THREE from 'three';
import {PartsShip} from "./PartsShip.js"
import {SHIP_CONFIG} from "../config/ship.js"

export class ShipGenerator{
    constructor(scene){
        this.ship = null;
        this.scene = scene;
        this.partsShip = new PartsShip();
    }

    createShip(ship_type = null){
        let type = null;
        if(ship_type === 1){
            type = SHIP_CONFIG.type.scaut;
        }
        else if (ship_type === 2) {
            type = SHIP_CONFIG.type.assault;
        } else {
            type = SHIP_CONFIG.type.combat;
        }
        this.ship = new THREE.Group();
        this.ship.position.set(0,0,0);
        this.ship.scale.set(type.scale.x, type.scale.y, type.scale.z);
        const cabine = this.partsShip.addCabin();
        cabine.position.z = type.scale.z - type.scale.z / 2;
        this.ship.add(cabine);
        this.scene.add(this.ship);
    }

    
}