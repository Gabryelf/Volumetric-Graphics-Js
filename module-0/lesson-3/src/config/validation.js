// ============================================
// ПРАВИЛА ВАЛИДАЦИИ КОРАБЛЕЙ
// ============================================

/**
 * Правила для каждого чертежа.
 * requiredSlots — слоты которые обязательно должны быть заполнены.
 * minParts — минимальное количество деталей любой категории.
 */
 export const VALIDATION_RULES = {
    scout: {
        requiredSlots: ['cabin', 'engine_l', 'engine_r'],
        minParts: 3
    },
    assault: {
        requiredSlots: ['cabin', 'engine_l', 'engine_r', 'weapon_l', 'weapon_r'],
        minParts: 5
    },
    freighter: {
        requiredSlots: ['cabin', 'engine_l', 'engine_r', 'cargo_center'],
        minParts: 4
    }
};