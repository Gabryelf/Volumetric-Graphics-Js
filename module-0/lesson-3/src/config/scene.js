// ============================================
// КОНФИГ СЦЕНЫ — меняй здесь фон, туман, свет
// ============================================

export const SCENE = {
    background: 0x050518,     // цвет фона (тёмный космос)
    fog: {
        color: 0x050518,
        near: 30,
        far: 80
    },
    grid: {
        size: 24,
        divisions: 24,
        colorCenter: 0x334466,
        colorGrid: 0x1a1a33
    },
    floor: {
        color: 0x111122,
        roughness: 0.9,
        metalness: 0.2,
        size: 24
    }
};

export const CAMERA = {
    fov: 55,
    near: 0.1,
    far: 200,
    start: [10, 6, 12],   // [x, y, z]
    lookAt: [0, 0.5, 0]
};

export const LIGHTS = {
    ambient: { color: 0x303050, intensity: 0.6 },
    key: { color: 0xffffff, intensity: 2.5, position: [15, 20, 10] },
    rim: { color: 0x4466aa, intensity: 0.8, position: [-10, 5, -5] }
};