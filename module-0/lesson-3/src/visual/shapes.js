import * as THREE from 'three';

// ============================================
// КАСТОМНЫЕ ГЕОМЕТРИИ
// ============================================

/**
 * Нос кабины — вытянутый закруглённый конус.
 * Создаётся через LatheGeometry (вращение профиля вокруг оси).
 * 
 * Профиль — набор точек, которые вращаются вокруг Y:
 * 
 *   Y ↑
 *     |    • (0.0, h)   — кончик носа
 *     |   /
 *     |  •  (r1, y1)   — изгиб
 *     | /
 *     |•    (r2, 0)    — основание
 *     +----------→ X (радиус)
 */
export function createNoseGeometry(length = 2.0, baseRadius = 0.9, tipRadius = 0.05, segments = 16) {
    // Профиль: массив точек [x, y] — x=радиус, y=высота
    const points = [];
    const steps = 12;
    
    for (let i = 0; i <= steps; i++) {
        const t = i / steps; // от 0 (основание) до 1 (кончик)
        
        // Y: от 0 до length
        const y = t * length;
        
        // Радиус: плавно уменьшается от baseRadius до tipRadius
        // Используем easing для красивого профиля
        const eased = Math.pow(t, 1.5); // выпуклый профиль
        const r = baseRadius + (tipRadius - baseRadius) * eased;
        
        points.push(new THREE.Vector2(r, y));
    }
    
    const geometry = new THREE.LatheGeometry(points, segments);
    return geometry;
}

/**
 * Стекло кабины — обзорный блистер.
 * Полусфера вытянутая вперёд.
 */
export function createCanopyGeometry(width = 1.4, height = 0.8, depth = 1.5, segments = 16) {
    // Начинаем со сферы
    const geometry = new THREE.SphereGeometry(1, segments, segments);
    
    // Сжимаем по осям чтобы получить вытянутый блистер
    const positions = geometry.attributes.position;
    for (let i = 0; i < positions.count; i++) {
        let x = positions.getX(i);
        let y = positions.getY(i);
        let z = positions.getZ(i);
        
        // Берём только верхнюю половину сферы и вытягиваем
        if (y < -0.2) {
            // Отрезаем нижнюю часть
            y = -0.2;
        }
        
        x *= width / 2;
        y = (y + 1) / 2 * height; // нормализуем и масштабируем
        z *= depth / 2;
        
        positions.setXYZ(i, x, y, z);
    }
    
    geometry.computeVertexNormals();
    return geometry;
}

/**
 * Сопло двигателя — усечённый конус с кольцами
 */
export function createNozzleGeometry(topRadius = 0.4, bottomRadius = 0.7, height = 1.0, segments = 16) {
    const geometry = new THREE.CylinderGeometry(topRadius, bottomRadius, height, segments);
    return geometry;
}

/**
 * Кольцо для двигателя (декоративное)
 */
export function createRingGeometry(innerRadius = 0.5, outerRadius = 0.7, segments = 16) {
    const shape = new THREE.Shape();
    shape.absarc(0, 0, outerRadius, 0, Math.PI * 2);
    
    const hole = new THREE.Path();
    hole.absarc(0, 0, innerRadius, 0, Math.PI * 2);
    shape.holes.push(hole);
    
    const geometry = new THREE.ExtrudeGeometry(shape, {
        depth: 0.1,
        bevelEnabled: true,
        bevelThickness: 0.02,
        bevelSize: 0.02,
        bevelSegments: 2
    });
    
    return geometry;
}