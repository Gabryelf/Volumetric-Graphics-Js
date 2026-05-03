import { Part } from '../core/Part.js';
import { PARTS } from '../config/parts.js';

export class PartCatalog {
    constructor() {
        this.items = PARTS;
    }
    
    getByCategory(category) {
        return Object.entries(this.items)
            .filter(([, cfg]) => cfg.category === category)
            .map(([id, cfg]) => ({ id, ...cfg }));
    }
    
    getById(id) {
        const cfg = this.items[id];
        return cfg ? { id, ...cfg } : null;
    }
    
    createPart(id) {
        const cfg = this.items[id];
        if (!cfg) return null;
        // Добавляем id в конфиг перед созданием Part
        return new Part({ id, ...cfg });
    }
}