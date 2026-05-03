/**
 * КОНФИГ КАМЕРЫ
 * Все параметры камеры и управления
 */

 export const CAMERA_CONFIG = {
    // Параметры камеры
    fov: 45,                    // угол обзора
    near: 0.1,                  // ближняя плоскость
    far: 1000,                  // дальняя плоскость
    
    // Начальная позиция
    position: {
        x: 5,
        y: 4,
        z: 8
    },
    
    // Точка наблюдения
    target: {
        x: 0,
        y: 0,
        z: 0
    },
    
    // Настройки OrbitControls
    controls: {
        enableDamping: true,    // плавность
        dampingFactor: 0.05,
        autoRotate: false,
        enableZoom: true,
        enablePan: true,
        zoomSpeed: 1.2,
        rotateSpeed: 1.0
    }
};