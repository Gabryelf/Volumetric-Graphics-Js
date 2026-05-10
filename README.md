# Multi Lessons
## `Практические уроки по изучению javascript и работы с ним в рамках объемной графики`

## 🌟 JavaScript & Three.js

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



![Версия](https://img.shields.io/badge/версия-0.0.1-brightgreen)
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
  <img src="https://github.com/Gabryelf/Volumetric-Graphics-Js/blob/main/docs/screens/screen-3.png" alt="Файл конфигурации сцены" width="600"/>
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

![divider](https://github.com/Gabryelf/Atlas-Assets/raw/main/docs/animations/gifs-line/pulse-grey.gif)

