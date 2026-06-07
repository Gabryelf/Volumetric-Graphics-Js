import { io } from 'socket.io-client';

export class NetworkManager {
    constructor(scene, modelLoader) {
        this.socket = null;
        this.scene = scene;
        this.modelLoader = modelLoader;
        this.playerId = null;
        this.onInit = null;
        this.onPlayerJoin = null;
        this.onPlayerMove = null;
        this.onPlayerLeave = null;
        this.position = null;
        this.rotation = null;
    }

    connect(sessionId, playerName, modelIndex) {
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
            if (this.position && this.socket?.connected) {
                this.socket.emit('move', this.position, this.rotation);
            }
        }, 50);
    }
    
    sendPosition(position, rotation) {
        this.position = { x: position.x, y: position.y, z: position.z };
        this.rotation = { x: rotation.x, y: rotation.y, z: rotation.z };
    }
}