import * as THREE from 'three';

// ============================================
// ЦВЕТОВЫЕ ПАЛИТРЫ ДЛЯ ДЕТАЛЕЙ
// ============================================

/**
 * Каждая палитра — это объект с именованными цветами.
 * Визуальная фабрика использует их для разных частей детали.
 */
export const PALETTES = {
    // Кабина — серый корпус, тёмная рама, голубые стёкла
    cabin: {
        body:       0x8899aa,  // светло-серый корпус
        frame:      0x445566,  // тёмная рама
        glass:      0x44aacc,  // голубое стекло
        accent:     0xaaccdd,  // светлый акцент
        bodyMetal:   0.5,      // настройки материала для корпуса
        bodyRough:   0.4,
        glassMetal:  0.1,
        glassRough:  0.1
    },
    
    // Двигатель — тёмный корпус, оранжевое сопло
    engine: {
        body:       0x334455,
        nozzle:     0xff6633,
        accent:     0x556677,
        glow:       0xff8844,
        bodyMetal:   0.7,
        bodyRough:   0.3,
        nozzleMetal: 0.1,
        nozzleRough: 0.6
    },
    
    // Крыло — серый металл, красные законцовки
    wing: {
        body:       0x778899,
        tip:        0xcc4444,
        accent:     0x99aabb,
        bodyMetal:   0.6,
        bodyRough:   0.3
    },
    
    // Оружие — тёмное, с красными элементами
    weapon: {
        body:       0x334455,
        barrel:     0x222233,
        glow:       0xff2222,
        accent:     0x554444,
        bodyMetal:   0.8,
        bodyRough:   0.2
    },
    
    // Грузовой — жёлто-коричневый с серыми креплениями
    cargo: {
        body:       0xbbaa44,
        frame:      0x666655,
        accent:     0x998833,
        bodyMetal:   0.3,
        bodyRough:   0.6
    },
    
    // Топливный — оранжевый с тёмными полосами
    fuel: {
        body:       0xff8822,
        stripe:     0x444444,
        accent:     0xffaa44,
        bodyMetal:   0.2,
        bodyRough:   0.5
    }
};

/**
 * Создать материал с нужными параметрами
 */
export function createMaterial(hexColor, metalness = 0.5, roughness = 0.5, opacity = 1) {
    const mat = new THREE.MeshStandardMaterial({
        color: hexColor,
        metalness,
        roughness,
        transparent: opacity < 1,
        opacity
    });
    return mat;
}