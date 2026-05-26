
### Реализация системы следования

---

## **Описание:**

Была реализована система следования корабля за камерой.

---

## **Изменения в коде:**

```javascript
        if (this.ship && this.cameraManager.getCamera()) {
            // Корабль следует за камерой (позиция камеры - отступ)
            const camera = this.cameraManager.getCamera();
            this.ship.position.copy(camera.position);
            this.ship.position.y -= 3;  
            this.ship.position.x -= 0;
            this.ship.position.z -= 0;

            this.ship.rotation.x = camera.rotation.x;
            this.ship.rotation.x = -camera.rotation.z;
            this.ship.rotation.y = camera.rotation.y + 45;
        }
```

