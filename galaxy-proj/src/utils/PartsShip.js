import * as THREE from "three";
import { MaterialManager } from '../core/MaterialManager.js';
import { ComponentConstructor } from "./ComponentConstructor.js";

export class PartsShip {
  constructor() {
      this.ship = null;
      this.materialManager = new MaterialManager();
      this.componentConstructor = new ComponentConstructor();
  }

  addCabin() {
    const geometry = this.componentConstructor.createWindow();
    //const material = this.materialManager.createMaterial('armor_plating');
    const material = new THREE.MeshStandardMaterial({color: 'blue'});
    material.side = 2;
    console.log(material);
    const cylinder = new THREE.Mesh(geometry, material);
    return cylinder;
  }

}