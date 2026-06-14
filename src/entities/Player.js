
export class Player{
    constructor(socketId, playerName, selectModel){
        this.id = socketId;
        this.name = playerName;
        this.model_ship = selectModel;
        this.position = {x: 0, y: 0, z: 0};
        this.rotation = {x: 0, y: 0, z: 0};
    }

  
}