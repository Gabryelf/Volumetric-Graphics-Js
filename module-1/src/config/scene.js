/**
 * КОНФИГ СЦЕНЫ
 * Все настройки сцены в одном месте
 */

 export const SCENE_CONFIG = {
    // Цвет фона (космос)
    background: 0x050518,
    
    // Настройки тумана
    fog: {
        enabled: true,
        color: 0x050518,
        density: 0.003    // плотность тумана
    },
    
    // Настройки звёздного поля
    stars: {
        count: 2000,
        size: 0.15,
        color: 0xffffff,
        range: 400  // разброс звёзд
    }
};