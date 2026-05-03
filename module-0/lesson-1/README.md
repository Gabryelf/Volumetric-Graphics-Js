
<div align="center">

# 🎮 Three.js 3D Game — Урок 1

### Твой первый шаг в мир 3D-графики на JavaScript

[![Three.js](https://img.shields.io/badge/Three.js-r160-black?logo=three.js&logoColor=white)](https://threejs.org/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow?logo=javascript&logoColor=white)](https://www.javascript.com/)
[![HTML5](https://img.shields.io/badge/HTML5-Canvas-orange?logo=html5&logoColor=white)](https://developer.mozilla.org/ru/docs/Web/HTML)

<img src="https://threejs.org/examples/screenshots/webgl_geometry_cube.jpg" alt="Three.js Cube" width="400"/>

*Вращающийся 3D-куб — твой первый шаг в мир WebGL*

</div>

---

## 🌟 О проекте

Этот проект — твой первый шаг в захватывающий мир создания 3D-игр прямо в браузере. Мы начинаем с самого простого: вращающегося куба. Но не обманывайся его простотой — этот куб содержит в себе все фундаментальные концепции, которые используются в профессиональных 3D-приложениях и играх.

> 💡 **Философия обучения**: Лучше полностью понять простой пример, чем поверхностно изучить сложный.

---

## 🛠 Технологии

<div align="center">

| Технология | Назначение | Версия |
|------------|------------|--------|
| **Three.js** | Библиотека для работы с WebGL | r160 |
| **WebGL** | Низкоуровневый API для 3D-графики | 2.0 |
| **JavaScript ES6+** | Язык программирования | ECMAScript 2022 |
| **HTML5 Canvas** | Контейнер для отрисовки | HTML5 |

</div>

### Почему Three.js?

<details>
<summary><b>Развернуть сравнение с другими подходами</b></summary>

| Критерий | Чистый WebGL | Three.js | Babylon.js |
|----------|-------------|----------|------------|
| **Сложность** | Очень высокая | Низкая | Средняя |
| **Производительность** | Максимальная | Отличная | Отличная |
| **Размер сообщества** | Маленькое | Огромное | Большое |
| **Количество примеров** | Мало | Много | Средне |
| **Порог входа** | Месяцы | Часы | Дни |

**Вывод**: Three.js — идеальный баланс простоты и возможностей для начинающих.

</details>

---

## 🎯 Что ты узнаешь

После завершения этого урока ты будешь понимать:

- ✅ Базовую структуру Three.js приложения
- ✅ Как создать 3D-объект и отобразить его в браузере
- ✅ Принципы работы системы координат в 3D
- ✅ Как работают материалы, освещение и камеры
- ✅ Основы анимационного цикла
- ✅ Как Three.js взаимодействует с WebGL

---

# 🚀 УРОК 1: Модульная сцена - Пошаговая сборка с нуля

## Начало: создаём папку проекта

Открываем эту папку в VS Code.

---

## ШАГ 1: Создаём index.html (скелет страницы)

**Файл:** `index.html`

```html
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Урок 1: Модульная сцена</title>
</head>
<body>
    <div id="info">
        <h1>🚀 УРОК 1: Модульная сцена</h1>
        <p>Сцена | Камера | Звёзды</p>
    </div>
    <div class="status">
        ✅ Сцена загружается...
    </div>

    <script type="importmap">
        {
            "imports": {
                "three": "https://unpkg.com/three@0.160.0/build/three.module.js",
                "three/addons/": "https://unpkg.com/three@0.160.0/examples/jsm/"
            }
        }
    </script>
    
    <script type="module" src="./src/main.js"></script>
</body>
</html>
```

**Что мы сделали:**
- Создали HTML структуру
- Добавили importmap (чтобы можно было писать `import * as THREE from 'three'`)
- Подключили главный JS файл

**Проверка:** Откройте index.html в браузере → пустая белая страница (пока нет ошибок 404 на main.js)

---

## ШАГ 2: Создаём папки и пустые файлы

Создайте такую структуру:

```
src/
├── main.js
├── config/
│   ├── scene.js
│   └── camera.js
└── core/
    ├── SceneManager.js
    └── CameraManager.js
```

**Сейчас у всех файлов пустое содержимое.**

---

## ШАГ 3: Создаём конфиг сцены

**Файл:** `src/config/scene.js`

```javascript
export const SCENE_CONFIG = {
    background: 0x050518,
    fog: {
        enabled: true,
        color: 0x050518,
        density: 0.003
    },
    stars: {
        count: 2000,
        size: 0.15,
        color: 0xffffff,
        range: 400
    }
};
```

**Что мы сделали:** Описали цвет фона, туман и звёзды.

---

## ШАГ 4: Создаём конфиг камеры

**Файл:** `src/config/camera.js`

```javascript
export const CAMERA_CONFIG = {
    fov: 45,
    near: 0.1,
    far: 1000,
    position: { x: 5, y: 4, z: 8 },
    target: { x: 0, y: 0, z: 0 }
};
```

**Что мы сделали:** Настроили камеру (угол обзора, позицию, дальность).

---

## ШАГ 5: Создаём SceneManager (только каркас)

**Файл:** `src/core/SceneManager.js`

```javascript
import * as THREE from 'three';
import { SCENE_CONFIG } from '../config/scene.js';

export class SceneManager {
    constructor() {
        this.scene = null;
        this.stars = null;
    }
    
    create() {
        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color(SCENE_CONFIG.background);
        return this.scene;
    }
    
    getScene() {
        return this.scene;
    }
    
    update(time) {
        // Пока пусто
    }
}
```

**Что мы сделали:** 
- Создали класс SceneManager
- Научились создавать сцену с фоном
- Пока без звёзд

**Проверка:** Код пока не работает, т.к. нет main.js

---

## ШАГ 6: Создаём CameraManager

**Файл:** `src/core/CameraManager.js`

```javascript
import * as THREE from 'three';
import { CAMERA_CONFIG } from '../config/camera.js';

export class CameraManager {
    constructor(rendererDomElement) {
        this.camera = null;
        this.rendererDomElement = rendererDomElement;
    }

    create() {
        this.camera = new THREE.PerspectiveCamera(
            CAMERA_CONFIG.fov,
            window.innerWidth / window.innerHeight,
            CAMERA_CONFIG.near,
            CAMERA_CONFIG.far
        );

        this.camera.position.set(
            CAMERA_CONFIG.position.x,
            CAMERA_CONFIG.position.y,
            CAMERA_CONFIG.position.z
        );

        this.camera.lookAt(
            CAMERA_CONFIG.target.x,
            CAMERA_CONFIG.target.y,
            CAMERA_CONFIG.target.z
        );
        
        return this.camera;
    }

    getCamera() {
        return this.camera;
    }

    onWindowResize() {
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
    }
}
```

**Что мы сделали:** 
- Создали класс для управления камерой
- Добавили метод для ресайза окна

---

## ШАГ 7: Создаём main.js (минимальная версия)

**Файл:** `src/main.js`

```javascript
import * as THREE from 'three';
import { SceneManager } from './core/SceneManager.js';
import { CameraManager } from './core/CameraManager.js';

class Game {
    constructor() {
        this.renderer = null;
        this.sceneManager = null;
        this.cameraManager = null;
        this.init();
    }

    init() {
        // 1. СОЗДАЁМ РЕНДЕРЕР
        this.renderer = new THREE.WebGLRenderer({ antialias: true });
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(this.renderer.domElement);

        // 2. СОЗДАЁМ СЦЕНУ
        this.sceneManager = new SceneManager();
        const scene = this.sceneManager.create();

        // 3. СОЗДАЁМ КАМЕРУ
        this.cameraManager = new CameraManager(this.renderer.domElement);
        const camera = this.cameraManager.create();

        // 4. РИСУЕМ ПЕРВЫЙ КАДР
        this.renderer.render(scene, camera);

        console.log('✅ Game: приложение инициализировано');
    }
}

const game = new Game();
```

**Что мы сделали:**
- Создали класс Game
- Инициализировали рендерер
- Создали сцену и камеру
- Отрисовали первый кадр

**Проверка:** Откройте index.html в браузере → вы увидите **чёрный экран**. Это нормально! Сцена есть, но ничего не добавлено.

---

## ШАГ 8: Добавляем анимационный цикл

**Добавьте в файл `src/main.js` метод `animate`:**

```javascript
// Добавьте этот метод в класс Game
animate() {
    requestAnimationFrame(() => this.animate());
    
    this.renderer.render(
        this.sceneManager.getScene(),
        this.cameraManager.getCamera()
    );
}
```

**И в методе `init()` после создания камеры добавьте:**

```javascript
// После this.cameraManager.create()
this.animate();
```

**Полный метод init теперь:**

```javascript
init() {
    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(this.renderer.domElement);

    this.sceneManager = new SceneManager();
    const scene = this.sceneManager.create();

    this.cameraManager = new CameraManager(this.renderer.domElement);
    const camera = this.cameraManager.create();

    this.animate();  // 👈 ЗАПУСКАЕМ АНИМАЦИЮ

    console.log('✅ Game: приложение инициализировано');
}
```

**Проверка:** Чёрный экран, но теперь консоль не выдаёт ошибок и анимационный цикл работает.

---

## ШАГ 9: Добавляем звёзды в SceneManager

**Добавьте в `src/core/SceneManager.js` метод `_createStars`:**

```javascript
_createStars() {
    const { count, size, color, range } = SCENE_CONFIG.stars;

    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
        positions[i * 3] = (Math.random() - 0.5) * range;
        positions[i * 3 + 1] = (Math.random() - 0.5) * range * 0.6;
        positions[i * 3 + 2] = (Math.random() - 0.5) * range * 0.5 - 50;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const material = new THREE.PointsMaterial({
        color: color,
        size: size,
        transparent: true,
        opacity: 0.8
    });

    this.stars = new THREE.Points(geometry, material);
    this.scene.add(this.stars);
}
```

**И в методе `create` перед `return this.scene` добавьте:**

```javascript
this._createStars();
```

**Теперь метод `create` выглядит так:**

```javascript
create() {
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(SCENE_CONFIG.background);

    if (SCENE_CONFIG.fog.enabled) {
        this.scene.fog = new THREE.FogExp2(
            SCENE_CONFIG.fog.color,
            SCENE_CONFIG.fog.density
        );
    }
    
    this._createStars();  // 👈 ДОБАВЛЕНО
    
    return this.scene;
}
```

**Проверка:** Вы должны увидеть **множество белых звёзд** на тёмно-синем фоне! 🎉

---

## ШАГ 10: Добавляем мерцание звёзд

**В `src/core/SceneManager.js` обновите метод `update`:**

```javascript
update(time) {
    if (this.stars && this.stars.material) {
        this.stars.material.opacity = 0.7 + Math.sin(time * 3) * 0.1;
    }
}
```

**В `src/main.js` добавьте переменную `time` и обновите `animate`:**

```javascript
// Добавьте в конструктор Game
constructor() {
    this.renderer = null;
    this.sceneManager = null;
    this.cameraManager = null;
    this.time = 0;  // 👈 ДОБАВЛЕНО
    this.init();
}

// Обновите метод animate
animate() {
    requestAnimationFrame(() => this.animate());
    
    this.time += 0.016;  // 👈 ДОБАВЛЕНО (примерно 1/60 секунды)
    
    this.sceneManager.update(this.time);  // 👈 ДОБАВЛЕНО
    
    this.renderer.render(
        this.sceneManager.getScene(),
        this.cameraManager.getCamera()
    );
}
```

**Проверка:** Звёзды теперь **мягко мерцают**!

---

## ШАГ 11: Добавляем управление камерой (OrbitControls)

**В `src/core/CameraManager.js` добавьте в начало импорт:**

```javascript
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
```

**Добавьте метод `createControls`:**

```javascript
createControls() {
    this.controls = new OrbitControls(this.camera, this.rendererDomElement);
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.05;
    this.controls.enableZoom = true;
    this.controls.enablePan = true;
    this.controls.target.set(0, 0, 0);
    
    return this.controls;
}
```

**Добавьте метод `update` (вызывается каждый кадр):**

```javascript
update() {
    if (this.controls) {
        this.controls.update();
    }
}
```

**В `src/main.js` в методе `init` после создания камеры добавьте:**

```javascript
this.cameraManager.createControls();
```

**И в методе `animate` добавьте:**

```javascript
this.cameraManager.update();
```

**Теперь `init` выглядит так:**

```javascript
init() {
    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(this.renderer.domElement);

    this.sceneManager = new SceneManager();
    const scene = this.sceneManager.create();

    this.cameraManager = new CameraManager(this.renderer.domElement);
    const camera = this.cameraManager.create();
    this.cameraManager.createControls();  // 👈 ДОБАВЛЕНО

    this.animate();
}
```

**А `animate` так:**

```javascript
animate() {
    requestAnimationFrame(() => this.animate());
    
    this.time += 0.016;
    
    this.sceneManager.update(this.time);
    this.cameraManager.update();  // 👈 ДОБАВЛЕНО
    
    this.renderer.render(
        this.sceneManager.getScene(),
        this.cameraManager.getCamera()
    );
}
```

**Проверка:** Теперь можно **вращать камеру мышью**! (зажмите левую кнопку и двигайте)

---

## ШАГ 12: Добавляем ресайз окна

**В `src/main.js` в метод `init` добавьте:**

```javascript
window.addEventListener('resize', () => this.onWindowResize());
```

**И добавьте метод в класс Game:**

```javascript
onWindowResize() {
    this.cameraManager.onWindowResize();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
}
```

**Проверка:** При изменении размера окна изображение подстраивается.

---

## ШАГ 13: Добавляем стили CSS

**Файл:** `style.css`

```css
body {
    margin: 0;
    overflow: hidden;
    font-family: 'Segoe UI', 'Arial', sans-serif;
}

#info {
    position: absolute;
    top: 20px;
    left: 20px;
    background: rgba(0, 0, 0, 0.7);
    backdrop-filter: blur(10px);
    padding: 12px 20px;
    border-radius: 10px;
    border-left: 4px solid #ffaa44;
    color: white;
    pointer-events: none;
    z-index: 100;
}

#info h1 {
    margin: 0 0 5px 0;
    font-size: 18px;
    color: #ffaa44;
}

#info p {
    margin: 0;
    font-size: 12px;
    opacity: 0.8;
}

.status {
    position: absolute;
    bottom: 20px;
    right: 20px;
    background: rgba(0, 0, 0, 0.5);
    padding: 5px 10px;
    border-radius: 5px;
    font-size: 10px;
    color: #4f4;
    font-family: monospace;
}
```

**В `index.html` добавьте подключение стилей в `<head>`:**

```html
<link rel="stylesheet" href="style.css">
```

---

## ШАГ 14: Итоговые файлы для проверки

### Структура проекта:

```
space-constructor/
├── index.html
├── style.css
└── src/
    ├── main.js
    ├── config/
    │   ├── scene.js
    │   └── camera.js
    └── core/
        ├── SceneManager.js
        └── CameraManager.js
```

### Полный код main.js:

```javascript
import * as THREE from 'three';
import { SceneManager } from './core/SceneManager.js';
import { CameraManager } from './core/CameraManager.js';

class Game {
    constructor() {
        this.renderer = null;
        this.sceneManager = null;
        this.cameraManager = null;
        this.time = 0;
        this.init();
    }

    init() {
        this.renderer = new THREE.WebGLRenderer({ antialias: true });
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.shadowMap.enabled = true;
        this.renderer.setPixelRatio(window.devicePixelRatio);
        document.body.appendChild(this.renderer.domElement);

        this.sceneManager = new SceneManager();
        const scene = this.sceneManager.create();

        this.cameraManager = new CameraManager(this.renderer.domElement);
        this.cameraManager.create();
        this.cameraManager.createControls();

        window.addEventListener('resize', () => this.onWindowResize());

        this.animate();
    }

    onWindowResize() {
        this.cameraManager.onWindowResize();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
    }

    animate() {
        requestAnimationFrame(() => this.animate());

        this.time += 0.016;

        this.sceneManager.update(this.time);
        this.cameraManager.update();

        this.renderer.render(
            this.sceneManager.getScene(),
            this.cameraManager.getCamera()
        );
    }
}

const game = new Game();
```

---

## Запуск проекта

```bash
# В терминале из папки проекта:
npx serve

# Или
python -m http.server 8000

# Откройте в браузере: http://localhost:8000
```

---

## Итог: что у вас получилось

| Шаг | Что добавили | Результат |
|-----|--------------|-----------|
| 1-4 | HTML + конфиги | Структура проекта |
| 5-6 | SceneManager + CameraManager | Базовые классы |
| 7 | Минимальный Game | Чёрный экран |
| 8 | Анимационный цикл | Стабильная отрисовка |
| 9 | Звёзды | ✨ Звёздное поле |
| 10 | Мерцание | Пульсирующие звёзды |
| 11 | OrbitControls | 🖱️ Вращение камеры мышью |
| 12 | Resize | Адаптация к окну |
| 13 | CSS | 🎨 Красивое UI |

---

## 📚 Ресурсы

### Официальная документация
- [Three.js Документация](https://threejs.org/docs/)
- [Three.js Примеры](https://threejs.org/examples/)
- [WebGL Fundamentals](https://webglfundamentals.org/)

### Книги
- "Three.js Cookbook" (Jos Dirksen)
- "Learning Three.js" (Jos Dirksen)
- "WebGL Programming Guide" (Kouichi Matsuda)

### Сообщества
- [Three.js Discourse](https://discourse.threejs.org/)
- [Three.js GitHub](https://github.com/mrdoob/three.js)
- [Stack Overflow](https://stackoverflow.com/questions/tagged/three.js)

---

<div align="center">

От вращающегося куба до AAA-игры — долгий путь, но каждый шедевр начинается с первого шага.

---

[⬆ К началу](#-threejs-3d-game--урок-1)

</div>
