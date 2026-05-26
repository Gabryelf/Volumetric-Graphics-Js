import * as THREE from "three";
import { TextureLoader } from '../core/TextureLoader.js';

export class PartsShip {
  constructor() {
      this.ship = null;
      this.textureLoader = new TextureLoader();
  }

  addCabin() {
    const geometry = new THREE.SphereGeometry(1, 32, 32);
    const map = this.textureLoader.load(0, 'ship');
    const map_ao = this.textureLoader.load(1, 'ship');
    const map_metallic = this.textureLoader.load(2, 'ship');
    const map_roughness = this.textureLoader.load(3, 'ship');
    const map_normal = this.textureLoader.load(4, 'ship');
    const map_heigth = this.textureLoader.load(5, 'ship');
    const material = new THREE.MeshStandardMaterial({
        map: map, 
        aoMap: map_ao, 
        metalnessMap: map_metallic,
        roughnessMap: map_roughness,
        normalMap: map_normal,
        displacementMap: map_heigth
    });
    material.side = 2;
    console.log(material);
    const cylinder = new THREE.Mesh(geometry, material);
    return cylinder;
  }
}