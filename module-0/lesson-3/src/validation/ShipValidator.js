import { VALIDATION_RULES } from '../config/validation.js';

/**
 * ShipValidator — проверяет можно ли кораблю лететь.
 * Не зависит от визуала, чистая логика.
 */
export class ShipValidator {
    /**
     * @param {Ship} ship
     * @returns {{ canFly: boolean, missingSlots: string[], problems: string[] }}
     */
    static validate(ship) {
        const rules = VALIDATION_RULES[ship.blueprintId];
        const problems = [];
        const missingSlots = [];
        
        if (!rules) {
            return { canFly: true, missingSlots: [], problems: [] };
        }
        
        // Проверяем обязательные слоты
        for (const slotId of rules.requiredSlots) {
            const slot = ship.slots[slotId];
            if (!slot || !slot.part) {
                missingSlots.push(slotId);
                problems.push(`Слот "${slotId}" не заполнен`);
            }
        }
        
        // Проверяем минимальное количество любых деталей
        const filledCount = ship.getFilledSlots().length;
        if (filledCount < rules.minParts) {
            problems.push(`Нужно минимум ${rules.minParts} деталей (сейчас ${filledCount})`);
        }
        
        return {
            canFly: problems.length === 0,
            missingSlots,
            problems
        };
    }
}