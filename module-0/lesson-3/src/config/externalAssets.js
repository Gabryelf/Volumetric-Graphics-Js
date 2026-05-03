// ============================================
// ВНЕШНИЕ АССЕТЫ С GITHUB
// ============================================

// Базовый URL вашего GitHub репозитория (RAW - для прямого доступа)
// ЗАМЕНИТЕ НА ВАШУ ССЫЛКУ ПОСЛЕ ЗАГРУЗКИ МОДЕЛЕЙ НА GITHUB
export const EXTERNAL_ASSETS = {
    // URL к папке с моделями (raw.githubusercontent.com)
    // Пример: https://raw.githubusercontent.com/ВАШ_ЛОГИН/НАЗВАНИЕ_РЕПО/main/assets/models/
    baseUrl: 'https://raw.githubusercontent.com/Gabryelf/Atlas-Assets/main/docs/models/',
    
    // Кастомные модели для деталей (ключ = id детали из PARTS)
    customModels: {
        // Кабины
        'cabin_scout': 'cabin_scout.glb',
        'cabin_assault': 'cabin_scout.glb',
        'cabin_standard': 'cabin_scout.glb',
        
        // Двигатели
        'engine_ion': 'cabin_scout.glb',
        'engine_twin': 'cabin_scout.glb',
        'engine_basic': 'cabin_scout.glb',
        
        // Оружие
        'weapon_plasma': 'cabin_scout.glb',
        'weapon_laser': 'cabin_scout.glb',
        'weapon_missile': 'cabin_scout.glb',
        
        // Крылья
        'wing_light': 'cabin_scout.glb',
        'wing_heavy': 'cabin_scout.glb',
        
        // Грузовые отсеки
        'cargo_small': 'cabin_scout.glb',
        'cargo_large': 'cabin_scout.glb',
        
        // Топливные баки
        'fuel_small': 'cabin_scout.glb',
        'fuel_large': 'cabin_scout.glb'
    },
    
    // Модели целых кораблей (для быстрой замены)
    shipModels: {
        'scout': 'ships/scout.glb',
        'assault': 'ships/assault.glb',
        'freighter': 'ships/freighter.glb'
    }
};