import { MongoClient } from 'mongodb';

class DatabaseManager {
    constructor() {
        this.client = null;
        this.collection = null;
    }

    async connect() {
        try {
            this.client = new MongoClient('mongodb://localhost:27017');
            await this.client.connect();
            const db = this.client.db('space_game');
            this.collection = db.collection('players');
            return true;
        } catch (error) {
            return false;
        }
    }

    async saveFuel(playerId, fuel) {
        if (!this.collection) return;
        
        await this.collection.updateOne(
            { id: playerId },
            { 
                $set: { 
                    fuel: fuel,
                    updatedAt: new Date()
                }
            },
            { upsert: true }
        );
    }

    async loadFuel(playerId) {
        if (!this.collection) return null;
        
        const data = await this.collection.findOne({ id: playerId });
        if (data) {
            return data.fuel;
        }
        return null;
    }
}

export const dbManager = new DatabaseManager();