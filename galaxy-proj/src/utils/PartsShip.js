import * as THREE from "three";
import { MaterialManager } from '../core/MaterialManager.js';

export class PartsShip {
  constructor() {
      this.ship = null;
      this.materialManager = new MaterialManager();
  }

  addCabin() {
    const geometry = new THREE.SphereGeometry(1, 32, 32);
    geometry.thetaLenght = 3.04;
    geometry.radialSegment = 3;
    const material = this.materialManager.createMaterial('armor_plating');
    material.side = 2;
    console.log(material);
    const cylinder = new THREE.Mesh(geometry, material);
    return cylinder;
  }
}