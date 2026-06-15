import * as THREE from 'three';
import {SHIP_CONFIG} from '../config/ship.js'

export class Ship{
    constructor(modelLoader, index){
        this.modelLoader = modelLoader;
        this.collection_ship = ['scout', 'assault']
        this.ship =  null;
        this.hp = SHIP_CONFIG.type[this.collection_ship[index]].hp;
        this.fuel = 100;
        this.maxFuel = 100;

        this.createShip(index);
    }

    createShip(index){
        this.modelLoader.load(index);
    }

    useFuel(amount) {
        this.fuel = Math.max(0, this.fuel - amount);
        return this.fuel > 0;
    }

    addFuel(amount) {
        this.fuel = Math.min(this.maxFuel, this.fuel + amount);
    }

}