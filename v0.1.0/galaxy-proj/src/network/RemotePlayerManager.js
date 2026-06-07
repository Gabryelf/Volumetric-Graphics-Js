import * as THREE from 'three';

export class RemotePlayerManager{
    constructor(scene){
        this.scene = scene;
        this.players = new Map();
    }

    createPlayer(playerId, position, rotation){
        console.log(`🟠 СОЗДАНИЕ ИГРОКА ${playerId}`, position);
        
        if (!position || !rotation) {
            console.error('❌ Нет данных для создания игрока');
            return null;
        }
        
        // Проверяем, не существует ли уже такой игрок
        if (this.players.has(playerId)) {
            console.warn(`⚠️ Игрок ${playerId} уже существует`);
            return this.players.get(playerId).mesh;
        }
        
        const geometry = new THREE.SphereGeometry(0.5, 16, 16);
        const material = new THREE.MeshStandardMaterial({ color: 0xff6600 });
        const mesh = new THREE.Mesh(geometry, material);

        mesh.position.set(position.x, position.y, position.z);
        mesh.rotation.set(rotation.x, rotation.y, rotation.z);
        
        this.scene.add(mesh);
        
        console.log(`✅ Игрок ${playerId} создан и добавлен на сцену`);

        this.players.set(playerId, {
            mesh: mesh,
            targetPosition: new THREE.Vector3(position.x, position.y, position.z),
            targetRotation: new THREE.Euler(rotation.x, rotation.y, rotation.z)
        });

        return mesh;
    }

    updatePlayer(playerId, position, rotation){
        const player = this.players.get(playerId);
        if (player) {
            player.targetPosition.set(position.x, position.y, position.z);
            player.targetRotation.set(rotation.x, rotation.y, rotation.z);
        } else {
            console.warn(`⚠️ Попытка обновить несуществующего игрока ${playerId}`);
        }
    }

    updateAnimate(delta){
        const lerpSpeed = 5;
        const safeDelta = Math.min(delta, 0.033);

        this.players.forEach((player, id) => {
            if (player && player.mesh && player.targetPosition) {
                player.mesh.position.lerp(player.targetPosition, lerpSpeed * safeDelta);
                player.mesh.rotation.x += (player.targetRotation.x - player.mesh.rotation.x) * lerpSpeed * safeDelta;
                player.mesh.rotation.y += (player.targetRotation.y - player.mesh.rotation.y) * lerpSpeed * safeDelta;
                player.mesh.rotation.z += (player.targetRotation.z - player.mesh.rotation.z) * lerpSpeed * safeDelta;
            }
        });
    }

    removePlayer(playerId){
        const player = this.players.get(playerId);
        if (player) {
            console.log(`🗑️ Удаляем игрока ${playerId}`);
            if (player.mesh) {
                this.scene.remove(player.mesh);
                if (player.mesh.geometry) player.mesh.geometry.dispose();
                if (player.mesh.material) player.mesh.material.dispose();
            }
            this.players.delete(playerId);
        }
    }
}