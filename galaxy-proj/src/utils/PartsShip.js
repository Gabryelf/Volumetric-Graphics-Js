import * as THREE from "three";
import { MaterialManager } from '../core/MaterialManager.js';
import { ComponentConstructor } from "./ComponentConstructor.js";
import { ModelLoader } from "../core/ModelLoader.js";

export class PartsShip {
  constructor() {
      this.ship = null;
      this.materialManager = new MaterialManager();
      this.componentConstructor = new ComponentConstructor();
      this.modelLoader = new ModelLoader();
  }

  async addCabin() {
    //const geometry = this.componentConstructor.createWindow();
    //const material = this.materialManager.createMaterial('armor_plating');
    //const material = new THREE.MeshStandardMaterial({color: 'blue'});
    //material.side = 2;
    //const cylinder = new THREE.Mesh(geometry, material);
    const cylinder = await this.modelLoader.loadPart('cabine');
    return cylinder;
  }

}