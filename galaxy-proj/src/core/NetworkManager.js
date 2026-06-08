import { io } from 'socket.io-client';

/**
 * NetworkManager - управляет всем сетевым взаимодействием
 * 
 * Отвечает за:
 * - Подключение к серверу
 * - Отправку/прием событий
 * - Синхронизацию позиций
 */

export class NetworkManager {
    constructor() {
        this.socket = null;
        this.sessionId = null;
        this.playerName = null;
        this.modelIndex = null;
        // Callbacks для уведомления игры
        this.onInit = null;           // (players) => {}
        this.onPlayerJoined = null;   // (player) => {}
        this.onPlayerMoved = null;    // (data) => {}
        this.onPlayerLeft = null;     // (playerId) => {}

        this.position = null;
        this.rotation = null;
    }

    /**
     * Подключение к игровой сессии
     * @param {string} sessionId - ID сессии (общий для всех игроков)
     * @param {string} playerName - Имя игрока
     * @param {number} modelIndex - Индекс модели корабля
     */
    connect(sessionId, playerName, modelIndex = 0) {
        this.sessionId = sessionId;
        this.playerName = playerName;
        this.modelIndex = modelIndex;
        this.socket = io();
        
        this.socket.on('connect', () => {
            this.socket.emit('join', sessionId, playerName, modelIndex);
        });
        
        this.socket.on('init', (players) => {
            if (this.onInit) this.onInit(players);
        });
        
        this.socket.on('playerJoined', (player) => {
            if (this.onPlayerJoin) this.onPlayerJoin(player);
        });
        
        this.socket.on('playerMoved', (data) => {
            if (this.onPlayerMove) this.onPlayerMove(data);
        });
        
        this.socket.on('playerLeft', (id) => {
            if (this.onPlayerLeave) this.onPlayerLeave(id);
        });
        
        // Отправляем позицию каждые 50мс
        setInterval(() => {
            if (this.position && this.socket.connected) {
                this.socket.emit('move', this.position, this.rotation);
            }
        }, 50);
    }
    
    sendPosition(position, rotation) {
        this.position = { x: position.x, y: position.y, z: position.z };
        this.rotation = { x: rotation.x, y: rotation.y, z: rotation.z };
    }
}