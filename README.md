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

### Формируем рабочую зону

[![Three.js](https://img.shields.io/badge/Three.js-r160-black?logo=three.js&logoColor=white)](https://threejs.org/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow?logo=javascript&logoColor=white)](https://www.javascript.com/)
[![HTML5](https://img.shields.io/badge/HTML5-Canvas-orange?logo=html5&logoColor=white)](https://developer.mozilla.org/ru/docs/Web/HTML)

<img src=" " alt="Three.js Cube" width="400"/>

*Проект - это каталог с модулями которые разделяются логически*

</div>

---

# 🌟 Об уроке

## 🎯 Что ты узнаешь

После завершения этого урока ты будешь понимать:

- ✅ Мы идем глубже и практикуем проектный Three.js
- ✅ Мы собираемся разделить скрипт написанный ранее на части
- ✅ Принципы работы в парадигме ООП
- ✅ Как работают материалы, освещение и камеры на основе классов
- ✅ Разбираем вспомогательные фичи Axis и Grid
- ✅ Как работает Three.js - принцип взаимодействия компонентов.

---

## 📁 Структура проекта

```
📦 threejs-first-steps/
 ┣ 📂 src/
 ┃ ┣ 📂 main.js          # основной скрипт запуска
 ┃ ┣ 📂 core/            # модуль важных классов
 ┃ ┣ 📂 config/          # конфигурации с константными значениями
 ┃ ┗ 📂 helpers/           # скрипты тесты и вспомогательные функции
 ┗ 📜 index.html           # Главный файл проекта
```

---

## 🚀 Установка и запуск

**Открой файл** в браузере:
   - Скачай и инициализируй node. (сделаем и так позже)
   - Или используй Live Server в VS Code (плагин для IDE)
   - Или запусти локальный сервер: `npx http-server` (рекомендация для старта)

---

![Static Badge](https://img.shields.io/badge/ШАГ-1-white)
![Static Badge](https://img.shields.io/badge/ВАЖНО-blueviolet)

> Мы будем в продолжении всех этапов строить
> большой проект, как того требует 3D игра с мультиплеером на собственном сервере.
> В таком случае, что бы нам было легче ориентироваться в коде и расширять уже
> существующую логику стоит подумать о рабочем пространстве. Мы начнем с самого малого
> и будем увеличивать проект по мере необходимости, но будем действовать профессионально.

---

> Нужно создать главную папку (root catalog) - она может иметь любое название.
> В ней создать (или скопировать в нее с прошлого урока) `index.html`. В корневом каталоге
> создать папку `src`. Затем создать две папки (все последующие имена лучше задавать как у меня
> для синхронизации и избегания частых ошибок с импортами) для модульной структуры - core, config

<div align="center">
  <img src="https://github.com/Gabryelf/Volumetric-Graphics-Js/blob/main/docs/screens/screen-2.png" alt="Результат" />
</div>

> После создавайте файлы как на скриншоте. В итоге должно получиться следующее - есть главная папка проекта - у меня это `THREE-JS`, в ней `index.html` и папка `src` на одном уровне, в папке `src` скрипт `main.js` и две папки `core` и `config`. В папке `core` три файла - `SceneManager.js`, `CameraManager.js` и `LightManager.js`. В папке `config` - `scene.js`, `camera.js` и `light.js`.



---



### Результат

<div align="center">
  <img src="https://github.com/Gabryelf/Volumetric-Graphics-Js/blob/main/docs/screens/screen-2.png" alt="Результат" />
</div>

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

[⬆ К началу](#-threejs-3d-game--урок-2)

</div>


</details>

![divider](https://github.com/Gabryelf/Atlas-Assets/raw/main/docs/animations/gifs-line/pulse-grey.gif)

