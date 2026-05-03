import { CATEGORIES } from '../config/parts.js';
import { SHIP_BLUEPRINTS } from '../config/ships.js';
import { UI } from '../config/ui.js';

/**
 * UIManager — всё что касается кнопок и отображения статов.
 * Отдельно от Game, чтобы не раздувать основной класс.
 */
export class UIManager {
    constructor(game) {
        this.game = game;
    }
    
    /** Настроить все обработчики */
    setup() {
        this._setupCategories();
        this._setupActions();
        this._setupShipSelector();
        this.updateStats();
    }
    
    /** Кнопки категорий */
    _setupCategories() {
        const container = document.getElementById('categories');
        if (!container) return;
        
        container.innerHTML = '';
        
        CATEGORIES.forEach((cat, index) => {
            const btn = document.createElement('button');
            btn.className = 'cat-btn' + (index === 0 ? ' active' : '');
            btn.textContent = cat.label;
            btn.addEventListener('click', () => {
                container.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                this._renderParts(cat.id);
            });
            container.appendChild(btn);
        });
        
        // Показать первую категорию
        if (CATEGORIES.length > 0) {
            this._renderParts(CATEGORIES[0].id);
        }
    }
    
    /** Карточки деталей категории */
    _renderParts(category) {
        const container = document.getElementById('parts-list');
        if (!container) return;
        
        container.innerHTML = '';
        const items = this.game.catalog.getByCategory(category);
        
        if (items.length === 0) {
            container.innerHTML = '<div style="color:#666;padding:20px;">Нет деталей</div>';
            return;
        }
        
        items.forEach(item => {
            const card = document.createElement('div');
            card.className = 'part-card';
            
            const name = document.createElement('div');
            name.className = 'part-name';
            name.textContent = item.name;
            card.appendChild(name);
            
            if (item.stats) {
                const statsDiv = document.createElement('div');
                statsDiv.className = 'part-stats';
                const parts = [];
                for (const [key, value] of Object.entries(item.stats)) {
                    const icon = UI.statIcons[key] || '';
                    const sign = value > 0 ? '+' : '';
                    parts.push(`${icon}${sign}${value}`);
                }
                statsDiv.innerHTML = parts.join(' ');
                card.appendChild(statsDiv);
            }
            
            card.addEventListener('click', () => {
                this.game.onPartClick(item.id);
            });
            
            container.appendChild(card);
        });
    }
    
    /** Кнопки действий и выбор корабля */
    _setupActions() {
        document.getElementById('btn-clear')?.addEventListener('click', () => {
            this.game.clearShip();
        });
        
        document.getElementById('btn-random')?.addEventListener('click', () => {
            this.game.randomizeShip();
        });
        
        this._setupSlotButtons();
    }
    
    /** Кнопки слотов корабля */
    _setupSlotButtons() {
        const container = document.getElementById('slots-list');
        if (!container) return;
        
        const updateSlots = () => {
            if (!this.game.ship) return;
            
            const filled = this.game.ship.getFilledSlots();
            const empty = this.game.ship.getEmptySlots();
            
            // Обновляем занятые слоты
            filled.forEach(({ id, part }) => {
                const el = document.getElementById(`slot-${id}`);
                if (el) {
                    el.querySelector('.slot-part-name').textContent = part.name;
                    el.className = 'slot-btn filled';
                }
            });
            
            // Обновляем пустые слоты
            empty.forEach(({ id, category }) => {
                const el = document.getElementById(`slot-${id}`);
                if (el) {
                    el.querySelector('.slot-part-name').textContent = 'пусто';
                    el.className = 'slot-btn empty';
                }
            });
        };
        
        // Сохраняем функцию для вызова из Game
        this.game._updateSlotButtons = updateSlots;
    }
    
    /** Выпадающий список чертежей */
    _setupShipSelector() {
        const select = document.getElementById('ship-select');
        if (!select) return;
        
        select.innerHTML = '';
        
        Object.entries(SHIP_BLUEPRINTS).forEach(([id, bp]) => {
            const option = document.createElement('option');
            option.value = id;
            option.textContent = bp.name;
            select.appendChild(option);
        });
        
        select.addEventListener('change', () => {
            this.game.loadShip(select.value);
        });
    }
    
    /** Обновить панель статов */
    updateStats() {
        const stats = this.game.ship ? this.game.ship.getStats() : { speed: 0, armor: 0, damage: 0, cargo: 0, fuel: 0 };
        
        for (const key of ['speed', 'armor', 'damage', 'cargo', 'fuel']) {
            const el = document.getElementById(`stat-${key}`);
            if (el) el.textContent = stats[key];
        }
        
        const countEl = document.getElementById('parts-count');
        if (countEl && this.game.ship) {
            const filled = this.game.ship.getFilledSlots().length;
            const total = Object.keys(this.game.ship.slots).length;
            countEl.textContent = `Деталей: ${filled}/${total}`;
        }
    }
}