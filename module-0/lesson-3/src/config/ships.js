// ============================================
// КОНФИГ ГОТОВЫХ КОРАБЛЕЙ (чертежи)
// Определяет какие слоты есть у корабля и где они находятся
// ============================================

/**
 * Схема слота:
 * {
 *   id: 'уникальный_id',
 *   category: 'категория детали',  // cabin, engine, wing, weapon, cargo, fuel
 *   position: [x, y, z],           // позиция относительно центра корабля
 *   rotation: [rx, ry, rz]         // поворот в радианах (необязательно)
 * }
 */

 export const SHIP_BLUEPRINTS = {
    
    // ========================
    // ЛЁГКИЙ РАЗВЕДЧИК
    // ========================
    scout: {
        name: 'Разведчик «Стрела»',
        description: 'Быстрый, но хрупкий корабль для разведки',
        defaultParts: {
            cabin: 'cabin_scout',
            engine_l: 'engine_ion',
            engine_r: 'engine_ion',
            wing_l: 'wing_light',
            wing_r: 'wing_light'
        },
        slots: [
            { id: 'cabin',    category: 'cabin',  position: [ 0.0,  0.0,  0.0] },
            { id: 'engine_l', category: 'engine', position: [-0.8,  0.0, -2.0] },
            { id: 'engine_r', category: 'engine', position: [ 0.8,  0.0, -2.0] },
            { id: 'wing_l',   category: 'wing',   position: [-2.5,  0.0, -0.5], rotation: [0, 0, 0] },
            { id: 'wing_r',   category: 'wing',   position: [ 2.5,  0.0, -0.5], rotation: [0, 0, 0] }
        ]
    },
    
    // ========================
    // ТЯЖЁЛЫЙ ШТУРМОВИК
    // ========================
    assault: {
        name: 'Штурмовик «Молот»',
        description: 'Мощный корабль для боевых операций',
        defaultParts: {
            cabin: 'cabin_assault',
            engine_l: 'engine_twin',
            engine_r: 'engine_twin',
            wing_l: 'wing_heavy',
            wing_r: 'wing_heavy',
            weapon_l: 'weapon_plasma',
            weapon_r: 'weapon_plasma'
        },
        slots: [
            { id: 'cabin',     category: 'cabin',  position: [ 0.0,  0.0,  0.0] },
            { id: 'engine_l',  category: 'engine', position: [-1.2,  0.0, -2.5] },
            { id: 'engine_r',  category: 'engine', position: [ 1.2,  0.0, -2.5] },
            { id: 'wing_l',    category: 'wing',   position: [-3.0,  0.0, -1.0] },
            { id: 'wing_r',    category: 'wing',   position: [ 3.0,  0.0, -1.0] },
            { id: 'weapon_l',  category: 'weapon', position: [-1.0, -0.4,  1.5] },
            { id: 'weapon_r',  category: 'weapon', position: [ 1.0, -0.4,  1.5] }
        ]
    },
    
    // ========================
    // ГРУЗОВОЙ ТРАНСПОРТ
    // ========================
    freighter: {
        name: 'Транспорт «Тягач»',
        description: 'Вместительный корабль для перевозки грузов',
        defaultParts: {
            cabin: 'cabin_standard',
            engine_l: 'engine_basic',
            engine_r: 'engine_basic',
            cargo_center: 'cargo_large',
            cargo_l: 'cargo_small',
            cargo_r: 'cargo_small',
            fuel_tank: 'fuel_large'
        },
        slots: [
            { id: 'cabin',        category: 'cabin',  position: [ 0.0,  0.3,  1.5] },
            { id: 'engine_l',     category: 'engine', position: [-1.2,  0.0, -3.0] },
            { id: 'engine_r',     category: 'engine', position: [ 1.2,  0.0, -3.0] },
            { id: 'cargo_center', category: 'cargo',  position: [ 0.0,  0.0, -1.0] },
            { id: 'cargo_l',      category: 'cargo',  position: [-2.0,  0.0, -1.0] },
            { id: 'cargo_r',      category: 'cargo',  position: [ 2.0,  0.0, -1.0] },
            { id: 'fuel_tank',    category: 'fuel',   position: [ 0.0, -0.8, -2.0] }
        ]
    }
};