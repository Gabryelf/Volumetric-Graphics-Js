/**
 * КОНФИГ ОСВЕЩЕНИЯ
 * Все источники света с параметрами
 */

 export const LIGHTS_CONFIG = {
    // Рассеянный свет (базовый)
    ambient: {
        color: 0x404060,
        intensity: 0.6
    },
    
    // Основной направленный свет (как солнце)
    main: {
        type: 'directional',
        color: 0xffffff,
        intensity: 1.2,
        position: { x: 5, y: 10, z: 7 },
        castShadow: true,
        shadowMapSize: 1024
    },
    
    // Контровой свет (подсветка краёв)
    rim: {
        type: 'directional',
        color: 0x6688aa,
        intensity: 0.8,
        position: { x: -3, y: 2, z: -4 }
    },
    
    // Заполняющий свет снизу
    fill: {
        type: 'point',
        color: 0x4466aa,
        intensity: 0.3,
        position: { x: 0, y: -2, z: 0 }
    },
    
    // Подсветка сзади
    back: {
        type: 'point',
        color: 0xffaa66,
        intensity: 0.4,
        position: { x: 0, y: 1, z: -5 }
    }
};