// ============================================
// КОНФИГ ДЕТАЛЕЙ — все детали игры
// Меняй форму, цвет, размер, статы здесь
// ============================================

export const PARTS = {
    
    // ========================
    // КАБИНЫ
    // ========================
    cabin_standard: {
        name: 'Стандартная кабина',
        category: 'cabin',
        shape: 'box',
        color: 0x5599dd,
        size: { x: 2.0, y: 1.2, z: 2.0 },
        stats: { armor: 10, cargo: 2, speed: -1 }
    },
    cabin_assault: {
        name: 'Штурмовая кабина',
        category: 'cabin',
        shape: 'box',
        color: 0x445577,
        size: { x: 2.2, y: 1.4, z: 2.0 },
        stats: { armor: 25, cargo: 1, speed: -3 }
    },
    cabin_scout: {
        name: 'Разведывательная кабина',
        category: 'cabin',
        shape: 'box',
        color: 0x44aacc,
        size: { x: 1.8, y: 1.0, z: 2.2 },
        stats: { armor: 5, cargo: 1, speed: 5 }
    },
    
    // ========================
    // ДВИГАТЕЛИ
    // ========================
    engine_basic: {
        name: 'Маршевый двигатель',
        category: 'engine',
        shape: 'cylinder',
        color: 0xff6633,
        size: { x: 1.2, y: 2.5, z: 1.2 },
        stats: { speed: 15, fuel: -5 }
    },
    engine_twin: {
        name: 'Сдвоенный двигатель',
        category: 'engine',
        shape: 'cylinder',
        color: 0xff4422,
        size: { x: 1.6, y: 2.0, z: 1.6 },
        stats: { speed: 25, fuel: -10, armor: -2 }
    },
    engine_ion: {
        name: 'Ионный двигатель',
        category: 'engine',
        shape: 'cylinder',
        color: 0x4488ff,
        size: { x: 1.0, y: 3.0, z: 1.0 },
        stats: { speed: 20, fuel: -3, armor: -5 }
    },
    
    // ========================
    // КРЫЛЬЯ / СТАБИЛИЗАТОРЫ
    // ========================
    wing_light: {
        name: 'Лёгкое крыло',
        category: 'wing',
        shape: 'wedge',
        color: 0x8899aa,
        size: { x: 3.0, y: 0.3, z: 1.2 },
        stats: { speed: 5, armor: 2 }
    },
    wing_heavy: {
        name: 'Усиленное крыло',
        category: 'wing',
        shape: 'wedge',
        color: 0x556677,
        size: { x: 3.5, y: 0.4, z: 1.5 },
        stats: { speed: 3, armor: 6 }
    },
    
    // ========================
    // ОРУЖИЕ
    // ========================
    weapon_laser: {
        name: 'Лазерная турель',
        category: 'weapon',
        shape: 'cylinder',
        color: 0xff2222,
        size: { x: 0.4, y: 1.2, z: 0.4 },
        stats: { damage: 20, speed: -2 }
    },
    weapon_plasma: {
        name: 'Плазменная пушка',
        category: 'weapon',
        shape: 'box',
        color: 0x44ff44,
        size: { x: 0.8, y: 0.6, z: 1.4 },
        stats: { damage: 35, speed: -5, cargo: -2 }
    },
    weapon_missile: {
        name: 'Ракетная установка',
        category: 'weapon',
        shape: 'box',
        color: 0x666666,
        size: { x: 1.0, y: 0.7, z: 1.6 },
        stats: { damage: 50, speed: -8, cargo: -4 }
    },
    
    // ========================
    // ГРУЗОВЫЕ ОТСЕКИ
    // ========================
    cargo_small: {
        name: 'Малый грузовой отсек',
        category: 'cargo',
        shape: 'box',
        color: 0xbbaa44,
        size: { x: 1.8, y: 1.2, z: 2.0 },
        stats: { cargo: 8, speed: -2, armor: 1 }
    },
    cargo_large: {
        name: 'Большой грузовой отсек',
        category: 'cargo',
        shape: 'box',
        color: 0x998833,
        size: { x: 2.0, y: 1.4, z: 3.0 },
        stats: { cargo: 18, speed: -5, armor: -2 }
    },
    
    // ========================
    // ТОПЛИВНЫЕ БАКИ
    // ========================
    fuel_small: {
        name: 'Малый топливный бак',
        category: 'fuel',
        shape: 'sphere',
        color: 0xffaa22,
        size: { x: 1.2, y: 1.2, z: 1.2 },
        stats: { fuel: 15, armor: -2 }
    },
    fuel_large: {
        name: 'Большой топливный бак',
        category: 'fuel',
        shape: 'sphere',
        color: 0xff8811,
        size: { x: 1.8, y: 1.8, z: 1.8 },
        stats: { fuel: 30, armor: -5, speed: -3 }
    }
};

// Категории для UI
export const CATEGORIES = [
    { id: 'cabin',  label: '🏠 Кабины',   icon: '🏠' },
    { id: 'engine', label: '🚀 Двигатели', icon: '🚀' },
    { id: 'wing',   label: '🪽 Крылья',    icon: '🪽' },
    { id: 'weapon', label: '🔫 Оружие',    icon: '🔫' },
    { id: 'cargo',  label: '📦 Груз',      icon: '📦' },
    { id: 'fuel',   label: '⛽ Топливо',   icon: '⛽' }
];