import * as THREE from 'three';
import { PALETTES, createMaterial } from './materials.js';
import { createNoseGeometry, createCanopyGeometry, createNozzleGeometry, createRingGeometry } from './shapes.js';

// ============================================
// VISUAL FACTORY — создаёт красивые составные меши
// ============================================

/**
 * Каждая функция принимает размеры и возвращает Group с assembled деталью.
 * Group ведёт себя как единый меш — его можно двигать, вращать.
 */
export class VisualFactory {
    
    /**
     * Кабина = нос + корпус + рама + стекло
     */
    static createCabin(size) {
        const palette = PALETTES.cabin;
        const group = new THREE.Group();
        
        // === 1. НОС (закруглённый конус) ===
        const noseLength = size.z * 1.2;
        const nose = new THREE.Mesh(
            createNoseGeometry(noseLength, size.y * 0.45, 0.05),
            createMaterial(palette.body, palette.bodyMetal, palette.bodyRough)
        );
        nose.position.z = size.z / 2;
        nose.rotation.x = -Math.PI / 2; // поворачиваем вперёд (ось Z)
        group.add(nose);
        
        // === 2. КОРПУС (основной блок) ===
        const body = new THREE.Mesh(
            new THREE.BoxGeometry(size.x, size.y, size.z),
            createMaterial(palette.body, palette.bodyMetal, palette.bodyRough)
        );
        group.add(body);
        
        // === 3. РАМА (тёмная окантовка спереди) ===
        const frameThickness = 0.08;
        const frame = new THREE.Mesh(
            new THREE.BoxGeometry(size.x * 0.85, size.y * 0.7, frameThickness),
            createMaterial(palette.frame, 0.8, 0.3)
        );
        frame.position.z = size.z / 2 - frameThickness / 2;
        group.add(frame);
        
        // === 4. СТЕКЛО (блистер сверху) ===
        const glass = new THREE.Mesh(
            createCanopyGeometry(size.x * 0.7, size.y * 0.5, size.z * 0.7),
            createMaterial(palette.glass, palette.glassMetal, palette.glassRough, 0.6)
        );
        glass.position.set(0, size.y * 0.3, size.z * 0.15);
        group.add(glass);
        
        // === 5. АКЦЕНТНЫЕ ПОЛОСЫ ===
        const stripeL = new THREE.Mesh(
            new THREE.BoxGeometry(0.06, size.y * 0.6, size.z * 0.9),
            createMaterial(palette.accent, 0.3, 0.4)
        );
        stripeL.position.set(-size.x / 2 + 0.05, 0, 0);
        group.add(stripeL);
        
        const stripeR = stripeL.clone();
        stripeR.position.x = size.x / 2 - 0.05;
        group.add(stripeR);
        
        return group;
    }
    
    /**
     * Двигатель = корпус + сопло + кольцо
     */
    static createEngine(size) {
        const palette = PALETTES.engine;
        const group = new THREE.Group();
        
        // === 1. КОРПУС ===
        const body = new THREE.Mesh(
            new THREE.CylinderGeometry(size.x / 2, size.x / 2, size.y * 0.7, 16),
            createMaterial(palette.body, palette.bodyMetal, palette.bodyRough)
        );
        body.position.y = size.y * 0.15;
        group.add(body);
        
        // === 2. СОПЛО ===
        const nozzle = new THREE.Mesh(
            createNozzleGeometry(size.x * 0.35, size.x * 0.55, size.y * 0.4),
            createMaterial(palette.nozzle, palette.nozzleMetal, palette.nozzleRough)
        );
        nozzle.position.y = -size.y * 0.3;
        group.add(nozzle);
        
        // === 3. ДЕКОРАТИВНОЕ КОЛЬЦО ===
        const ring = new THREE.Mesh(
            createRingGeometry(size.x * 0.45, size.x * 0.55),
            createMaterial(palette.accent, 0.6, 0.3)
        );
        ring.position.y = -size.y * 0.1;
        group.add(ring);
        
        return group;
    }
    
    /**
     * Крыло = плоский клин + законцовка
     */
    static createWing(size) {
        const palette = PALETTES.wing;
        const group = new THREE.Group();
        
        // Клин
        const hw = size.x / 2, hh = size.y / 2, hd = size.z / 2;
        const verts = new Float32Array([
            -hw*0.15, -hh,  hd,  hw*0.15, -hh,  hd,  0, hh, hd,
            -hw,      -hh, -hd,  hw,      -hh, -hd,  0, hh*0.8, -hd
        ]);
        const idx = [0,2,1, 3,4,5, 0,3,5,0,5,2, 1,2,5,1,5,4, 0,1,4,0,4,3];
        const geo = new THREE.BufferGeometry();
        geo.setAttribute('position', new THREE.BufferAttribute(verts, 3));
        geo.setIndex(idx);
        geo.computeVertexNormals();
        
        const wingBody = new THREE.Mesh(geo, createMaterial(palette.body, palette.bodyMetal, palette.bodyRough));
        group.add(wingBody);
        
        // Законцовка
        const tip = new THREE.Mesh(
            new THREE.BoxGeometry(0.15, size.y * 1.5, 0.3),
            createMaterial(palette.tip, 0.5, 0.4)
        );
        tip.position.set(size.x / 2 - 0.1, 0, -size.z / 4);
        group.add(tip);
        
        const tip2 = tip.clone();
        tip2.position.x = -size.x / 2 + 0.1;
        group.add(tip2);
        
        return group;
    }
    
    /**
     * Оружие = корпус + ствол
     */
    static createWeapon(size) {
        const palette = PALETTES.weapon;
        const group = new THREE.Group();
        
        // Корпус
        const body = new THREE.Mesh(
            new THREE.BoxGeometry(size.x, size.y, size.z * 0.6),
            createMaterial(palette.body, palette.bodyMetal, palette.bodyRough)
        );
        body.position.z = -size.z * 0.2;
        group.add(body);
        
        // Ствол
        const barrel = new THREE.Mesh(
            new THREE.CylinderGeometry(size.x * 0.3, size.x * 0.35, size.z * 0.6, 8),
            createMaterial(palette.barrel, 0.9, 0.2)
        );
        barrel.rotation.x = Math.PI / 2;
        barrel.position.z = size.z * 0.35;
        group.add(barrel);
        
        // Свечение на конце ствола
        const glow = new THREE.Mesh(
            new THREE.SphereGeometry(size.x * 0.2, 8, 8),
            createMaterial(palette.glow, 0.1, 0.1, 0.8)
        );
        glow.position.z = size.z * 0.65;
        group.add(glow);
        
        return group;
    }
    
    /**
     * Грузовой отсек = контейнер + крепления
     */
    static createCargo(size) {
        const palette = PALETTES.cargo;
        const group = new THREE.Group();
        
        // Основной контейнер
        const body = new THREE.Mesh(
            new THREE.BoxGeometry(size.x * 0.9, size.y, size.z * 0.9),
            createMaterial(palette.body, palette.bodyMetal, palette.bodyRough)
        );
        group.add(body);
        
        // Рёбра жёсткости
        for (let z = -1; z <= 1; z += 2) {
            const rib = new THREE.Mesh(
                new THREE.BoxGeometry(size.x * 0.95, size.y * 1.05, 0.06),
                createMaterial(palette.frame, 0.7, 0.3)
            );
            rib.position.z = z * size.z * 0.4;
            group.add(rib);
        }
        
        return group;
    }
    
    /**
     * Топливный бак = сфера + полосы
     */
    static createFuel(size) {
        const palette = PALETTES.fuel;
        const group = new THREE.Group();
        
        // Сфера
        const body = new THREE.Mesh(
            new THREE.SphereGeometry(size.x / 2, 16, 16),
            createMaterial(palette.body, palette.bodyMetal, palette.bodyRough)
        );
        group.add(body);
        
        // Полосы
        for (let i = 0; i < 3; i++) {
            const angle = (i / 3) * Math.PI * 2;
            const stripe = new THREE.Mesh(
                new THREE.BoxGeometry(0.06, size.y * 1.1, size.z * 0.7),
                createMaterial(palette.stripe, 0.5, 0.4)
            );
            stripe.rotation.y = angle;
            group.add(stripe);
        }
        
        return group;
    }
    
    /**
     * Главный метод — создаёт визуал для любой детали
     */
    static createVisual(part) {
        switch (part.category) {
            case 'cabin':  return VisualFactory.createCabin(part.size);
            case 'engine': return VisualFactory.createEngine(part.size);
            case 'wing':   return VisualFactory.createWing(part.size);
            case 'weapon': return VisualFactory.createWeapon(part.size);
            case 'cargo':  return VisualFactory.createCargo(part.size);
            case 'fuel':   return VisualFactory.createFuel(part.size);
            default:
                // Запасной вариант — простой куб
                return new THREE.Mesh(
                    new THREE.BoxGeometry(part.size.x, part.size.y, part.size.z),
                    new THREE.MeshStandardMaterial({ color: 0x888888 })
                );
        }
    }
}