# Multi Lessons
## `Практические уроки по изучению javascript и работы с ним в рамках объемной графики`

<div align="center">
  
## 🌟 JavaScript & Three.js

<img src="https://github.com/Gabryelf/Volumetric-Graphics-Js/blob/main/docs/intro/2026-05-25_16-38-42.png" width="400" alt="Dragon animation"/>

</div>

<!-- Кнопки -->
<p align="center">
  <a href="https://github.com/Gabryelf/Volumetric-Graphics-Js/stargazers">
    <img src="https://img.shields.io/github/stars/Gabryelf/Volumetric-Graphics-Js?color=gold&style=for-the-badge" alt="Stars"/>
  </a>
  <a href="https://github.com/Gabryelf/Volumetric-Graphics-Js">
    <img src="https://img.shields.io/github/forks/Gabryelf/Volumetric-Graphics-Js?color=green&style=for-the-badge" alt="Forks"/>
  </a>
  <a href="https://github.com/Gabryelf/Volumetric-Graphics-Js/issues">
    <img src="https://img.shields.io/github/issues/Gabryelf/Volumetric-Graphics-Js?color=blue&style=for-the-badge" alt="Issues"/>
  </a>
  <a href="https://github.com/Gabryelf/Volumetric-Graphics-Js/blob/main/LICENSE">
    <img src="https://img.shields.io/github/license/Gabryelf/Volumetric-Graphics-Js?color=red&style=for-the-badge" alt="License"/>
  </a>
</p>

<!-- Разделитель -->
![divider](https://github.com/Gabryelf/Atlas-Assets/raw/main/docs/animations/gifs-line/pulse-grey.gif)

![Версия](https://img.shields.io/badge/версия-0.0.1-brightgreen)
![js](https://img.shields.io/badge/javascript-yellow)
![canvas](https://img.shields.io/badge/canvas-API-cyan)
<details> <summary><strong>📁 Этап 1: Создание первой сцены </strong></summary>


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

## 📖 Содержание

- [О проекте](#-о-проекте)
- [Технологии](#-технологии)
- [Что ты узнаешь](#-что-ты-узнаешь)
- [Структура проекта](#-структура-проекта)
- [Установка и запуск](#-установка-и-запуск)
- [Пошаговое объяснение кода](#-пошаговое-объяснение-кода)
  - [1. HTML-структура](#1-html-структура)
  - [2. Импорт Three.js](#2-импорт-threejs)
  - [3. Создание сцены](#3-создание-сцены)
  - [4. Настройка камеры](#4-настройка-камеры)
  - [5. Рендерер — холст для рисования](#5-рендерер--холст-для-рисования)
  - [6. Геометрия — скелет объекта](#6-геометрия--скелет-объекта)
  - [7. Материал — кожа объекта](#7-материал--кожа-объекта)
  - [8. Меш — объединение формы и внешности](#8-меш--объединение-формы-и-внешности)
  - [9. Система освещения](#9-система-освещения)
  - [10. Цикл анимации](#10-цикл-анимации)
- [Концептуальные основы](#-концептуальные-основы)
  - [Система координат Three.js](#система-координат-threejs)
  - [Как работает 3D-рендеринг?](#как-работает-3d-рендеринг)
  - [Сравнение с реальным миром](#сравнение-с-реальным-миром)
- [Часто задаваемые вопросы](#-часто-задаваемые-вопросы)
- [Задания для самостоятельной работы](#-задания-для-самостоятельной-работы)
- [Что дальше?](#-что-дальше)
- [Ресурсы](#-ресурсы)

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

## 📁 Структура проекта

```
📦 threejs-first-steps/
 ┣ 📜 index.html           # Главный файл проекта
 ┣ 📜 README.md            # Документация (этот файл)
 ┗ 📜 .gitignore           # Игнорируемые Git файлы
```

---

## 🚀 Установка и запуск

### Быстрый старт (3 простых шага)

1. **Создай файл** `index.html` в любой папке

2. **Скопируй код** из [раздела ниже](#-пошаговое-объяснение-кода)

3. **Открой файл** в браузере:
   - Двойной клик по файлу
   - Или используй Live Server в VS Code
   - Или запусти локальный сервер: `npx http-server`

### Результат

Ты увидишь:
- 🟢 Зелёный вращающийся куб
- 🌙 Тёмно-синий фон
- 💡 Освещение, создающее объём
- 📐 Корректную перспективу

<div align="center">
  <img src="https://github.com/Gabryelf/Volumetric-Graphics-Js/blob/main/docs/screens/screen1.png" alt="Результат" />
</div>

---

## 📝 Пошаговое объяснение кода

### 1. HTML-структура

```html
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Моя первая 3D игра</title>
```

<details>
<summary><b>🤔 Что здесь происходит?</b></summary>

Это базовая HTML5 структура. Ключевой момент — `<meta name="viewport">`, который обеспечивает корректное отображение на мобильных устройствах. Тег `charset="UTF-8"` гарантирует поддержку русского языка.

</details>

```html
    <style>
        body {
            margin: 0;              /* Убираем отступы браузера */
            overflow: hidden;       /* Убираем полосы прокрутки */
        }
        canvas {
            display: block;         /* Убираем отступы у canvas */
        }
    </style>
```

<details>
<summary><b>🎨 Почему эти стили важны?</b></summary>

- `margin: 0` — браузеры по умолчанию добавляют отступ 8px, который создал бы белую рамку вокруг нашей 3D-сцены
- `overflow: hidden` — предотвращает появление прокрутки, если canvas выйдет за границы
- `display: block` — canvas по умолчанию inline-элемент (как текст), что создаёт небольшой отступ снизу

</details>

### 2. Импорт Three.js

```javascript
import * as THREE from 'three';
```

<details>
<summary><b>📦 Что такое import map?</b></summary>

Мы используем современный способ подключения через `import map`. Это технология, позволяющая использовать короткие имена для импорта модулей прямо в браузере.

```html
<!-- Import Map: говорит браузеру, где искать модули -->
    <script type="importmap">
        {
            "imports": {
                "three": "https://unpkg.com/three@0.160.0/build/three.module.js",
                "three/addons/": "https://unpkg.com/three@0.160.0/examples/jsm/"
            }
        }
    </script>
```

**Преимущества:**
- Не нужно устанавливать Node.js или npm
- Работает прямо в браузере
- Всегда актуальная версия из CDN

**Альтернативы:**
- Можно скачать файлы локально
- Можно использовать npm: `npm install three`
- Можно использовать другие CDN (jsDelivr, cdnjs)

</details>

### 3. Создание сцены

```javascript
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x1a1a2e);
```

<details>
<summary><b>🎭 Сцена — это контейнер для всего</b></summary>

Представь театральную постановку:
- **Scene** = театральные подмостки
- **Objects, Lights, Camera** = актёры, свет, декорации
- **Renderer** = зритель в зале

`new THREE.Color(0x1a1a2e)` — задаёт цвет в шестнадцатеричном формате:
- `0x` — префикс для hex-чисел
- `1a` — красный компонент (26 из 255)
- `1a` — зелёный компонент (26 из 255)
- `2e` — синий компонент (46 из 255)
- Результат: тёмно-синий цвет (#1a1a2e)

**Другие способы задать цвет:**
```javascript
// CSS-строка
scene.background = new THREE.Color('rgb(26, 26, 46)');

// Имя цвета
scene.background = new THREE.Color('navy');

// HSL
scene.background = new THREE.Color().setHSL(0.66, 0.28, 0.14);
```

</details>

### 4. Настройка камеры

```javascript
const camera = new THREE.PerspectiveCamera(
    75,                                    // FOV - угол обзора
    window.innerWidth / window.innerHeight, // Aspect ratio
    0.1,                                   // Near plane
    1000                                   // Far plane
);
camera.position.z = 5;
```

<details>
<summary><b>📷 PerspectiveCamera — имитация человеческого зрения</b></summary>

**Параметры перспективной камеры:**

| Параметр | Значение | Описание | Визуализация |
|----------|----------|----------|--------------|
| **FOV** | 75° | Угол обзора по вертикали | 🔭 → 🔎 |
| **Aspect** | авто | Отношение ширины к высоте | 16:9, 4:3, etc |
| **Near** | 0.1 | Минимальное расстояние отрисовки | 10 см от глаз |
| **Far** | 1000 | Максимальное расстояние отрисовки | 1 км |

```
        Камера
         👁
         /\
        /  \
       /    \
      / FOV  \
     /  75°   \
    /__________\
   Near     Far
   0.1      1000
```

**FOV (Field of View):**
- 60° — узкий обзор (бинокль)
- 75° — естественный обзор (наш случай)
- 100°+ — широкоугольный обзор (рыбий глаз)

**Зачем нужны Near и Far?**
Это оптимизация: объекты ближе 0.1 и дальше 1000 не будут отрисовываться. Это экономит ресурсы GPU.
Меньше 0.1 - near можно задать, но не стоит, это сказывается на обработке и тоже самое с far - более 
1000 можно задать спокойно, но если много объектов и большая сцена не стоит!

</details>

### 5. Рендерер — холст для рисования
**Это как будто наш художник** 
Исполнитель видимости камеры - все что в нее попадает он отрисует
в окне нашего браузера по ширине и высоте которую мы укажем в аргументах seSize() метода

```javascript
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
document.body.appendChild(renderer.domElement);
```

**С помощью метода javascript appendChild() мы устанавливаем рендер как компонент 
на наше окно браузера через обращение к документу, то бишь к HTML файлу** 

<details>
<summary><b>🎨 WebGLRenderer — магия под капотом</b></summary>

**Что происходит при создании рендерера:**

1. **WebGLRenderer** создаёт HTML5 Canvas элемент
2. Настраивает WebGL контекст (2.0 если доступен)
3. Компилирует шейдеры для GPU
4. Готовит буферы для вершин и индексов

**Важные настройки:**

```javascript
// Включаем сглаживание (красивые края)
const renderer = new THREE.WebGLRenderer({ 
    antialias: true,
    alpha: true  // Прозрачный фон
});

// Устанавливаем размер
renderer.setSize(window.innerWidth, window.innerHeight);

// Включаем тени
renderer.shadowMap.enabled = true;

// Настройка точности теней
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
```

**Почему важно обрабатывать ресайз окна:**

```javascript
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});
```

</details>

### 6. Геометрия — скелет объекта

```javascript
const geometry = new THREE.BoxGeometry(1, 1, 1);
```

<details>
<summary><b>📐 BoxGeometry — математика куба</b></summary>

**Что создаёт BoxGeometry:**
- 8 вершин (углы куба)
- 12 рёбер (линии между вершинами)
- 6 граней (плоскости)
- 24 UV-координаты (по 4 на грань для текстур)

```
   Вершины куба (x, y, z):
   
   (-0.5,  0.5,  0.5) ——— ( 0.5,  0.5,  0.5)
        |\                    /|
        | \                  / |
        |  \                /  |
        |   \              /   |
        |    (-0.5, -0.5,  0.5) — (0.5, -0.5, 0.5)
        |    |             |    |
   (-0.5,  0.5, -0.5) ——— ( 0.5,  0.5, -0.5)
         \   |             \   |
          \  |              \  |
           \ |               \ |
            \|                \|
        (-0.5, -0.5, -0.5) — (0.5, -0.5, -0.5)
```

**Другие базовые геометрии:**
- `THREE.SphereGeometry(radius, widthSegments, heightSegments)`
- `THREE.CylinderGeometry(radiusTop, radiusBottom, height, segments)`
- `THREE.ConeGeometry(radius, height, segments)`
- `THREE.TorusGeometry(radius, tube, radialSegments, tubularSegments)`

</details>

### 7. Материал — кожа объекта

```javascript
const material = new THREE.MeshStandardMaterial({ 
    color: 0x00ff00,
    roughness: 0.5,
    metalness: 0.1
});
```

<details>
<summary><b>🎨 MeshStandardMaterial — физически корректный материал</b></summary>

**PBR (Physically Based Rendering):**
- Реалистичное поведение света
- Основан на физических принципах
- Используется в современных играх и фильмах

**Параметры материала:**

| Параметр | Диапазон | Описание |
|----------|----------|----------|
| **roughness** | 0-1 | 0 = зеркало, 1 = матовый пластик |
| **metalness** | 0-1 | 0 = диэлектрик, 1 = металл |
| **color** | hex | Базовый цвет |

```
Roughness визуализация:
0.0: ✨━━━━━━ (идеальное отражение)
0.2: 💎━━━━━━ (глянцевый)
0.5: 🏓━━━━━━ (полуматовый) ← наш куб
0.8: 🧱━━━━━━ (шероховатый)
1.0: 📄━━━━━━ (полностью матовый)
```

**Другие типы материалов:**
- `MeshBasicMaterial` — не реагирует на свет
- `MeshLambertMaterial` — простое освещение (быстрее)
- `MeshPhongMaterial` — блики и отражения
- `MeshToonMaterial` — мультяшный стиль

</details>

### 8. Меш — объединение формы и внешности

```javascript
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);
```

<details>
<summary><b>🎯 Mesh — это как объект в реальном мире</b></summary>

В реальном мире: Статуя = Форма (мрамор) + Материал (текстура мрамора)
В Three.js: Mesh = Geometry + Material

**Трансформации меша:**
```javascript
// Позиция
cube.position.x = 2;
cube.position.y = 1;
cube.position.z = -3;
// Или одной строкой:
cube.position.set(2, 1, -3);

// Вращение (в радианах!)
cube.rotation.x = Math.PI / 4;  // 45 градусов
cube.rotation.y = 0.5;          // ~28.6 градусов

// Масштаб
cube.scale.x = 2;    // Растянуть по X в 2 раза
cube.scale.set(1, 2, 1);  // Растянуть по Y в 2 раза
```

</details>

### 9. Система освещения

```javascript
// Ambient Light — рассеянный свет
const ambientLight = new THREE.AmbientLight(0x404040, 1);
scene.add(ambientLight);

// Directional Light — направленный свет
const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(5, 5, 5);
scene.add(directionalLight);
```

<details>
<summary><b>💡 Типы освещения в Three.js</b></summary>

**Типы источников света:**

| Тип | Аналог в реальности | Особенности |
|-----|---------------------|-------------|
| **AmbientLight** | Общее освещение комнаты | Без теней, равномерный |
| **DirectionalLight** | Солнце | Параллельные лучи |
| **PointLight** | Лампочка | Свет во все стороны |
| **SpotLight** | Фонарик | Конус света |

```
Визуализация:

AmbientLight:         DirectionalLight:      PointLight:
    ⭐                    ☀️                    💡
   равномерно           лучи →             лучи во все
   освещает всё        в одном             стороны
                       направлении
```

**Почему нужны оба типа:**
- Только AmbientLight → всё плоское, нет теней
- Только DirectionalLight → тени абсолютно чёрные
- Оба вместе → естественное освещение с мягкими тенями

</details>

### 10. Цикл анимации

```javascript
function animate() {
    requestAnimationFrame(animate);
    
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    
    renderer.render(scene, camera);
}
animate();
```

<details>
<summary><b>🔄 Игровой цикл — сердце анимации</b></summary>

**Как это работает:**

```
Начало
  ↓
[requestAnimationFrame] ← Ожидание V-Sync монитора
  ↓
[Обновление логики]     ← Вращение, физика, AI
  ↓
[Рендеринг кадра]       ← Отрисовка на Canvas
  ↓
Возврат к началу
```

**Почему requestAnimationFrame, а не setInterval?**

| Критерий | requestAnimationFrame | setInterval |
|----------|----------------------|-------------|
| **Частота** | 60 FPS (синхр. с экраном) | Заданная (может не совпадать) |
| **При сворачивании** | Пауза | Продолжает работать |
| **Энергопотребление** | Оптимальное | Высокое |
| **Плавность** | Идеальная | Может дёргаться |

**Правильный игровой цикл с дельтой времени:**

```javascript
const clock = new THREE.Clock();

function animate() {
    requestAnimationFrame(animate);
    
    const delta = clock.getDelta(); // Время с прошлого кадра
    
    // Скорость не зависит от FPS
    cube.rotation.y += 2 * delta; // 2 радиана в секунду
    
    renderer.render(scene, camera);
}
```

</details>

---

## 💡 Концептуальные основы

### Система координат Three.js

```
        Y (Вверх)
        |
        |
        |
        /‾‾‾‾‾‾‾ X (Вправо)
       /
      /
     Z (На зрителя)
```

<details>
<summary><b>📍 Правосторонняя система координат</b></summary>

**Правило правой руки:**
1. Вытяни правую руку
2. Большой палец → X
3. Указательный палец → Y
4. Средний палец → Z

**Важно:** Эта система отличается от:
- CSS (Y вниз)
- Unity (Y вверх, но Z наоборот)
- Blender (Z вверх)

**Конвертация из градусов в радианы:**
```javascript
// Функция-помощник
const degToRad = (degrees) => degrees * (Math.PI / 180);

cube.rotation.y = degToRad(90); // Поворот на 90°
```

</details>

### Как работает 3D-рендеринг?

<details>
<summary><b>🔬 Путь от трёхмерной сцены до пикселей на экране</b></summary>

```
3D Мир                 GPU Pipeline              Экран
───────               ──────────────             ──────

[Вершины]     →    Vertex Shader     →
(x, y, z)          (3D → 2D)

[Треугольники] →   Rasterizer        →
(сетка)            (в пиксели)

[Материалы]   →    Fragment Shader   →    [Pixel]
(цвет, свет)       (цвет каждого        (RGB #00ff00)
                    пикселя)
```

**Упрощённо:**
1. Трёхмерные координаты преобразуются в 2D-координаты экрана
2. Невидимые поверхности отсекаются
3. Оставшиеся разбиваются на пиксели
4. Для каждого пикселя рассчитывается цвет с учётом освещения

Именно это Three.js делает за нас!

</details>

### Сравнение с реальным миром

<details>
<summary><b>🌍 Аналогии для лучшего понимания</b></summary>

| 3D-термин | Аналог в фотографии | Аналог в театре |
|-----------|---------------------|-----------------|
| **Scene** | Студия | Сцена |
| **Camera** | Фотоаппарат | Глаз зрителя |
| **Geometry** | Каркас объекта | Форма декорации |
| **Material** | Краска/текстура | Цвет/материал ткани |
| **Mesh** | Готовый объект | Готовая декорация |
| **Light** | Студийный свет | Софиты |
| **Renderer** | Фотоплёнка | Зритель |
| **Animation** | Видеосъёмка | Движение актёров |

</details>

---

## ❓ Часто задаваемые вопросы

<details>
<summary><b>1. Куб не отображается / чёрный экран</b></summary>

**Проверь:**
- Консоль браузера (F12) на наличие ошибок
- Подключение Three.js (должен загрузиться без ошибок)
- Наличие освещения (без света объекты чёрные)
- Позицию камеры (может быть внутри куба)
- Порядок добавления объектов в сцену

**Решение:**
```javascript
// Временный тестовый код
console.log('Renderer:', renderer);
console.log('Scene children:', scene.children.length);
console.log('Cube position:', cube.position);
```

</details>

<details>
<summary><b>2. Почему вращение в радианах, а не градусах?</b></summary>

**Кратко:** Радианы естественны для математики и программирования.

```javascript
// Полезная константа
const RAD = Math.PI / 180;

// Использование
mesh.rotation.y = 90 * RAD; // 90 градусов
mesh.rotation.x = 45 * RAD; // 45 градусов
```

**Связь радиан и градусов:**
- 180° = π радиан (≈ 3.14159)
- 360° = 2π радиан
- 1 радиан ≈ 57.3°

</details>

<details>
<summary><b>3. Можно ли использовать TypeScript?</b></summary>

Да! Three.js имеет отличную поддержку типов:

```bash
npm install three @types/three
```

```typescript
import * as THREE from 'three';

const scene: THREE.Scene = new THREE.Scene();
const cube: THREE.Mesh = new THREE.Mesh(geometry, material);
```

</details>

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


</details>

![divider](https://github.com/Gabryelf/Atlas-Assets/raw/main/docs/animations/gifs-line/pulse-grey.gif)



![Версия](https://img.shields.io/badge/версия-0.0.2-brightgreen)
![js](https://img.shields.io/badge/javascript-yellow)
![canvas](https://img.shields.io/badge/canvas-API-cyan)
<details> <summary><strong>📁 Этап 2: Фундамент для будущей игры </strong></summary>


<div align="center">

# 🎮 Three.js 3D Game — Урок 2

### Архитектура игры: Сцена и Игровой Цикл

[![Three.js](https://img.shields.io/badge/Three.js-r160-black?logo=three.js&logoColor=white)](https://threejs.org/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow?logo=javascript&logoColor=white)](https://www.javascript.com/)
[![OOP](https://img.shields.io/badge/OOP-Classes-blueviolet)](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Classes)

<img src="https://threejs.org/examples/screenshots/webgl_points_billboards.jpg" alt="Звездное небо Three.js" width="400"/>

*От одиночного куба — к модульной архитектуре и звёздному небу*

</div>

---

# 🌟 Об уроке

В прошлом уроке мы создали вращающийся куб. Теперь наш проект вырос, и смешивать весь код в одном файле — непрофессионально. Представь, что мы строим большой космический корабль. Нужно разделить его на отсеки: двигатель, рубка управления, топливный бак.

То же самое мы сделаем с нашим кодом!

## 🎯 Что ты узнаешь

После завершения этого урока ты будешь понимать:

- ✅ ☕ **Работа с Node.js и npm** — установка Three.js как пакета.
- ✅ 🗂 **Модульная архитектура** — разделение кода на логические части (менеджеры, конфиги).
- ✅ 🏗 **Класс `Game`** — создание главного игрового цикла и точки входа в приложение.
- ✅ 🎨 **`SceneManager`** — создание сцены, фона и эффекта тумана.
- ✅ ✨ **Система частиц** — создание procedurally-generated звездного неба (2000 звезд!).
- ✅ 🎭 **Принцип единой ответственности** — каждый класс занимается только своим делом.

---

## 📁 Структура проекта

В этом уроке мы создадим фундамент, на котором будем строить игру дальше. Вот как будет выглядеть наш проект после завершения этапа:

```
📦 your-project-folder/
 ┣ 📂 src/
 ┃ ┣ 📂 config/
 ┃ ┃ ┗ 📜 scene.js          # Конфигурация сцены (цвет, туман, звезды)
 ┃ ┣ 📂 core/
 ┃ ┃ ┗ 📜 SceneManager.js   # Класс для управления сценой
 ┃ ┗ 📜 main.js             # Главный файл, класс Game и цикл анимации
 ┣ 📜 index.html            # HTML-файл с importmap
 ┗ 📜 package.json          # Файл с зависимостями (создаст npm)
```

---

## 🚀 Установка и запуск (Новый, профессиональный способ)

В первом уроке мы подключали Three.js напрямую из сети (через CDN). Это быстро для старта, но для большого проекта лучше установить его локально через **npm (Node Package Manager)**.

**1. Убедись, что установлен Node.js:**
Открой терминал (командную строку) и введи:
```bash
node -v
```
Если видишь версию (например, `v18.x.x`), всё отлично. Если нет — скачай Node.js с [официального сайта](https://nodejs.org/).

**2. Инициализируй проект:**
Создай папку для проекта, открой её в терминале и выполни:
```bash
npm init -y
```
Эта команда создаст файл `package.json` — «паспорт» нашего проекта.

**3. Установи Three.js:**
Выполни в терминале:
```bash
npm install three
```
Теперь Three.js будет лежать в папке `node_modules`, и мы сможем импортировать его из `main.js`, как обычный модуль.

**4. Запуск:**
Способ запуска не изменился — используй **Live Server** в VS Code или команду `npx http-server`.

---

# 📝 Пошаговое объяснение кода

Мы будем создавать файлы в том порядке, в котором они «оживают» в браузере. Начнём с главного входа — `index.html`, затем создадим главный класс `Game`, а потом — его помощников.

## 1. `index.html` — Точка входа

Это каркас нашего приложения. Главное отличие от прошлого урока — импорты `three` будут указывать на локальную папку `node_modules`, потому что мы установили пакет через npm.

<details>
<summary><b>📄 Код файла <code>index.html</code> (развернуть)</b></summary>

```html
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Three.js Игра — Урок 2: Архитектура</title>
    <style>
        body {
            margin: 0;
            overflow: hidden;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        #info {
            position: absolute;
            top: 20px;
            left: 20px;
            color: white;
            background: rgba(0,0,0,0.6);
            padding: 8px 15px;
            border-radius: 8px;
            pointer-events: none;
            z-index: 100;
            font-size: 14px;
        }
    </style>
</head>
<body>
    <div id="info">
        ✨ Модульная архитектура | Звездное поле | Игровой цикл
    </div>

    <script type="importmap">
        {
            "imports": {
                "three": "./node_modules/three/build/three.module.js"
            }
        }
    </script>

    <script type="module" src="src/main.js"></script>
</body>
</html>
```
</details>

<details>
<summary><b>🤔 Что изменилось по сравнению с уроком 1?</b></summary>

1. **`importmap` теперь указывает на локальную папку** `./node_modules/...`. Браузер будет брать Three.js с вашего компьютера, а не из Интернета. Это быстрее и надёжнее для разработки.
2. Мы добавили простой `<div>` с информацией, чтобы видеть, что страница загрузилась.
3. Основной скрипт `main.js` загружается как модуль (`type="module"`).

</details>

---

## 2. `config/scene.js` — Конфигурация сцены

«Выносим всё, что может измениться, в конфиги». Это золотое правило профессионала. Если мы захотим изменить цвет неба или количество звезд, мы не будем лезть в сложный код — просто откроем этот файл.

<div align="center">
  <img src="https://github.com/Gabryelf/Volumetric-Graphics-Js/blob/main/docs/screens/screen-7.png" alt="Файл конфигурации сцены" width="600"/>
  <br>
  <sub>Файл, где живут все настройки сцены</sub>
</div>

<details>
<summary><b>📄 Код файла <code>src/config/scene.js</code></b></summary>

```javascript
/**
 * КОНФИГ СЦЕНЫ
 * Все настройки сцены в одном месте
 */

export const SCENE_CONFIG = {
    // Цвет фона (космос) - используем HEX формат
    // 0x050518 - это тёмно-синий, почти ночное небо
    background: 0x050518,
    
    // Настройки тумана (создаёт эффект глубины и скрывает дальние объекты)
    fog: {
        enabled: true,          // Включаем туман
        color: 0x050518,       // Цвет тумана (должен совпадать с фоном для плавности)
        density: 0.003         // Плотность: 0.001 = лёгкая дымка, 0.01 = густой молоко
    },
    
    // Настройки звёздного поля (эффект "Космос")
    stars: {
        count: 2000,           // Количество звёзд (чем больше, тем красивее, но чуть тяжелее)
        size: 0.15,            // Размер каждой звезды в юнитах
        color: 0xffffff,       // Белый цвет (можно сделать 0xffaa66 для тёплых звёзд)
        range: 400             // Разброс звёзд в пространстве (от -200 до +200 по всем осям)
    }
};
```
</details>

<details>
<summary><b>🎨 Анатомия конфига: что мы настраиваем</b></summary>

*   **`background`**: Этот цвет зальёт весь холст. Важно: если у вас есть туман, цвет фона и тумана должны совпадать, чтобы переход был незаметным.
*   **`fog.enabled`**: Туман — это не просто красивый эффект. Он ещё и **оптимизация**! Объекты, скрытые в тумане, Three.js не отрисовывает (или отрисовывает не полностью).
*   **`stars`**: Мы создадим целое поле из 2000 звезд. Каждая звезда — это всего одна точка в 3D-пространстве. Отрисовка 2000 точек — очень лёгкая задача для компьютера, а выглядит потрясающе.

</details>

---

## 3. `core/SceneManager.js` — Управляющий сценой

Это наш первый «Менеджер». Слово «Manager» в названии класса означает, что он отвечает за создание, настройку и обновление какого-то одного компонента игры. `SceneManager` знает, как создать сцену, добавить туман и звезды, и может обновлять состояние звезд (например, заставить их мерцать).

<div align="center">
  <img src="https://github.com/Gabryelf/Volumetric-Graphics-Js/blob/main/docs/screens/screen-4.png" alt="Код SceneManager" width="600"/>
  <br>
  <sub>Класс-менеджер: он создает и хранит сцену</sub>
</div>

<details>
<summary><b>📄 Код файла <code>src/core/SceneManager.js</code></b></summary>

```javascript
import * as THREE from 'three';
import { SCENE_CONFIG } from '../config/scene.js';
 
export class SceneManager {
    constructor() {
        this.scene = null;   // Здесь будет храниться созданная сцена
        this.stars = null;   // Здесь будет храниться наше звездное поле
    }
    
    // Главный метод: создает и возвращает сцену
    create() {    
        // 1. СОЗДАЁМ СЦЕНУ
        this.scene = new THREE.Scene();
        
        // 2. НАСТРАИВАЕМ ФОН
        this.scene.background = new THREE.Color(SCENE_CONFIG.background);

        // 3. ДОБАВЛЯЕМ ТУМАН (если включён в конфиге)
        if (SCENE_CONFIG.fog.enabled) {
            this.scene.fog = new THREE.FogExp2(
                SCENE_CONFIG.fog.color,   // цвет тумана
                SCENE_CONFIG.fog.density  // плотность
            );
        }    
        
        // 4. СОЗДАЁМ ЗВЁЗДНОЕ НЕБО (вызов private-метода)
        this._createStars();
        
        // 5. ВОЗВРАЩАЕМ ГОТОВУЮ СЦЕНУ ДЛЯ ИСПОЛЬЗОВАНИЯ В ДРУГИХ КЛАССАХ
        return this.scene;
    }

    // Приватный метод (начинается с _) — он для внутреннего использования
    _createStars() {
        // Достаём настройки звезд из конфига
        const { count, size, color, range } = SCENE_CONFIG.stars;
        
        // Создаём «пустую» геометрию для точек
        const geometry = new THREE.BufferGeometry();
        
        // Массив, где будут лежать координаты x, y, z для КАЖДОЙ звезды
        const positions = [];
        
        // Генерируем случайные позиции для всех звезд
        for (let i = 0; i < count; i++) {
            // x, y, z в диапазоне от -range/2 до +range/2
            positions.push((Math.random() - 0.5) * range); // X
            positions.push((Math.random() - 0.5) * range); // Y
            positions.push((Math.random() - 0.5) * range); // Z
        }
        
        // Превращаем массив в атрибут WebGL
        geometry.setAttribute('position', 
            new THREE.BufferAttribute(new Float32Array(positions), 3));
        
        // Создаём материал для точек
        const material = new THREE.PointsMaterial({
            color: color,           // цвет звезд
            size: size,             // размер каждой точки
            transparent: true,      // разрешаем прозрачность
            opacity: 0.8            // начальная прозрачность 80%
        });
        
        // Создаём объект "Точки" (Points) и добавляем его в сцену
        this.stars = new THREE.Points(geometry, material);
        this.scene.add(this.stars);
    }
 
    // Геттер для получения сцены извне
    getScene() {
        return this.scene;
    }
 
    // Метод, который будет вызываться каждый кадр (из игрового цикла)
    update() {
        // Эффект мерцания: случайным образом меняем прозрачность звезд
        if (this.stars && this.stars.material) {
            // opacity будет от 0.2 до 0.9
            this.stars.material.opacity = 0.3 + Math.random() * 0.6;
        }
    }
}
```
</details>

<details>
<summary><b>🧠 Разбор ключевых концепций SceneManager</b></summary>

*   **`THREE.BufferGeometry`**: Это очень эффективный способ хранить данные вершин (точек) в памяти. Мы говорим: «Вот тебе плоский массив чисел: x1, y1, z1, x2, y2, z2... нарисуй точки в этих местах». Для 2000 звезд это идеально.
*   **`THREE.Points` и `PointsMaterial`**: Специальные объекты в Three.js для рисования множества точек (систем частиц). Они очень производительные.
*   **Приватный метод `_createStars()`**: Мы не хотим, чтобы кто-то извне мог случайно пересоздать звезды. Поэтому метод начинается с `_` — это договорённость среди разработчиков, что метод «приватный» и его не стоит трогать.
*   **Метод `update()`**: Сейчас здесь просто мерцание. Но в будущем здесь может быть, например, анимация туманностей или пролетающих метеоритов.

</details>

---

## 4. `main.js` — Сердце игры (Класс `Game` и игровой цикл)

Это главный дирижёр нашего оркестра. Класс `Game` создаёт все менеджеры, связывает их вместе и запускает бесконечный цикл анимации.

<div align="center">
  <img src="https://github.com/Gabryelf/Volumetric-Graphics-Js/blob/main/docs/screens/screen-5.png" alt="Код main.js" width="600"/>
  <br>
  <sub>Главный цикл игры: инициализация и бесконечная анимация</sub>
</div>

<details>
<summary><b>📄 Код файла <code>src/main.js</code> (первая часть — только СЦЕНА)</b></summary>

```javascript
import * as THREE from 'three';
import { SceneManager } from './core/SceneManager.js';
// Пока мы создали только SceneManager. CameraManager и LightManager появится в следующих уроках.
// import { CameraManager } from './core/CameraManager.js';
// import { LightManager } from './core/LightManager.js';

class Game {
    constructor() {
        // Свойства класса
        this.renderer = null;        // WebGL рендерер
        this.sceneManager = null;    // Менеджер сцены
        // this.cameraManager = null; // Будет в Уроке 3
        // this.lightManager = null;  // Будет в Уроке 4

        // Запускаем инициализацию
        this.init();
    }

    init() {
        // 1. СОЗДАЁМ РЕНДЕРЕР
        this.renderer = new THREE.WebGLRenderer({ antialias: true });
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.shadowMap.enabled = true; // Включаем тени (пригодятся позже)
        this.renderer.setPixelRatio(window.devicePixelRatio); // Для чёткости на retina-экранах
        document.body.appendChild(this.renderer.domElement);

        // 2. СОЗДАЁМ СЦЕНУ через SceneManager
        this.sceneManager = new SceneManager();
        const scene = this.sceneManager.create(); // Получаем готовую сцену
        // Сейчас у нас есть сцена с ЗВЁЗДАМИ и ТУМАНОМ!

        // 3. (ПОКА ЗАГЛУШКА) КАМЕРА И СВЕТ БУДУТ В СЛЕДУЮЩИХ УРОКАХ
        // Поэтому для теста добавим "заглушку" — обычную камеру и свет прямо здесь.
        console.warn('CameraManager и LightManager будут в Уроках 3 и 4. Пока использую временную камеру и свет.');
        
        // ВРЕМЕННАЯ КАМЕРА
        this.camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.camera.position.set(5, 4, 8);
        this.camera.lookAt(0, 0, 0);
        
        // ВРЕМЕННЫЙ СВЕТ
        const ambientLight = new THREE.AmbientLight(0x404060);
        const dirLight = new THREE.DirectionalLight(0xffffff, 1);
        dirLight.position.set(5, 10, 7);
        scene.add(ambientLight);
        scene.add(dirLight);
        
        // Добавим небольшой тестовый куб, чтобы было видно, что 3D-мир работает
        const testCubeGeometry = new THREE.BoxGeometry(1, 1, 1);
        const testCubeMaterial = new THREE.MeshStandardMaterial({ color: 0x44aa88, metalness: 0.6 });
        const testCube = new THREE.Mesh(testCubeGeometry, testCubeMaterial);
        testCube.castShadow = true;
        testCube.receiveShadow = false;
        scene.add(testCube);
        this.testCube = testCube; // Сохраняем, чтобы вращать в animate

        // 4. НАСТРАИВАЕМ ОБРАБОТЧИК РЕСАЙЗА ОКНА
        window.addEventListener('resize', () => this.onWindowResize());

        // 5. ЗАПУСКАЕМ ЦИКЛ АНИМАЦИИ
        this.animate();
    }

    onWindowResize() {
        // Обновляем камеру (пока временную)
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
    }

    animate() {
        // Рекурсивный вызов анимации
        requestAnimationFrame(() => this.animate());

        // 1. ОБНОВЛЯЕМ ЛОГИКУ МЕНЕДЖЕРОВ
        this.sceneManager.update(); // Звезды мерцают!
        
        // Временно вращаем кубик, чтобы проверить анимацию
        if (this.testCube) {
            this.testCube.rotation.x += 0.005;
            this.testCube.rotation.y += 0.01;
        }

        // 2. РЕНДЕРИМ СЦЕНУ
        this.renderer.render(this.sceneManager.getScene(), this.camera);
    }
}

// === ЗАПУСК ИГРЫ ===
const game = new Game();
```
</details>

<details>
<summary><b>🎬 Что происходит в <code>main.js</code>?</b></summary>

1.  **Конструктор `Game()`:** Создаётся объект игры. Сразу вызывается метод `init()`.
2.  **`init()`:** Это «режиссёрская» сцена.
    *   Создаётся `WebGLRenderer` — наш «художник».
    *   Создаётся `SceneManager`, и тот возвращает нам готовую сцену с туманом и звездами.
    *   *Пока, в качестве заглушки*, мы создаём камеру и свет прямо в `main.js`. В следующем уроке их место будет в `CameraManager` и `LightManager`.
    *   Добавляем тестовый кубик, чтобы было что анимировать.
    *   Регистрируем обработчик изменения размера окна.
    *   Запускаем `animate()`.
3.  **`animate()`:** **Игровой цикл**. Он выполняется 60 раз в секунду.
    *   Вызывает `update()` у менеджеров (звезды начинают мерцать).
    *   Вращает кубик.
    *   Говорит рендереру: «Нарисуй сцену с этой камеры!».
4.  **`const game = new Game();`** — Создаём экземпляр игры и тем самым запускаем весь процесс.

</details>

---

<div align="center">
  <img src="https://github.com/Gabryelf/Volumetric-Graphics-Js/blob/main/docs/screens/screen-6.png" alt="Результат урока 2" width="600"/>
  <br>
  <sub><strong>Результат:</strong> Звездное небо, мерцающие звезды, туман и вращающийся тестовый куб — всё работает отлично!</sub>
</div>

---

## 🎉 Итоги Урока 2

Поздравляю! Мы проделали огромную работу. Теперь наш проект не просто «куб на экране», а **профессиональная архитектура**, готовая к расширению.

**Что мы сделали:**
1.  Установили Three.js через **npm**, перейдя на локальную разработку.
2.  Создали **модульную структуру** проекта (папки `core`, `config`).
3.  Написали **класс `Game`**, который управляет всеми частями игры.
4.  Реализовали **`SceneManager`**, который отвечает за создание сцены, тумана и огромного звездного поля.
5.  Настроили **бесконечный игровой цикл** с мерцанием звезд и вращением куба.

**Что дальше?**
В следующем уроке (Урок 3) мы создадим `CameraManager` и `camera.js`, чтобы вынести камеру и управление (OrbitControls) в отдельный модуль. В Уроке 4 создадим `LightManager` и `light.js` с крутой системой динамического освещения, включая контровый свет, который будет мягко пульсировать.

Ты на верном пути к созданию собственной 3D-игры! 🚀

---

<div align="center">

Код становится чище, а возможности — шире. Учимся мыслить структурно!

---

[⬆ К началу урока 2](#-threejs-3d-game--урок-2)

</div>

</details>

![divider](https://github.com/Gabryelf/Atlas-Assets/raw/main/docs/animations/gifs-line/pulse-grey.gif)


![Версия](https://img.shields.io/badge/версия-0.0.3-brightgreen)
![js](https://img.shields.io/badge/javascript-yellow)
![css-3](https://img.shields.io/badge/3-D-blue)
![html-5](https://img.shields.io/badge/html-5-orange)


<details> <summary><strong>📁 Этап 3: Камера и управление </strong></summary>


<div align="center">

# 🎮 Three.js 3D Game — Урок 3

### Камера и Управление: Глазами игрока

[![Three.js](https://img.shields.io/badge/Three.js-r160-black?logo=three.js&logoColor=white)](https://threejs.org/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow?logo=javascript&logoColor=white)](https://www.javascript.com/)
[![OrbitControls](https://img.shields.io/badge/OrbitControls-3D%20Navigation-blueviolet)](https://threejs.org/docs/#examples/en/controls/OrbitControls)

<img src="https://github.com/Gabryelf/Volumetric-Graphics-Js/blob/main/docs/screens/screen-11.png" alt="OrbitControls Three.js" width="400"/>

*Камера — это глаза игрока. Научимся управлять взглядом.*

</div>

---

# 🌟 Об уроке

В прошлом уроке мы создали архитектуру проекта, `SceneManager` и звёздное небо. Но камера у нас была **временной заглушкой** — она просто висела в воздухе, и её нельзя было двигать.

Представь, что ты снимаешь кино. Можно поставить камеру на штатив... а можно взять в руки и двигать, приближать, рассматривать детали. OrbitControls — это твои "руки" в 3D-мире.

## 🎯 Что ты узнаешь

После завершения этого урока ты будешь понимать:

- ✅ 📷 **`CameraManager`** — создание класса для управления камерой.
- ✅ 🎮 **OrbitControls** — подключение и настройка интерактивного управления.
- ✅ 🎛 **Конфигурация камеры** — вынесение всех параметров в отдельный файл.
- ✅ 🔄 **Интеграция с игровым циклом** — подключение `CameraManager` к классу `Game`.
- ✅ 🖱 **Обработка ресайза окна** — корректное обновление пропорций камеры.

---

## 📁 Структура проекта (обновлённая)

После этого урока наша структура пополнится новыми файлами:

```
📦 your-project-folder/
 ┣ 📂 src/
 ┃ ┣ 📂 config/
 ┃ ┃ ┣ 📜 scene.js          # (из Урока 2)
 ┃ ┃ ┗ 📜 camera.js         # НОВЫЙ ФАЙЛ! Конфиг камеры
 ┃ ┣ 📂 core/
 ┃ ┃ ┣ 📜 SceneManager.js   # (из Урока 2)
 ┃ ┃ ┗ 📜 CameraManager.js  # НОВЫЙ ФАЙЛ! Управление камерой
 ┃ ┗ 📜 main.js             # ОБНОВЛЯЕТСЯ: убираем временную камеру
 ┣ 📜 index.html
 ┗ 📜 package.json
```

---

## 📝 Пошаговое объяснение кода

Мы будем двигаться от "кирпичиков" к "зданию": сначала создадим конфиг, затем класс-менеджер, и наконец подключим всё в `main.js`.

## 1. `config/camera.js` — Конфигурация камеры

Сначала вынесем **все** параметры камеры в конфиг. Это позволит нам менять угол обзора, позицию, чувствительность управления, не залезая в сложную логику `CameraManager`.

<div align="center">
  <img src="https://github.com/Gabryelf/Volumetric-Graphics-Js/blob/main/docs/screens/screen-7.png" alt="Файл конфигурации камеры" width="600"/>
  <br>
  <sub>Все настройки камеры и управления в одном месте</sub>
</div>

<details>
<summary><b>📄 Код файла <code>src/config/camera.js</code></b></summary>

```javascript
/**
 * КОНФИГ КАМЕРЫ
 * Все параметры камеры и управления вынесены в конфиг
 */

export const CAMERA_CONFIG = {
    // === ПАРАМЕТРЫ КАМЕРЫ (PerspectiveCamera) ===
    fov: 45,        // Field of View (угол обзора) в градусах
                    // 45° — угол как у глаза человека
                    // Меньше (20-30) — телескоп (зум)
                    // Больше (75-90) — широкий угол (рыбий глаз)
    
    // Соотношение сторон будет вычисляться динамически!
    // Мы будем передавать window.innerWidth / window.innerHeight
    
    near: 0.1,      // Ближняя плоскость отсечения
                    // Объекты ближе 0.1 юнитов к камере НЕ видны
                    // Нужно, чтобы камера не "залезала" внутрь объектов
    
    far: 1000,      // Дальняя плоскость отсечения
                    // Объекты дальше 1000 юнитов НЕ видны
                    // Экономит ресурсы — далеко не рисуем
    
    // === ПОЗИЦИЯ КАМЕРЫ В ПРОСТРАНСТВЕ ===
    position: {
        x: 5,       // Смещение вправо (положительное)
        y: 4,       // Высота (положительное = выше)
        z: 8        // Расстояние от центра (положительное = дальше)
    },
    
    // === ТОЧКА, НА КОТОРУЮ СМОТРИТ КАМЕРА ===
    target: {
        x: 0,       // Центр сцены по X
        y: 0,       // Центр сцены по Y
        z: 0        // Центр сцены по Z (начало координат)
    },
    
    // === НАСТРОЙКИ УПРАВЛЕНИЯ (OrbitControls) ===
    controls: {
        enableDamping: true,    // Плавность движения (инерция)
        dampingFactor: 0.05,    // Сила инерции (0 = нет инерции, 1 = очень много)
        autoRotate: false,      // Автоматическое вращение камеры (пока выключим)
        autoRotateSpeed: 1.0,   // Скорость автовращения (если включить)
        enableZoom: true,       // Разрешить приближение/отдаление
        enablePan: true,        // Разрешить панорамирование (движение камеры в стороны)
        zoomSpeed: 1.2,         // Скорость зума (чем выше, тем быстрее)
        rotateSpeed: 1.0        // Скорость вращения камеры
    }
};
```
</details>

<details>
<summary><b>🎨 Почему именно такие значения?</b></summary>

| Параметр | Значение | Почему |
|----------|----------|--------|
| **fov: 45** | 45° | Золотая середина. Не искажает объекты по краям, но даёт хороший обзор. |
| **near: 0.1, far: 1000** | 0.1 / 1000 | Оптимальный диапазон для сцены размером 10x10x10. Ничего не "отрезает". |
| **position: (5,4,8)** | Вдали и сверху | Классический "изометрический" угол. Хорошо виден куб и пространство вокруг. |
| **dampingFactor: 0.05** | 0.05 | Лёгкая инерция. Камера не останавливается мгновенно, а плавно "доезжает". |
| **zoomSpeed: 1.2** | 1.2 | Чуть выше стандартной (1.0) — зум отзывчивый, но не резкий. |

</details>

---

## 2. `core/CameraManager.js` — Управляющий камерой

Этот класс — "дирижёр" для камеры. Он создаёт камеру, настраивает OrbitControls и обновляет их в игровом цикле.

<div align="center">
  <img src="https://github.com/Gabryelf/Volumetric-Graphics-Js/blob/main/docs/screens/screen-8.png" alt="Код CameraManager" width="600"/>
  <br>
  <sub>Класс-менеджер камеры: создание, настройка и обновление</sub>
</div>

<details>
<summary><b>📄 Код файла <code>src/core/CameraManager.js</code></b></summary>

```javascript
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { CAMERA_CONFIG } from '../config/camera.js';

export class CameraManager {
    // Конструктор принимает DOM-элемент рендерера (canvas)
    // Он нужен OrbitControls, чтобы "слушать" события мыши на этом элементе
    constructor(rendererDomElement) {
        this.camera = null;          // Сама камера (PerspectiveCamera)
        this.controls = null;        // Орбит-контролы (управление)
        this.rendererDomElement = rendererDomElement; // Холст для событий
    }

    // Главный метод: создаёт и настраивает камеру
    create() {
        // 1. СОЗДАЁМ КАМЕРУ с параметрами из конфига
        this.camera = new THREE.PerspectiveCamera(
            CAMERA_CONFIG.fov,                           // угол обзора
            window.innerWidth / window.innerHeight,      // соотношение сторон
            CAMERA_CONFIG.near,                          // ближняя плоскость
            CAMERA_CONFIG.far                            // дальняя плоскость
        );

        // 2. УСТАНАВЛИВАЕМ ПОЗИЦИЮ КАМЕРЫ
        this.camera.position.set(
            CAMERA_CONFIG.position.x,
            CAMERA_CONFIG.position.y,
            CAMERA_CONFIG.position.z
        );

        // 3. НАПРАВЛЯЕМ КАМЕРУ В ЦЕНТР СЦЕНЫ
        this.camera.lookAt(
            CAMERA_CONFIG.target.x,
            CAMERA_CONFIG.target.y,
            CAMERA_CONFIG.target.z
        );
        
        // Возвращаем камеру на случай, если нужно сразу использовать
        return this.camera;
    }
   
    // Метод для создания и настройки OrbitControls
    createControls() {
        // Извлекаем настройки управления из конфига
        const {
            enableDamping, dampingFactor, autoRotate, autoRotateSpeed,
            enableZoom, enablePan, zoomSpeed, rotateSpeed
        } = CAMERA_CONFIG.controls;

        // Создаём контролы, привязывая их к камере и DOM-элементу
        this.controls = new OrbitControls(this.camera, this.rendererDomElement);

        // Применяем настройки
        this.controls.enableDamping = enableDamping;     // Плавность
        this.controls.dampingFactor = dampingFactor;     // Сила инерции
        this.controls.autoRotate = autoRotate;           // Автовращение
        this.controls.autoRotateSpeed = autoRotateSpeed; // Скорость автовращения
        this.controls.enableZoom = enableZoom;           // Разрешить зум
        this.controls.enablePan = enablePan;             // Разрешить панорамирование
        this.controls.zoomSpeed = zoomSpeed;             // Скорость зума
        this.controls.rotateSpeed = rotateSpeed;         // Скорость вращения

        // Устанавливаем точку, вокруг которой вращается камера
        // (по умолчанию OrbitControls вращается вокруг центра, но мы задаём явно)
        this.controls.target.set(
            CAMERA_CONFIG.target.x,
            CAMERA_CONFIG.target.y,
            CAMERA_CONFIG.target.z
        );

        return this.controls;
    }

    // Метод, вызываемый в игровом цикле (каждый кадр)
    update() {
        if (this.controls) {
            // ОБЯЗАТЕЛЬНО: обновляем контролы, если включена плавность (damping)
            // Иначе инерция не будет работать
            this.controls.update();
        }
    }

    // Обработчик изменения размера окна (вызывается из Game)
    onWindowResize() {
        // Обновляем соотношение сторон камеры
        this.camera.aspect = window.innerWidth / window.innerHeight;
        // Важно! Пересчитываем матрицу проекции
        this.camera.updateProjectionMatrix();
    }

    // Геттеры для получения камеры и контролов извне
    getCamera() {
        return this.camera;
    }

    getControls() {
        return this.controls;
    }
}
```
</details>

<details>
<summary><b>🧠 Разбор ключевых моментов CameraManager</b></summary>

*   **`constructor(rendererDomElement)`**: OrbitControls нужно на чём "слушать" события (движение мыши, колёсико). Мы передаём `renderer.domElement` — это HTML-элемент `<canvas>`, на котором Three.js рисует.
*   **`createControls()`**: Этот метод создаёт "пульт управления". Без него камера была бы статичной. С ним ты можешь вращать сцену, приближать, отдалять.
*   **`controls.update()`**: Это **критически важно**, если включена плавность (`enableDamping: true`). Без вызова `update()` в каждом кадре инерция не будет работать — камера будет дёрганой.
*   **`onWindowResize()`**: При изменении размера окна пропорции камеры нарушаются. Этот метод пересчитывает `aspect` (соотношение сторон) и обновляет матрицу проекции.

</details>

---

## 3. Обновление `main.js` — Подключаем CameraManager

Теперь самое интересное: **уберём временную камеру** и подключим наш новый `CameraManager`. Код станет чище и профессиональнее.

<div align="center">
  <img src="https://github.com/Gabryelf/Volumetric-Graphics-Js/blob/main/docs/screens/screen-9.png" alt="Обновлённый main.js с CameraManager" width="600"/>
  <br>
  <sub>Главный файл игры теперь использует CameraManager</sub>
</div>

<details>
<summary><b>📄 Обновлённый код <code>src/main.js</code> (только изменения)</b></summary>

**Что меняется:**
1. Импортируем `CameraManager`.
2. Добавляем свойство `this.cameraManager`.
3. В `init()` создаём `CameraManager` и вызываем его методы.
4. Убираем **всю** временную камеру и управление из `main.js`.
5. В `animate()` вызываем `this.cameraManager.update()`.
6. В `onWindowResize()` делегируем вызов менеджеру камеры.

```javascript
import * as THREE from 'three';
import { SceneManager } from './core/SceneManager.js';
import { CameraManager } from './core/CameraManager.js';      // НОВЫЙ ИМПОРТ
// LightManager появится в Уроке 4

class Game {
    constructor() {
        this.renderer = null;
        this.sceneManager = null;
        this.cameraManager = null;    // НОВОЕ СВОЙСТВО
        // this.lightManager = null;
        
        this.init();
    }

    init() {
        // 1. РЕНДЕРЕР (без изменений)
        this.renderer = new THREE.WebGLRenderer({ antialias: true });
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.shadowMap.enabled = true;
        this.renderer.setPixelRatio(window.devicePixelRatio);
        document.body.appendChild(this.renderer.domElement);

        // 2. СЦЕНА (без изменений)
        this.sceneManager = new SceneManager();
        const scene = this.sceneManager.create();

        // 3. КАМЕРА И УПРАВЛЕНИЕ (НОВЫЙ КОД!)
        //    Передаём DOM-элемент рендерера для OrbitControls
        this.cameraManager = new CameraManager(this.renderer.domElement);
        this.cameraManager.create();           // Создаём камеру
        this.cameraManager.createControls();   // Создаём управление
        
        // Получаем готовую камеру для рендеринга
        const camera = this.cameraManager.getCamera();

        // 4. ВРЕМЕННЫЙ СВЕТ (пока оставляем, в Уроке 4 заменим на LightManager)
        const ambientLight = new THREE.AmbientLight(0x404060);
        const dirLight = new THREE.DirectionalLight(0xffffff, 1);
        dirLight.position.set(5, 10, 7);
        scene.add(ambientLight);
        scene.add(dirLight);
        
        // 5. ТЕСТОВЫЙ КУБ (пока оставляем, чтобы убедиться, что всё работает)
        const testCubeGeometry = new THREE.BoxGeometry(1, 1, 1);
        const testCubeMaterial = new THREE.MeshStandardMaterial({ color: 0x44aa88, metalness: 0.6 });
        const testCube = new THREE.Mesh(testCubeGeometry, testCubeMaterial);
        testCube.castShadow = true;
        scene.add(testCube);
        this.testCube = testCube;

        // 6. ОБРАБОТЧИК РЕСАЙЗА (обновлён!)
        window.addEventListener('resize', () => this.onWindowResize());

        // 7. ЗАПУСК АНИМАЦИИ
        this.animate();
    }

    onWindowResize() {
        // Теперь вызываем метод менеджера камеры
        if (this.cameraManager) {
            this.cameraManager.onWindowResize();
        }
        // Рендерер тоже обновляем
        this.renderer.setSize(window.innerWidth, window.innerHeight);
    }

    animate() {
        requestAnimationFrame(() => this.animate());

        // Обновляем менеджеры
        this.sceneManager.update();
        
        // ВАЖНО! Обновляем контролы камеры (для плавности)
        if (this.cameraManager) {
            this.cameraManager.update();
        }
        
        // Вращаем тестовый куб
        if (this.testCube) {
            this.testCube.rotation.x += 0.005;
            this.testCube.rotation.y += 0.01;
        }
        
        // Рендерим сцену с камерой из CameraManager
        this.renderer.render(
            this.sceneManager.getScene(),
            this.cameraManager.getCamera()   // Получаем камеру из менеджера
        );
    }
}

// ЗАПУСК
const game = new Game();
```
</details>

<details>
<summary><b>🎬 Что изменилось в игровом цикле?</b></summary>

| Было (временная камера) | Стало (CameraManager) |
|--------------------------|----------------------|
| Камера создавалась прямо в `init()` | Камера создаётся через `this.cameraManager.create()` |
| Не было управления (нельзя вращать/зумить) | Добавлены OrbitControls через `this.cameraManager.createControls()` |
| Ресайз окна обрабатывался вручную | Вызываем `this.cameraManager.onWindowResize()` |
| В `animate()` нечего было обновлять | Вызываем `this.cameraManager.update()` для плавности |
| Рендер: `renderer.render(scene, this.camera)` | Рендер: `renderer.render(scene, this.cameraManager.getCamera())` |

</details>

---

## 🖱 Как пользоваться OrbitControls

После запуска ты почувствуешь разницу! Теперь 3D-мир **живой**.

| Действие | Результат |
|----------|-----------|
| **Левая кнопка мыши + движение** | Вращение камеры вокруг центра сцены |
| **Правая кнопка мыши + движение** | Панорамирование (движение камеры в стороны) |
| **Колёсико мыши** | Приближение/отдаление |
| **Колёсико + Ctrl** | Более медленный зум |

<div align="center">
  <img src="https://github.com/Gabryelf/Volumetric-Graphics-Js/blob/main/docs/screens/screen-10.png" alt="Демонстрация OrbitControls" width="600"/>
  <br>
  <sub><strong>Результат:</strong> Ты можешь вращать камеру, приближать куб и рассматривать звёзды со всех сторон!</sub>
</div>

---

## 🎉 Итоги Урока 3

Поздравляю! Камера перестала быть статичным "штативом" и стала полноценным инструментом исследования.

**Что мы сделали:**
1.  ✅ Создали **конфиг камеры** (`camera.js`) со всеми параметрами.
2.  ✅ Написали **класс `CameraManager`**, который управляет камерой и OrbitControls.
3.  ✅ **Интегрировали** `CameraManager` в главный класс `Game`, убрав временную камеру.
4.  ✅ Научились обрабатывать **ресайз окна** на уровне менеджера.
5.  ✅ Теперь мы можем **вращать, приближать и панорамировать** сцену.

**Что дальше?**
В **Уроке 4** мы создадим `LightManager` и `light.js`. Освещение — это 80% визуального качества. Мы добавим три источника света:
- **AmbientLight** — общий рассеянный свет.
- **DirectionalLight** — главный направленный свет (как солнце) с тенями.
- **RimLight (контровой свет)** — красивый свет сзади, который подчеркивает контуры объектов. И сделаем его **пульсирующим**!

Скоро твоя сцена засияет по-настоящему! ✨

---

<div align="center">

Камера — глаза игрока. Хороший обзор — половина успеха игры!

---

[⬆ К началу урока 3](#-threejs-3d-game--урок-3)

</div>


</details>


![divider](https://github.com/Gabryelf/Atlas-Assets/raw/main/docs/animations/gifs-line/pulse-grey.gif)


![Версия](https://img.shields.io/badge/версия-0.0.4-brightgreen)
![js](https://img.shields.io/badge/javascript-yellow)
![css-3](https://img.shields.io/badge/3-D-blue)
![html-5](https://img.shields.io/badge/html-5-orange)
![canvas](https://img.shields.io/badge/canvas-API-cyan)


<details> <summary><strong>📁 Этап 4: Освещение и вспомогательные инструменты </strong></summary>


<div align="center">

# 🎮 Three.js 3D Game — Урок 4

### Освещение и Отладка: Оживляем сцену светом

[![Three.js](https://img.shields.io/badge/Three.js-r160-black?logo=three.js&logoColor=white)](https://threejs.org/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow?logo=javascript&logoColor=white)](https://www.javascript.com/)
[![PBR](https://img.shields.io/badge/PBR-Lighting-orange)](https://en.wikipedia.org/wiki/Physically_based_rendering)

<img src="https://github.com/Gabryelf/Volumetric-Graphics-Js/blob/main/docs/screens/cube-rotate.gif" alt="Тени в Three.js" width="400"/>

*Свет создаёт настроение. Тени придают реализм. А инструменты отладки помогают видеть невидимое.*

</div>

---

# 🌟 Об уроке

До сих пор наша сцена выглядела... плоско. Даже с красивыми звёздами и вращающимся кубом чего-то не хватало. Чего? **Света и теней!**

В реальном мире мы видим объекты благодаря тому, как свет отражается от них. В 3D-графике то же самое — без правильного освещения даже самая сложная модель выглядит как плоская картинка.

Кроме того, мы добавим **вспомогательные инструменты** — оси координат и тестовый куб. Они не для игроков, а для нас, разработчиков, чтобы легче ориентироваться в пространстве.

## 🎯 Что ты узнаешь

После завершения этого урока ты будешь понимать:

- ✅ 💡 **`LightManager`** — класс для управления всеми источниками света.
- ✅ ☀️ **Три типа света**: Ambient (рассеянный), Directional (направленный), Rim (контровой).
- ✅ 🌑 **Тени** — как включить и настроить отбрасывание теней.
- ✅ ✨ **Динамическое освещение** — заставим контровой свет пульсировать.
- ✅ 🛠 **`Settings` (утилита)** — создание вспомогательных инструментов для отладки.
- ✅ 📐 **AxesHelper** — оси координат (X, Y, Z) для навигации.
- ✅ 🧪 **Тестовый куб** — базовый объект для проверки освещения.

---

## 📁 Структура проекта (обновлённая)

Добавляем `LightManager`, его конфиг и папку `utils` с `Settings.js`:

```
📦 your-project-folder/
 ┣ 📂 src/
 ┃ ┣ 📂 config/
 ┃ ┃ ┣ 📜 scene.js          # (из Урока 2)
 ┃ ┃ ┣ 📜 camera.js         # (из Урока 3)
 ┃ ┃ ┗ 📜 light.js          # НОВЫЙ ФАЙЛ! Конфиг освещения
 ┃ ┣ 📂 core/
 ┃ ┃ ┣ 📜 SceneManager.js   # (из Урока 2)
 ┃ ┃ ┣ 📜 CameraManager.js  # (из Урока 3)
 ┃ ┃ ┗ 📜 LightManager.js   # НОВЫЙ ФАЙЛ! Управление светом
 ┃ ┣ 📂 utils/              # НОВАЯ ПАПКА!
 ┃ ┃ ┗ 📜 Settings.js       # НОВЫЙ ФАЙЛ! Вспомогательные утилиты
 ┃ ┗ 📜 main.js             # ОБНОВЛЯЕТСЯ: добавляем LightManager и Settings
 ┣ 📜 index.html
 ┗ 📜 package.json
```

---

# ЧАСТЬ 1: ОСВЕЩЕНИЕ

## 1. `config/light.js` — Конфигурация освещения

Свет бывает разным. Мы создадим три источника, каждый со своей ролью.

<div align="center">
  <img src="https://github.com/Gabryelf/Volumetric-Graphics-Js/blob/main/docs/screens/screen-14.png" alt="Файл конфигурации освещения" width="600"/>
  <br>
  <sub>Три источника света = три слоя визуальной красоты</sub>
</div>

<details>
<summary><b>📄 Код файла <code>src/config/light.js</code></b></summary>

```javascript
/**
 * КОНФИГ ОСВЕЩЕНИЯ
 * Три типа света для создания объёмной картинки
 */

export const LIGHT_CONFIG = {
    // === ОСНОВНОЙ (НАПРАВЛЕННЫЙ) СВЕТ ===
    // Играет роль солнца. Даёт яркий свет и чёткие тени.
    main: {
        type: 'directional',           // Тип: направленный свет
        color: 0xffffff,               // Белый свет (нейтральный)
        intensity: 1.2,                // Интенсивность (1.0 = нормальная)
        position: {
            x: 5,                      // Светит справа
            y: 10,                     // Светит сверху
            z: 7                       // Светит спереди
        },
        castShadow: true,              // Включаем отбрасывание теней
        shadowMapSize: 1024            // Разрешение карты теней (чем выше, тем чётче)
    },

    // === РАССЕЯННЫЙ СВЕТ ===
    // Заполняет всё пространство. Без него тени были бы абсолютно чёрными.
    ambient: {
        color: 0x404060,               // Холодный, слегка фиолетовый оттенок
        intensity: 0.6                 // Мягкий, ненавязчивый
    },

    // === КОНТРОВОЙ СВЕТ ===
    // Светит сзади и сбоку. Подчёркивает контуры объектов, создаёт "объём".
    rim: {
        type: 'directional',           // Тоже направленный
        color: 0x6688aa,               // Голубоватый (холодный акцент)
        intensity: 0.8,                // Достаточно яркий, но не перебивает основной
        position: {
            x: -3,                     // Светит слева
            y: 2,                      // Немного сверху
            z: -4                      // Светит сзади!
        }
    }
};
```
</details>

<details>
<summary><b>💡 Роль каждого источника света</b></summary>

| Тип света | Аналог в реальности | Роль в сцене |
|-----------|---------------------|--------------|
| **DirectionalLight (main)** | Солнце в полдень | Даёт **объём** и **тени**. Определяет, откуда идёт основной свет. |
| **AmbientLight** | Свет, отражённый от стен и облаков | Заполняет **чёрные зоны**, делает тени мягкими. |
| **RimLight (rim)** | Контражур на закате | Создаёт **красивую окантовку** вокруг объекта, отделяя его от фона. |

**Визуализация расположения:**
```
        Сверху (Y+)
           ↑
    RIM ←  |  → MAIN
    (-3,2,-4)  (5,10,7)
           |
    AMBIENT — везде и всегда
```

</details>

---

## 2. `core/LightManager.js` — Управляющий светом

Этот класс создаёт все три источника света, добавляет их в сцену и обновляет динамические эффекты (пульсацию контрового света).

<div align="center">
  <img src="https://github.com/Gabryelf/Volumetric-Graphics-Js/blob/main/docs/screens/screen-15.png" alt="Код LightManager" width="600"/>
  <br>
  <sub>LightManager: создание и динамическое обновление освещения</sub>
</div>

<details>
<summary><b>📄 Код файла <code>src/core/LightManager.js</code></b></summary>

```javascript
import * as THREE from 'three';
import { LIGHT_CONFIG } from '../config/light.js';

export class LightManager {
    // Конструктор принимает сцену, куда будем добавлять свет
    constructor(scene) {
        this.scene = scene;
        this.lights = {};   // Объект для хранения всех источников света
    }

    // Главный метод: создаём все источники света
    createAll() {
        this._createAmbientLight();   // Рассеянный свет
        this._createMainLight();      // Основной направленный свет
        this._createRimLight();       // Контровой свет (для красоты)

        return this.lights;           // Возвращаем на всякий случай
    }

    // === РАССЕЯННЫЙ СВЕТ ===
    _createAmbientLight() {
        const config = LIGHT_CONFIG.ambient;
        const light = new THREE.AmbientLight(config.color, config.intensity);
        this.scene.add(light);
        this.lights.ambient = light;
    }

    // === ОСНОВНОЙ НАПРАВЛЕННЫЙ СВЕТ (С ТЕНЯМИ!) ===
    _createMainLight() {
        const config = LIGHT_CONFIG.main;
        const light = new THREE.DirectionalLight(config.color, config.intensity);
        
        // Устанавливаем позицию
        light.position.set(config.position.x, config.position.y, config.position.z);

        // Настройка теней
        if (config.castShadow) {
            light.castShadow = true;                           // Разрешить тени
            light.shadow.mapSize.width = config.shadowMapSize; // Качество по ширине
            light.shadow.mapSize.height = config.shadowMapSize;// Качество по высоте
            
            // Опционально: настройка области отображения теней
            // (чем меньше область, тем чётче тени)
            light.shadow.camera.near = 0.5;
            light.shadow.camera.far = 20;
            light.shadow.camera.left = -10;
            light.shadow.camera.right = 10;
            light.shadow.camera.top = 10;
            light.shadow.camera.bottom = -10;
        }

        this.scene.add(light);
        this.lights.main = light;
    }

    // === КОНТРОВОЙ СВЕТ (С ПУЛЬСАЦИЕЙ) ===
    _createRimLight() {
        const config = LIGHT_CONFIG.rim;
        const light = new THREE.DirectionalLight(config.color, config.intensity);
        light.position.set(config.position.x, config.position.y, config.position.z);
        
        this.scene.add(light);
        this.lights.rim = light;
    }

    // Метод, вызываемый в игровом цикле (каждый кадр)
    update() {
        // Эффект "пульсации" контрового света
        if (this.lights.rim) {
            // Случайное изменение интенсивности от -0.15 до +0.15
            const random = Math.random() * 0.3 - 0.15;
            const baseIntensity = LIGHT_CONFIG.rim.intensity;
            // Интенсивность не опускается ниже 0.2 (чтобы свет не выключался полностью)
            this.lights.rim.intensity = Math.max(0.2, baseIntensity + random);
        }
    }

    // Геттер для получения конкретного источника света по имени
    getLight(name) {
        return this.lights[name];
    }
}
```
</details>

<details>
<summary><b>🧠 Разбор ключевых концепций LightManager</b></summary>

**1. Почему три света, а не один?**
- Один свет делает сцену **плоской** — одни стороны яркие, другие в тени, без переходов.
- Три света создают **глубину**: основной свет формирует объём, рассеянный смягчает контраст, контровой подчёркивает края.

**2. Что такое `shadowMapSize: 1024`?**
- Тени в Three.js — это "карты теней" (shadow maps), специальные текстуры.
- Размер 1024x1024 пикселя — хорошее качество без потери производительности.
- 512 — чуть размытые тени, 2048 — очень чёткие, но тяжелее.

**3. Как работает пульсация контрового света?**
```javascript
const random = Math.random() * 0.3 - 0.15;  // Диапазон: [-0.15, +0.15]
const newIntensity = baseIntensity + random;
this.lights.rim.intensity = Math.max(0.2, newIntensity);
```
В каждом кадре интенсивность случайно меняется. Это создаёт эффект "дышащего" света — будто светится плазма или энергетическое поле.

</details>

---

# ЧАСТЬ 2: ВСПОМОГАТЕЛЬНЫЕ УТИЛИТЫ

## 3. `utils/Settings.js` — Инструменты отладки

Разработчику нужно видеть то, что не видит игрок: оси координат, границы объектов, направление света. Класс `Settings` поможет нам в этом.

<div align="center">
  <img src="https://github.com/Gabryelf/Volumetric-Graphics-Js/blob/main/docs/screens/screen-16.png" alt="Код Settings.js" width="600"/>
  <br>
  <sub>Утилиты для отладки: AxesHelper и тестовый куб</sub>
</div>

<details>
<summary><b>📄 Код файла <code>src/utils/Settings.js</code></b></summary>

```javascript
import * as THREE from 'three';

export class Settings {
    // Конструктор принимает сцену, куда будем добавлять вспомогательные объекты
    constructor(scene) {
        this.scene = scene;
    }

    // Создаём все вспомогательные элементы
    createAllSettings() {
        this._createAxesHelper();   // Оси координат
        this._createBaseCube();      // Тестовый куб (базовый материал!)
    }

    // === ОСИ КООРДИНАТ ===
    // AxesHelper показывает направления X, Y, Z
    // Красный = X, Зелёный = Y, Синий = Z
    _createAxesHelper() {
        const axesHelper = new THREE.AxesHelper(5);  // Длина осей = 5 юнитов
        this.scene.add(axesHelper);
    }

    // === ТЕСТОВЫЙ КУБ ===
    // Важно: используется MeshBasicMaterial — он НЕ реагирует на свет!
    // Этот куб всегда будет ярким, даже если в сцене нет освещения.
    // Идеально для проверки, правильно ли работает свет на других объектах.
    _createBaseCube() {
        const geometry = new THREE.BoxGeometry(5, 5, 5);
        // MeshBasicMaterial — не требует освещения, виден всегда
        const material = new THREE.MeshBasicMaterial({ color: 0xE0644C });
        const cube = new THREE.Mesh(geometry, material);
        this.scene.add(cube);
    }
}
```
</details>

<details>
<summary><b>🛠 Зачем нужны эти утилиты?</b></summary>

| Инструмент | Как выглядит | Зачем нужен |
|------------|--------------|-------------|
| **AxesHelper** | Три цветные линии | Помогает понять, где находится **центр сцены** и куда направлены оси. Красный = вправо (X), Зелёный = вверх (Y), Синий = на зрителя (Z). |
| **BaseCube (BasicMaterial)** | Яркий оранжевый куб | Проверяет, **отображаются ли объекты вообще**. Этот куб всегда виден, даже если свет выключен или настроен неправильно. |

**Типичный сценарий использования:**
1. Ты добавил сложное освещение, но сцена тёмная.
2. Включаешь `BaseCube` — он яркий? Значит, проблема в свете.
3. Выключаешь `BaseCube` — включаешь `AxesHelper` — видишь оси? Значит, камера смотрит не туда или объекты не добавлены.

</details>

---

## 4. Обновление `main.js` — Финальная сборка

Теперь соберём всё вместе: `LightManager` и `Settings` интегрируются в главный класс `Game`. Временные свет и куб уходят — их место заняли профессиональные менеджеры.

<div align="center">
  <img src="https://github.com/Gabryelf/Volumetric-Graphics-Js/blob/main/docs/screens/screen-12.png" alt="Финальный main.js" width="600"/>
  <br>
  <sub>Используем тусклое освещение</sub>
</div>

<div align="center">
  <img src="https://github.com/Gabryelf/Volumetric-Graphics-Js/blob/main/docs/screens/screen-13.png" alt="Финальный main.js" width="600"/>
  <br>
  <sub>Используем яркое освещение</sub>
</div>

<details>
<summary><b>📄 Итоговый код <code>src/main.js</code></b></summary>

```javascript
import * as THREE from 'three';
import { SceneManager } from './core/SceneManager.js';
import { CameraManager } from './core/CameraManager.js';
import { LightManager } from './core/LightManager.js';
import { Settings } from './utils/Settings.js';

class Game {
    constructor() {
        this.renderer = null;
        this.sceneManager = null;
        this.cameraManager = null;
        this.lightManager = null;
        this.settings = null;        // НОВОЕ: утилиты отладки

        this.init();
    }

    init() {
        // 1. РЕНДЕРЕР
        this.renderer = new THREE.WebGLRenderer({ antialias: true });
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.shadowMap.enabled = true;   // Включаем поддержку теней
        this.renderer.setPixelRatio(window.devicePixelRatio);
        document.body.appendChild(this.renderer.domElement);

        // 2. СЦЕНА (звёзды + туман)
        this.sceneManager = new SceneManager();
        const scene = this.sceneManager.create();

        // 3. КАМЕРА И УПРАВЛЕНИЕ
        this.cameraManager = new CameraManager(this.renderer.domElement);
        this.cameraManager.create();
        this.cameraManager.createControls();

        // 4. ОСВЕЩЕНИЕ (НОВОЕ!)
        this.lightManager = new LightManager(scene);
        this.lightManager.createAll();

        // 5. УТИЛИТЫ ОТЛАДКИ (НОВОЕ!)
        this.settings = new Settings(scene);
        this.settings.createAllSettings();

        // 6. ТЕСТОВЫЙ ОБЪЕКТ ДЛЯ ПРОВЕРКИ ОСВЕЩЕНИЯ
        //    Создаём красивый металлический тор, чтобы оценить свет и тени
        const torusGeometry = new THREE.TorusGeometry(1.5, 0.4, 32, 100);
        const torusMaterial = new THREE.MeshStandardMaterial({ 
            color: 0x44aa88, 
            metalness: 0.7,    // Металлический блеск
            roughness: 0.3,    // Немного шероховатый
            emissive: 0x112233 // Слабое свечение
        });
        const torus = new THREE.Mesh(torusGeometry, torusMaterial);
        torus.castShadow = true;
        torus.receiveShadow = false;
        torus.position.y = 1;
        scene.add(torus);
        this.testObject = torus;

        // 7. ОБРАБОТЧИК РЕСАЙЗА
        window.addEventListener('resize', () => this.onWindowResize());

        // 8. ЗАПУСК АНИМАЦИИ
        this.animate();
    }

    onWindowResize() {
        if (this.cameraManager) {
            this.cameraManager.onWindowResize();
        }
        this.renderer.setSize(window.innerWidth, window.innerHeight);
    }

    animate() {
        requestAnimationFrame(() => this.animate());

        // Обновляем все менеджеры
        this.sceneManager.update();      // Звёзды мерцают
        this.cameraManager.update();     // Плавность камеры
        this.lightManager.update();      // Контровой свет пульсирует

        // Анимация тестового объекта (вращение)
        if (this.testObject) {
            this.testObject.rotation.x += 0.008;
            this.testObject.rotation.y += 0.012;
            this.testObject.rotation.z += 0.005;
        }

        // Рендерим сцену
        this.renderer.render(
            this.sceneManager.getScene(),
            this.cameraManager.getCamera()
        );
    }
}

// ЗАПУСК ИГРЫ
const game = new Game();
```
</details>

<details>
<summary><b>🎬 Что изменилось в финальной версии?</b></summary>

| Компонент | Временная версия (Урок 2-3) | Финальная версия (Урок 4) |
|-----------|----------------------------|---------------------------|
| **Освещение** | Ambient + Directional прямо в `main.js` | `LightManager` с тремя источниками + пульсация |
| **Тестовый куб** | Обычный куб с `MeshStandardMaterial` | Тор (бублик) с металлическими свойствами — красивее и нагляднее |
| **Отладка** | Отсутствовала | `Settings` — оси координат и контрольный куб |
| **Тени** | Не были настроены | Включены и настроены у основного света |
| **Динамика** | Только вращение куба | + пульсация контрового света + мерцание звёзд |

</details>

---

## 🎨 Итоговый результат

**Что ты видишь на экране:**
1. ✨ **Мерцающие звёзды** — фон создаёт ощущение глубины космоса.
2. 🟠 **Оси координат** (красная, зелёная, синяя линии) — помогают ориентироваться.
3. 🟤 **Оранжевый куб** (`MeshBasicMaterial`) — всегда яркий, проверяет работу рендера.
4. 🌀 **Красивый металлический тор** — вращается, отбрасывает тени, реагирует на свет.
5. 💡 **Динамическое освещение** — контровой свет мягко пульсирует, меняя интенсивность.

**Попробуй:**
- Покрути сцену мышкой → увидишь, как меняются тени.
- Приблизь тор → рассмотри, как свет отражается от металлической поверхности.
- Обрати внимание на пульсацию — задний свет меняет яркость каждую секунду.

---

## 🎉 Итоги Урока 4

Поздравляю! Мы завершили фундаментальную архитектуру игры. Теперь проект не просто "что-то работает" — это **профессиональная, расширяемая система**.

**Что мы сделали:**
1.  ✅ Создали **`LightManager`** с тремя источниками света: рассеянным, основным и контровым.
2.  ✅ Настроили **тени** — объекты теперь отбрасывают их и выглядят объёмно.
3.  ✅ Добавили **динамический эффект** — контровой свет пульсирует, оживляя сцену.
4.  ✅ Создали папку **`utils/`** и класс **`Settings`** с осями координат и тестовым кубом.
5.  ✅ **Обновили `main.js`** — теперь все менеджеры работают вместе, а временные заглушки ушли.
6.  ✅ Заменили скучный куб на **красивый металлический тор** — оценить свет и тени стало нагляднее.

---

## 🚀 Что дальше?

База готова! Теперь мы можем двигаться в любом направлении:

- **Добавить модели** — загрузить 3D-модели кораблей, персонажей (форматы glTF, OBJ).
- **Создать анимации** — прыжки, вращение, полёт объектов.
- **Добавить физику** — столкновения, гравитация (библиотека Cannon.es или Ammo.js).
- **Сделать мультиплеер** — WebSockets + сервер на Node.js.
- **Улучшить графику** — пост-эффекты, bloom, шейдеры.

Но это уже темы для следующих больших разделов!

---

<div align="center">

Свет — это душа 3D-сцены. Теперь можно создать множество источников света для лучшего визуального опыта ✨

---

[⬆ К началу урока 4](#-threejs-3d-game--урок-4)

</div>


</details>

![divider](https://github.com/Gabryelf/Atlas-Assets/raw/main/docs/animations/gifs-line/pulse-grey.gif)


![Версия](https://img.shields.io/badge/версия-0.0.5-brightgreen)
![js](https://img.shields.io/badge/javascript-yellow)
![3D](https://img.shields.io/badge/3D-Models-blue)
![glTF](https://img.shields.io/badge/glTF-Loader-purple)

<details> <summary><strong>📁 Этап 5: Модели и примитивы — полный контроль над 3D-объектами</strong></summary>

<div align="center">

# 🎮 Three.js 3D Game — Урок 5

### Модели и Примитивы: Загружаем сложные объекты и создаём простые

[![Three.js](https://img.shields.io/badge/Three.js-r160-black?logo=three.js&logoColor=white)](https://threejs.org/)
[![GLTF](https://img.shields.io/badge/GLTF-2.0-green?logo=gltf&logoColor=white)](https://www.khronos.org/gltf/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow?logo=javascript&logoColor=white)](https://www.javascript.com/)

<img src="https://threejs.org/examples/screenshots/webgl_loader_gltf.jpg" alt="GLTF модель в Three.js" width="400"/>

*От простых кубов до сложных 3D-моделей — полный контроль над объектами в твоей сцене*

</div>

---

# 🌟 Об уроке

В прошлых уроках мы создали красивую сцену с освещением, камерой и звёздами. Но один тор — это слишком мало для настоящей игры! Пришло время наполнить мир разнообразными объектами.

В этом уроке мы научимся:
- **Создавать различные примитивы** (кубы, сферы, цилиндры) с разными материалами
- **Загружать сложные 3D-модели** в формате glTF
- **Управлять коллекцией моделей** через удобный ModelLoader
- **Организовывать код** по принципу разделения ответственности

## 🎯 Что ты узнаешь

После завершения этого урока ты будешь понимать:

- ✅ 📦 **`Settings.js` (расширенный)** — создание разнообразных примитивов с разными материалами.
- ✅ 🚀 **`ModelLoader.js`** — класс для асинхронной загрузки glTF-моделей.
- ✅ 📋 **`MODELS_CONFIG`** — конфигурация моделей (URL, масштаб, цвет).
- ✅ 🔄 **Управление моделями** — загрузка, отображение и переключение между моделями.
- ✅ ⚡ **Асинхронное программирование** — работа с Promise и async/await.
- ✅ 🎯 **Интеграция** — объединение примитивов и моделей в одной сцене.

---

## 📁 Структура проекта (обновлённая)

Добавляем `ModelLoader.js`, `models.js` и расширяем `Settings.js`:

```
📦 your-project-folder/
 ┣ 📂 src/
 ┃ ┣ 📂 config/
 ┃ ┃ ┣ 📜 scene.js          # (из Урока 2)
 ┃ ┃ ┣ 📜 camera.js         # (из Урока 3)
 ┃ ┃ ┣ 📜 light.js          # (из Урока 4)
 ┃ ┃ ┗ 📜 models.js         # НОВЫЙ ФАЙЛ! Конфигурация моделей
 ┃ ┣ 📂 core/
 ┃ ┃ ┣ 📜 SceneManager.js   # (из Урока 2)
 ┃ ┃ ┣ 📜 CameraManager.js  # (из Урока 3)
 ┃ ┃ ┣ 📜 LightManager.js   # (из Урока 4)
 ┃ ┃ ┗ 📜 ModelLoader.js    # НОВЫЙ ФАЙЛ! Загрузчик моделей
 ┃ ┣ 📂 utils/
 ┃ ┃ ┗ 📜 Settings.js       # РАСШИРЯЕТСЯ! Больше примитивов
 ┃ ┗ 📜 main.js             # ОБНОВЛЯЕТСЯ: интегрируем ModelLoader
 ┣ 📜 index.html
 ┗ 📜 package.json
```

---

# ЧАСТЬ 1: РАСШИРЯЕМ SETTINGS.JS — МИР ПРИМИТИВОВ

Начнём с создания разнообразных базовых фигур. Они помогут нам оценить освещение и заполнить сцену.

## 1. Расширенный `utils/Settings.js`

Теперь наш `Settings` будет создавать не только оси и тестовый куб, но и целую коллекцию примитивов с разными материалами.

<div align="center">
  <img src="https://github.com/Gabryelf/Volumetric-Graphics-Js/blob/main/docs/screens/screen-17.png" alt="Расширенный Settings.js" width="600"/>
  <br>
  <sub>Теперь Settings создаёт целую коллекцию примитивов</sub>
</div>

<details>
<summary><b>📄 Код файла <code>src/utils/Settings.js</code> (расширенная версия)</b></summary>

```javascript
import * as THREE from 'three';

export class Settings {
    constructor(scene) {
        this.scene = scene;
        this.grid = null;           // Сохраняем ссылку на сетку (пригодится)
    }

    // Главный метод — создаём всё, что нужно для настройки
    createAllSettings() {
        this._createMoreHelpers();   // Вспомогательные объекты
        this._createMoreMesh();      // Примитивы для демонстрации
    }

    // === ВСПОМОГАТЕЛЬНЫЕ ОБЪЕКТЫ ===
    _createMoreHelpers() {
        // this._createAxesHelper();     // Оси координат (закомментировано, чтобы не мешали)
        this._createGridHelper();       // Сетка с прозрачностью
        this._createFloorPlane();       // Прозрачный пол для теней
        // this._createPlaneHelper();    // Вспомогательная плоскость (опционально)
    }

    // === ПРИМИТИВЫ ДЛЯ ДЕМОНСТРАЦИИ ===
    _createMoreMesh() {
        this._createBaseCube();      // Базовый куб (BasicMaterial — всегда виден)
        this._createBaseSphere();    // Сфера с металлическим материалом
        this._createCustomFigure();  // Пользовательская фигура (ровный квадрат)
    }

    // --- ОСИ КООРДИНАТ (опционально) ---
    _createAxesHelper() {
        const axesHelper = new THREE.AxesHelper(5);
        this.scene.add(axesHelper);
    }

    // --- БАЗОВЫЙ КУБ (всегда виден, не зависит от света) ---
    _createBaseCube() {
        const geometry = new THREE.BoxGeometry(5, 5, 5);
        const material = new THREE.MeshBasicMaterial({ color: 0xE0644C });
        const cube = new THREE.Mesh(geometry, material);
        this.scene.add(cube);
    }

    // --- СФЕРА С МЕТАЛЛИЧЕСКИМ МАТЕРИАЛОМ ---
    _createBaseSphere() {
        const geometry = new THREE.SphereGeometry(2, 32, 32);  // 32 сегмента для гладкости
        const material = new THREE.MeshStandardMaterial({
            color: 0x7B68EE,        // Фиолетовый (пурпурный)
            roughness: 0.3,         // Гладкая поверхность
            metalness: 0.8,         // Высокая металличность
            transparent: true,      // Прозрачная
            opacity: 0.9
        });
        const sphere = new THREE.Mesh(geometry, material);
        sphere.position.x = 8;       // Смещаем вправо
        sphere.castShadow = true;
        sphere.receiveShadow = false;
        this.scene.add(sphere);
    }

    // --- ПОЛЬЗОВАТЕЛЬСКАЯ ФИГУРА (два треугольника, образующих квадрат) ---
    _createCustomFigure() {
        const geometry = new THREE.BufferGeometry();
        
        // Вершины для двух треугольников, образующих квадрат
        const vertices = new Float32Array([
            -1.0, -1.0,  1.0,  // v0 - левый нижний
             1.0, -1.0,  1.0,  // v1 - правый нижний
             1.0,  1.0,  1.0,  // v2 - правый верхний
             1.0,  1.0,  1.0,  // v3 - правый верхний (дубль для второго треугольника)
            -1.0,  1.0,  1.0,  // v4 - левый верхний
            -1.0, -1.0,  1.0   // v5 - левый нижний (дубль)
        ]);
        
        geometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
        
        const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
        const mesh = new THREE.Mesh(geometry, material);
        mesh.material.side = THREE.DoubleSide;  // Видимо с обеих сторон
        
        // Добавляем к сетке (которая создана в _createGridHelper)
        if (this.grid) {
            this.grid.add(mesh);
        } else {
            this.scene.add(mesh);
        }
    }

    // --- СЕТКА (GridHelper) с прозрачностью и смещением вниз ---
    _createGridHelper() {
        const size = 10;
        const divisions = 10;
        const gridHelper = new THREE.GridHelper(size, divisions);
        gridHelper.position.y = -3;              // Опускаем ниже
        gridHelper.material.transparent = true;
        gridHelper.material.opacity = 0.5;
        this.scene.add(gridHelper);
        this.grid = gridHelper;                  // Сохраняем для пользовательской фигуры
    }

    // --- ВСПОМОГАТЕЛЬНАЯ ПЛОСКОСТЬ (опционально) ---
    _createPlaneHelper() {
        const plane = new THREE.Plane(new THREE.Vector3(1, 1, 1), 9);
        const helper = new THREE.PlaneHelper(plane, 8, 0xffff00);
        this.scene.add(helper);
    }

    // --- ПРОЗРАЧНЫЙ ПОЛ ДЛЯ ТЕНЕЙ ---
    _createFloorPlane() {
        const floorPlane = new THREE.Mesh(
            new THREE.PlaneGeometry(12, 12),
            new THREE.MeshStandardMaterial({
                color: 0x112233,
                roughness: 0.8,
                metalness: 0.2,
                transparent: true,
                opacity: 0.3,
                side: THREE.DoubleSide
            })
        );
        floorPlane.rotation.x = -Math.PI / 2;   // Поворачиваем горизонтально
        floorPlane.position.y = -2.9;            // Чуть выше сетки
        floorPlane.receiveShadow = true;         // Получает тени!
        this.scene.add(floorPlane);
    }
}
```
</details>

<details>
<summary><b>🎨 Что нового в Settings.js?</b></summary>

| Метод | Что создаёт | Особенности |
|-------|-------------|-------------|
| **`_createGridHelper()`** | Сетка 10x10 | Прозрачная, опущена вниз (y = -3) |
| **`_createFloorPlane()`** | Пол для теней | Прозрачный, принимает тени |
| **`_createBaseSphere()`** | Металлическая сфера | 32 сегмента, металличность 0.8 |
| **`_createCustomFigure()`** | Квадрат из двух треугольников | Демонстрирует BufferGeometry |
| **`_createBaseCube()`** | Оранжевый куб | BasicMaterial — не зависит от света |

**Важная деталь:** 
- `_createCustomFigure()` добавляет квадрат К сетке, а не к сцене. Это демонстрирует, как можно группировать объекты.
- Закомментированный `_createAxesHelper()` можно раскомментировать при необходимости отладки.

</details>

---

# ЧАСТЬ 2: ЗАГРУЗЧИК МОДЕЛЕЙ

Теперь самое интересное — загрузка сложных 3D-моделей! Мы создадим класс `ModelLoader`, который умеет:
- Асинхронно загружать модели в формате glTF
- Отслеживать прогресс загрузки
- Управлять коллекцией моделей
- Переключаться между ними

## 2. Конфигурация моделей `config/models.js`

Сначала определим, какие модели мы будем загружать.

<details>
<summary><b>📄 Код файла <code>src/config/models.js</code></b></summary>

```javascript
/**
 * КОНФИГ МОДЕЛЕЙ
 * Список всех 3D-моделей, которые можно загрузить
 */

export const MODELS_CONFIG = {
    // Список доступных моделей
    models: [
        {
            id: 'assault_ship',
            name: 'Штурмовой корабль',
            url: 'https://raw.githubusercontent.com/Gabryelf/Atlas-Assets/main/docs/models/ships/scout.glb',
            scale: 1.0,
            color: 0xff4444,
            rotationSpeed: 0.005
        },
        {
            id: 'scout_ship',
            name: 'Разведчик',
            url: 'https://threejs.org/examples/models/gltf/Horse.glb',  // Запасная модель
            scale: 0.5,
            color: 0x44ff44,
            rotationSpeed: 0.008
        }
        // Можно добавлять новые модели сюда!
    ],
    
    // Настройки загрузки по умолчанию
    loading: {
        showProgress: true,      // Показывать прогресс в консоли
        defaultScale: 1.0,       // Масштаб по умолчанию
        timeout: 30000           // Таймаут загрузки (30 секунд)
    }
};
```
</details>

---

## 3. Класс `core/ModelLoader.js`

Это сердце нашей системы загрузки моделей. Он умеет:
- Загружать одну модель по URL
- Управлять списком моделей
- Переключаться между ними
- Обрабатывать ошибки

<div align="center">
  <img src="https://github.com/Gabryelf/Volumetric-Graphics-Js/blob/main/docs/screens/screen-18.png" alt="ModelLoader.js" width="600"/>
  <br>
  <sub>ModelLoader — асинхронная загрузка и управление моделями</sub>
</div>

<details>
<summary><b>📄 Код файла <code>src/core/ModelLoader.js</code></b></summary>

```javascript
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

export class ModelLoader {
    constructor(scene) {
        this.scene = scene;
        this.loader = new GLTFLoader();
        
        // Хранилище загруженных моделей (по ID)
        this.loadedModels = new Map();
        
        // Текущая активная модель
        this.currentModel = null;
        this.currentModelId = null;
        
        // Статус загрузки
        this.isLoading = false;
    }

    /**
     * Загружает модель по URL
     * @param {string} url - URL модели (glTF/GLB)
     * @param {number} scale - Масштаб модели
     * @returns {Promise<THREE.Group>}
     */
    loadModel(url, scale = 1.0) {
        return new Promise((resolve, reject) => {
            this.isLoading = true;
            console.log(`🚀 Начинаем загрузку модели: ${url}`);
            
            this.loader.load(
                url,
                (gltf) => {
                    const model = gltf.scene;
                    model.scale.set(scale, scale, scale);
                    
                    // Настраиваем тени для всех мешей в модели
                    model.traverse((child) => {
                        if (child.isMesh) {
                            child.castShadow = true;
                            child.receiveShadow = true;
                        }
                    });
                    
                    this.isLoading = false;
                    console.log(`✅ Модель успешно загружена!`);
                    resolve(model);
                },
                (progress) => {
                    const percent = (progress.loaded / progress.total * 100).toFixed(2);
                    console.log(`⏳ Загрузка модели: ${percent}%`);
                },
                (error) => {
                    this.isLoading = false;
                    console.error('❌ Ошибка загрузки модели:', error);
                    reject(error);
                }
            );
        });
    }

    /**
     * Загружает модель по конфигурации
     * @param {Object} modelInfo - Информация о модели из конфига
     * @returns {Promise<THREE.Group>}
     */
    async loadModelFromConfig(modelInfo) {
        const model = await this.loadModel(modelInfo.url, modelInfo.scale);
        
        // Сохраняем метаданные модели
        model.userData = {
            id: modelInfo.id,
            name: modelInfo.name,
            color: modelInfo.color,
            rotationSpeed: modelInfo.rotationSpeed
        };
        
        // Сохраняем в Map для быстрого доступа
        this.loadedModels.set(modelInfo.id, model);
        
        return model;
    }

    /**
     * Показывает модель по ID (загружает, если ещё не загружена)
     * @param {string} modelId - ID модели из конфига
     * @param {Object} config - Конфиг со списком моделей
     */
    async showModel(modelId, modelsConfig) {
        // Находим информацию о модели
        const modelInfo = modelsConfig.models.find(m => m.id === modelId);
        if (!modelInfo) {
            console.error(`❌ Модель с ID "${modelId}" не найдена в конфиге`);
            return;
        }
        
        // Скрываем текущую модель
        this.hideCurrentModel();
        
        let model;
        
        // Проверяем, загружена ли уже модель
        if (this.loadedModels.has(modelId)) {
            console.log(`📦 Модель "${modelInfo.name}" уже загружена, достаём из кеша`);
            model = this.loadedModels.get(modelId);
        } else {
            console.log(`🔄 Загружаем модель "${modelInfo.name}"...`);
            model = await this.loadModelFromConfig(modelInfo);
        }
        
        // Настраиваем позицию модели
        model.position.x = -8;
        model.position.z = 8;
        model.position.y = 0;
        
        // Добавляем в сцену
        this.scene.add(model);
        this.currentModel = model;
        this.currentModelId = modelId;
        
        console.log(`✨ Модель "${modelInfo.name}" отображается на сцене`);
    }

    /**
     * Скрывает текущую модель (удаляет из сцены, но не из кеша)
     */
    hideCurrentModel() {
        if (this.currentModel) {
            this.scene.remove(this.currentModel);
            this.currentModel = null;
            this.currentModelId = null;
        }
    }

    /**
     * Обновление (вызывается каждый кадр)
     * Здесь можно добавить анимацию модели
     */
    update() {
        if (this.currentModel && this.currentModel.userData.rotationSpeed) {
            // Вращаем текущую модель
            this.currentModel.rotation.y += this.currentModel.userData.rotationSpeed;
        }
    }

    /**
     * Возвращает информацию о текущей модели
     */
    getCurrentModelInfo() {
        if (this.currentModelId && this.currentModel) {
            return {
                id: this.currentModelId,
                name: this.currentModel.userData.name,
                color: this.currentModel.userData.color
            };
        }
        return null;
    }
}
```
</details>

<details>
<summary><b>🧠 Разбор ключевых концепций ModelLoader</b></summary>

**1. Почему используется Promise?**
Загрузка модели — асинхронная операция. Модель может весить несколько мегабайт, и пока она грузится, игра не должна зависать. Promise позволяет "обещать", что модель будет доставлена позже.

**2. Что делает `model.traverse()`?**
```javascript
model.traverse((child) => {
    if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
    }
});
```
Модель — это иерархия объектов (группы, меши, кости). `traverse()` проходит по ВСЕМ дочерним элементам и включает тени для каждого меша.

**3. Зачем кешировать модели в `loadedModels`?**
Если модель уже загружена, при повторном показе мы не тратим время на повторную загрузку. Это экономит трафик и ускоряет переключение.

**4. Что такое `userData`?**
```javascript
model.userData = {
    id: modelInfo.id,
    name: modelInfo.name,
    rotationSpeed: modelInfo.rotationSpeed
};
```
`userData` — специальное поле в Three.js для хранения пользовательских данных. Мы сохраняем туда метаинформацию о модели.

</details>

---

# ЧАСТЬ 3: ИНТЕГРАЦИЯ — СОБИРАЕМ ВСЁ В MAIN.JS

Теперь объединим `Settings` и `ModelLoader` в главном классе `Game`.

<details>
<summary><b>📄 Итоговый код <code>src/main.js</code> (Урок 5)</b></summary>

```javascript
import * as THREE from 'three';
import { SceneManager } from './core/SceneManager.js';
import { CameraManager } from './core/CameraManager.js';
import { LightManager } from './core/LightManager.js';
import { ModelLoader } from './core/ModelLoader.js';
import { Settings } from './utils/Settings.js';
import { MODELS_CONFIG } from './config/models.js';

class Game {
    constructor() {
        this.renderer = null;
        this.sceneManager = null;
        this.cameraManager = null;
        this.lightManager = null;
        this.modelLoader = null;      // НОВОЕ!
        this.settings = null;
        
        // Флаг для загрузки модели (загрузим чуть позже, после настройки сцены)
        this.modelLoaded = false;

        this.init();
    }

    async init() {  // Добавляем async для await
        // 1. РЕНДЕРЕР
        this.renderer = new THREE.WebGLRenderer({ antialias: true });
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.shadowMap.enabled = true;
        this.renderer.setPixelRatio(window.devicePixelRatio);
        document.body.appendChild(this.renderer.domElement);

        // 2. СЦЕНА
        this.sceneManager = new SceneManager();
        const scene = this.sceneManager.create();

        // 3. КАМЕРА
        this.cameraManager = new CameraManager(this.renderer.domElement);
        this.cameraManager.create();
        this.cameraManager.createControls();

        // 4. ОСВЕЩЕНИЕ
        this.lightManager = new LightManager(scene);
        this.lightManager.createAll();

        // 5. УТИЛИТЫ ОТЛАДКИ (примитивы и помощники)
        this.settings = new Settings(scene);
        this.settings.createAllSettings();

        // 6. ЗАГРУЗЧИК МОДЕЛЕЙ (НОВОЕ!)
        this.modelLoader = new ModelLoader(scene);
        
        // Загружаем модель (асинхронно)
        try {
            // Показываем первую модель из конфига
            const firstModelId = MODELS_CONFIG.models[0].id;
            await this.modelLoader.showModel(firstModelId, MODELS_CONFIG);
            console.log('🎉 Модель загружена и отображается!');
        } catch (error) {
            console.error('Не удалось загрузить модель:', error);
        }

        // 7. ТЕСТОВЫЙ ОБЪЕКТ (дополнительный тор для красоты)
        this._addTestTorus(scene);

        // 8. ОБРАБОТЧИК РЕСАЙЗА
        window.addEventListener('resize', () => this.onWindowResize());

        // 9. ЗАПУСК АНИМАЦИИ
        this.animate();
    }

    _addTestTorus(scene) {
        const torusGeometry = new THREE.TorusGeometry(1.5, 0.4, 32, 100);
        const torusMaterial = new THREE.MeshStandardMaterial({ 
            color: 0x44aa88, 
            metalness: 0.7,
            roughness: 0.3,
            emissive: 0x112233
        });
        const torus = new THREE.Mesh(torusGeometry, torusMaterial);
        torus.castShadow = true;
        torus.position.set(5, 1, -3);
        scene.add(torus);
        this.testObject = torus;
    }

    onWindowResize() {
        if (this.cameraManager) {
            this.cameraManager.onWindowResize();
        }
        this.renderer.setSize(window.innerWidth, window.innerHeight);
    }

    animate() {
        requestAnimationFrame(() => this.animate());

        // Обновляем все менеджеры
        if (this.sceneManager) this.sceneManager.update();      // Звёзды мерцают
        if (this.cameraManager) this.cameraManager.update();    // Плавность камеры
        if (this.lightManager) this.lightManager.update();      // Свет пульсирует
        if (this.modelLoader) this.modelLoader.update();        // Модель вращается!

        // Анимация тестового тора
        if (this.testObject) {
            this.testObject.rotation.x += 0.008;
            this.testObject.rotation.y += 0.012;
        }

        // Рендерим сцену
        this.renderer.render(
            this.sceneManager.getScene(),
            this.cameraManager.getCamera()
        );
    }
}

// ЗАПУСК ИГРЫ
const game = new Game();
```
</details>

---

## 🎨 Финальный результат

После запуска ты увидишь:

<div align="center">
  <img src="https://github.com/Gabryelf/Volumetric-Graphics-Js/blob/main/docs/screens/screen-20.png" alt="Финальный результат Урока 5" width="600"/>
  <br>
  <sub><strong>Результат:</strong> Сцена с примитивами и загруженной 3D-моделью</sub>
</div>

**Что теперь есть на сцене:**

| Объект | Описание |
|--------|----------|
| 🌟 **Звёздное поле** | Мерцающие точки вдалеке |
| 🟠 **Оранжевый куб** | BasicMaterial (всегда виден) |
| 🟣 **Фиолетовая сфера** | Металлическая, с тенями |
| 🔴 **Красный квадрат** | Пользовательская фигура на сетке |
| 🌀 **Металлический тор** | Вращается, отбрасывает тени |
| 🚀 **3D-модель корабля** | Загружена из сети, вращается |
| 💡 **Динамический свет** | Пульсирует контровой свет |

---

## 🎉 Итоги Урока 5

Поздравляю! Мы проделали огромную работу и научились:

**1. Создавать разнообразные примитивы:**
- Расширили `Settings.js` — теперь он создаёт куб, сферу, пользовательскую фигуру, сетку и пол
- Использовали разные материалы: `MeshBasicMaterial` и `MeshStandardMaterial`
- Познакомились с `BufferGeometry` для создания собственных фигур

**2. Загружать сложные 3D-модели:**
- Создали `ModelLoader.js` с поддержкой асинхронной загрузки
- Настроили кеширование моделей для быстрого переключения
- Добавили автоматическую настройку теней для всех мешей модели

**3. Организовали код:**
- Конфиг моделей вынесен в отдельный файл
- ModelLoader отвечает только за модели
- Примитивы остались в Settings

**4. Интегрировали всё в игровой цикл:**
- Модель вращается с заданной скоростью
- Все менеджеры обновляются каждый кадр

---

## 🚀 Что дальше? Возможные улучшения:

1. **Добавить UI для переключения моделей** — кнопки "Предыдущая/Следующая модель"
2. **Создать анимацию загрузки** — спиннер, пока модель грузится
3. **Добавить звук** — гул двигателя при появлении корабля
4. **Настроить камеру, следящую за моделью** — эффект "преследования"
5. **Добавить несколько моделей одновременно** — целый флот!

---

<div align="center">

От простого куба до сложной 3D-модели — пройден важный этап. Твоя сцена готова к наполнению!

---

[⬆ К началу урока 5](#-threejs-3d-game--урок-5)

</div>

</details>

![divider](https://github.com/Gabryelf/Atlas-Assets/raw/main/docs/animations/gifs-line/pulse-grey.gif)






