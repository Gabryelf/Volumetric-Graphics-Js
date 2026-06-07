import { io } from 'socket.io-client';

export class NetworkManager{
    constructor(){
        this.socket = null;
        this.myId = null;
        this.isConnected = false;

        this.eventHandlers = {
            'player-joined': [],
            'player-moved': [],
            'player-disconnected': [],
            'current-players': [],
            'your-id': []
        };
    }

    connect(serverUrl = 'http://localhost:3000'){
        return new Promise((resolve, reject) => {
            console.log('🔌 Подключение к серверу...');
            
            this.socket = io(serverUrl, {
                reconnection: true,
                reconnectionAttempts: 5,
                reconnectionDelay: 1000
            });

            this.socket.on('connect', () => {
                console.log('✅ Socket соединён, ID:', this.socket.id);
                this.isConnected = true;
            });

            // ВАЖНО: сначала регистрируем все обработчики
            this.socket.on('your-id', (id) => {
                console.log('🆔 Получен ID от сервера:', id);
                this.myId = id;
                this._trigger('your-id', id);
                resolve();
            });

            this.socket.on('connect_error', (error) => {
                console.error('❌ Ошибка подключения:', error);
                reject(error);
            });

            this.socket.on('disconnect', (reason) => {
                console.log(`🔌 Отключён от сервера. Причина: ${reason}`);
                this.isConnected = false;
            });

            // КРИТИЧЕСКИ ВАЖНО: эти обработчики должны быть здесь!
            this.socket.on('current-players', (players) => {
                console.log('📋 Получен список current-players:', players);
                this._trigger('current-players', players);
            });

            this.socket.on('player-joined', (player) => {
                console.log('👋 Получен player-joined:', player);
                this._trigger('player-joined', player);
            });

            this.socket.on('player-moved', (data) => {
                console.log('🎯 Получен player-moved:', data);
                this._trigger('player-moved', data);
            });

            this.socket.on('player-disconnected', (playerId) => {
                console.log('👋 Получен player-disconnected:', playerId);
                this._trigger('player-disconnected', playerId);
            });
        });
    }

    sendPosition(position, rotation){
        if (!this.isConnected || !this.socket) {
            console.warn('⚠️ Не могу отправить позицию - не подключен');
            return;
        }

        this.socket.emit('player-move', {
            id: this.myId,
            position: {x: position.x, y: position.y, z: position.z},
            rotation: {x: rotation.x, y: rotation.y, z: rotation.z},
        });
    }

    _trigger(event, data){
        if(this.eventHandlers[event]){
            this.eventHandlers[event].forEach(handler => {
                try {
                    handler(data);
                } catch (error) {
                    console.error(`Ошибка в обработчике ${event}:`, error);
                }
            });
        } else {
            console.warn(`Нет обработчиков для события ${event}`);
        }
    }

    on(event, callback){
        if(!this.eventHandlers[event]){
            this.eventHandlers[event] = [];
        }
        this.eventHandlers[event].push(callback);
        console.log(`📝 Зарегистрирован обработчик для ${event}`);
    }
}