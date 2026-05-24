import * as THREE from 'three';
import {PartsShip} from "./PartsShip.js"
import {SHIP_CONFIG} from "../config/ship.js"

export class ShipGenerator{
    constructor(scene){
        this.ship = null;
        this.scene = scene;
        this.partsShip = new PartsShip();

        this.collisionRadius = 1;
    }

    async createShip(ship_type = null){
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
        this.ship.name = 'cruiser';
        this.ship.position.set(0,0,6);
        this.ship.scale.set(type.scale.x, type.scale.y, type.scale.z);
        
        let cabine = await this.partsShip.addCabin();
        cabine.position.z = this.ship.position.z + 0;
        this.ship.add(cabine);
        this.scene.add(this.ship);

        this.updateCollisionRadius();
    }

    // Обновление радиуса коллизии при изменении масштаба
    updateCollisionRadius() {
        if (!this.ship) return;
        // Берём средний масштаб и умножаем на базовый радиус
        const avgScale = (this.ship.scale.x + this.ship.scale.y + this.ship.scale.z) / 3;
        this.collisionRadius = avgScale; // Подберите коэффициент под вашу модель
    }
    
    // Метод для проверки коллизии
    checkCollisionWithSphere(center, radius) {
        if (!this.ship) return false;
        
        const shipCenter = new THREE.Vector3();
        this.ship.getWorldPosition(shipCenter);
        
        const distance = shipCenter.distanceTo(center);
        const collisionThreshold = this.collisionRadius + radius;
        
        return distance < collisionThreshold;
    }
    
    // Получение данных для внешних проверок
    getCollisionData() {
        const center = new THREE.Vector3();
        this.ship.getWorldPosition(center);
        return { center, radius: this.collisionRadius };
    }
    
    // Визуальный отклик на столкновение
    onCollision() {
        // Мигание корабля
        if (this.ship) {
            this.ship.rotation.z += 10;
        }
        
        // Отталкивание (простая физика)
        // Можно добавить вектор отталкивания от астероида
    }
}
    