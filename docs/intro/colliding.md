
### Реализация системы коллизий и удаления астероида при столкновении с кораблём

---

## **Описание:**

Была реализована система обнаружения столкновений между космическим кораблём и астероидом с последующим удалением астероида из сцены.

---

## **Изменения в коде:**

```javascript
checkCollision() {
        if (!this.ship || !this.asteroid) return false;
        
        // Фиксированные радиусы 
        const shipRadius = 5.0;
        const asteroidRadius = 3.2;
        
        const distance = this.ship.position.distanceTo(this.asteroid.position);
        
        return distance < (shipRadius + asteroidRadius);
    }

    handleCollision() {
        if (!this.ship || !this.asteroid) return;
        if (this.isColliding) return;
        this.isColliding = true;
        
        // Просто удаляем астероид при столкновении
        this.sceneManager.getScene().remove(this.asteroid);
        this.asteroid = null;
        
        // Небольшой эффект для корабля
        this.ship.rotation.z += 0.3;
        
        setTimeout(() => {
            this.isColliding = false;
        }, 100);
    }

    checkCollisions() {
        if (this.checkCollision()) {
            this.handleCollision();
        }
        else {
            this.isColliding = false;
        }
    }
```

