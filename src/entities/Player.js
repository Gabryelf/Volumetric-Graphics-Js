
export class Player{
    constructor(socketId, playerName, selectModel, savedFuel){
        this.id = socketId;
        this.name = playerName;
        this.model_ship = selectModel;
        this.position = {x: 0, y: 0, z: 0};
        this.rotation = {x: 0, y: 0, z: 0};

        this.fuel = savedFuel || 100;
    }

  
}