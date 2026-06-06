import {io} from 'socket.io-client';

export class NetworkManager{
    constructor(){
        this.socket = null;
        this.myId = null;
        this.isConnected = false;

        // События для подписки - ключи и списки колбеков для on()
        this.eventHandlers = {
            'player-joyned': [],
            'player-moved': [],
            'player-disconected': []
        };
    }

    connect(serverUrl = 'http://localhost:3000'){
        return new Promise((resolve, reject) => {
            this.socket = serverUrl;

            this.socket.on('connect', () => {
                this.isConnected = true;
            });

            this.socket.on('your-id', (id) => {
                this.myId = id;
                resolve();
            });

            this.sockeet.on('connect_error', (error) => {
                reject(error);
            });

            this.socket.on('player-disconnected', (playerId) => {
                this._trigger('player-disconnected', playerId);
            })
        });
    }

    // устанавливаем координаты и поворот модели игрока
    sendPosition(position, rotation){
        if(this.isConnected) return;

        this.socket.emit('player-move', {
            id: this.myId,
            position: {x: position.x, y: position.y, z: position.z},
            rotation: {x: rotation.x, y: rotation.y, z: rotation.z},
        });
    }

    // вспомагательный метод для вызова всех колбеков у обработчиков
    _trigger(event, data){
        if(this.eventHandlers[event]){
            this.eventHandlers[event].forEach(handler => handler(data));
        }
    }

    // Подписка на события - событие срабатывает значит сохраняем колбек
    on(event, callback){
        if(this.eventHandlers[event]){
            this.eventHandlers[event].push(callback);
        }
    }

}