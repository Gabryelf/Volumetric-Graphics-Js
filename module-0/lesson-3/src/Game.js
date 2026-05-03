import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { PartCatalog } from './parts/PartCatalog.js';
import { Ship } from './core/Ship.js';
import { UIManager } from './ui/UIManager.js';
import { SCENE, CAMERA, LIGHTS } from './config/scene.js';
import { ShipValidator } from './validation/ShipValidator.js';

export class Game {
    constructor() {
        // Сцена
        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color(SCENE.background);
        this.scene.fog = new THREE.Fog(SCENE.fog.color, SCENE.fog.near, SCENE.fog.far);
        
        // Камера
        this.camera = new THREE.PerspectiveCamera(CAMERA.fov, window.innerWidth / window.innerHeight, CAMERA.near, CAMERA.far);
        this.camera.position.set(...CAMERA.start);
        this.camera.lookAt(...CAMERA.lookAt);
        
        // Рендерер
        this.renderer = new THREE.WebGLRenderer({ antialias: true });
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.shadowMap.enabled = true;
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        document.body.appendChild(this.renderer.domElement);
        
        // Орбита
        this.controls = new OrbitControls(this.camera, this.renderer.domElement);
        this.controls.enableDamping = true;
        this.controls.dampingFactor = 0.05;
        this.controls.autoRotate = false;
        this.controls.enableZoom = true;
        this.controls.enablePan = true;
        this.controls.target.set(...CAMERA.lookAt);
        
        // Свет
        this._setupLights();
        
        // Пол
        this._setupFloor();
        
        // Группа для корабля
        this.shipGroup = new THREE.Group();
        this.scene.add(this.shipGroup);
        
        // Каталог
        this.catalog = new PartCatalog();
        
        // Добавляем индикатор загрузки
        this._addLoadingIndicator();
        
        // UI
        this.ui = new UIManager(this);
        this.ui.setup();
        
        // Флаг для отслеживания загрузки
        this.isLoading = false;
        
        // Загружаем первый корабль
        this.loadShip('scout');
        
        // Ресайз
        window.addEventListener('resize', () => {
            this.camera.aspect = window.innerWidth / window.innerHeight;
            this.camera.updateProjectionMatrix();
            this.renderer.setSize(window.innerWidth, window.innerHeight);
        });
        
        // Запускаем анимацию
        this.animate();
    }
    
    _setupLights() {
        // Ambient light
        this.scene.add(new THREE.AmbientLight(LIGHTS.ambient.color, LIGHTS.ambient.intensity));
        
        // Key light (основной)
        this.keyLight = new THREE.DirectionalLight(LIGHTS.key.color, LIGHTS.key.intensity);
        this.keyLight.position.set(...LIGHTS.key.position);
        this.keyLight.castShadow = true;
        this.keyLight.receiveShadow = false;
        this.keyLight.shadow.mapSize.width = 1024;
        this.keyLight.shadow.mapSize.height = 1024;
        this.scene.add(this.keyLight);
        
        // Rim light (контровой)
        this.rimLight = new THREE.DirectionalLight(LIGHTS.rim.color, LIGHTS.rim.intensity);
        this.rimLight.position.set(...LIGHTS.rim.position);
        this.scene.add(this.rimLight);
        
        // Fill light (заполняющий снизу)
        const fillLight = new THREE.PointLight(0x4466aa, 0.3);
        fillLight.position.set(0, -2, 0);
        this.scene.add(fillLight);
        
        // Back light (подсветка сзади)
        const backLight = new THREE.PointLight(0xffaa66, 0.4);
        backLight.position.set(0, 1, -5);
        this.scene.add(backLight);
    }
    
    _setupFloor() {
        // Пол
        const floorGeometry = new THREE.PlaneGeometry(SCENE.grid.size, SCENE.grid.size);
        const floorMaterial = new THREE.MeshStandardMaterial({ 
            color: SCENE.floor.color, 
            roughness: SCENE.floor.roughness, 
            metalness: SCENE.floor.metalness,
            side: THREE.DoubleSide
        });
        const floor = new THREE.Mesh(floorGeometry, floorMaterial);
        floor.rotation.x = -Math.PI / 2;
        floor.position.y = -0.6;
        floor.receiveShadow = true;
        this.scene.add(floor);
        
        // Сетка
        const gridHelper = new THREE.GridHelper(SCENE.grid.size, SCENE.grid.divisions, SCENE.grid.colorCenter, SCENE.grid.colorGrid);
        gridHelper.position.y = -0.5;
        this.scene.add(gridHelper);
        
        // Добавляем звезды
        this._addStars();
    }
    
    _addStars() {
        const starsGeometry = new THREE.BufferGeometry();
        const starsCount = 1500;
        const starsPositions = new Float32Array(starsCount * 3);
        
        for (let i = 0; i < starsCount; i++) {
            starsPositions[i * 3] = (Math.random() - 0.5) * 2000;
            starsPositions[i * 3 + 1] = (Math.random() - 0.5) * 500;
            starsPositions[i * 3 + 2] = (Math.random() - 0.5) * 200 - 100;
        }
        
        starsGeometry.setAttribute('position', new THREE.BufferAttribute(starsPositions, 3));
        const starsMaterial = new THREE.PointsMaterial({ color: 0xffffff, size: 0.2 });
        const stars = new THREE.Points(starsGeometry, starsMaterial);
        this.scene.add(stars);
    }
    
    _addLoadingIndicator() {
        this.loadingIndicator = document.createElement('div');
        this.loadingIndicator.id = 'loading-indicator';
        this.loadingIndicator.style.cssText = `
            position: fixed;
            bottom: 20px;
            right: 20px;
            background: rgba(0, 0, 0, 0.85);
            color: #ffaa22;
            padding: 10px 16px;
            border-radius: 8px;
            font-size: 13px;
            font-family: 'Courier New', monospace;
            z-index: 1000;
            display: none;
            backdrop-filter: blur(5px);
            border: 1px solid rgba(255, 170, 34, 0.3);
            pointer-events: none;
        `;
        this.loadingIndicator.textContent = '📥 ЗАГРУЗКА...';
        document.body.appendChild(this.loadingIndicator);
        
        this.loadingProgress = document.createElement('div');
        this.loadingProgress.style.cssText = `
            position: fixed;
            bottom: 20px;
            right: 20px;
            width: 200px;
            height: 2px;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 2px;
            z-index: 1000;
            display: none;
            overflow: hidden;
        `;
        
        this.loadingProgressFill = document.createElement('div');
        this.loadingProgressFill.style.cssText = `
            width: 0%;
            height: 100%;
            background: #ffaa22;
            transition: width 0.3s;
        `;
        
        this.loadingProgress.appendChild(this.loadingProgressFill);
        document.body.appendChild(this.loadingProgress);
    }
    
    showLoading(show, progress = 0) {
        if (show) {
            this.loadingIndicator.style.display = 'block';
            this.loadingProgress.style.display = 'block';
            this.loadingProgressFill.style.width = `${progress}%`;
            this.loadingIndicator.textContent = `📥 ЗАГРУЗКА... ${Math.round(progress)}%`;
        } else {
            this.loadingIndicator.style.display = 'none';
            this.loadingProgress.style.display = 'none';
            this.loadingProgressFill.style.width = '0%';
        }
    }
    
    async loadShip(blueprintId) {
        if (this.isLoading) {
            console.log('⏳ Уже идет загрузка, подождите...');
            return;
        }
        
        this.isLoading = true;
        this.showLoading(true, 0);
        
        // Удаляем старый корабль
        while (this.shipGroup.children.length > 0) {
            const child = this.shipGroup.children[0];
            if (child.isMesh && child.geometry) {
                child.geometry.dispose();
            }
            if (child.material) {
                if (Array.isArray(child.material)) {
                    child.material.forEach(m => m.dispose());
                } else if (child.material) {
                    child.material.dispose();
                }
            }
            this.shipGroup.remove(child);
        }
        
        // Создаем новый корабль
        const newShip = new Ship(blueprintId, this.catalog, this.shipGroup);
        
        // Асинхронно инициализируем (загружаем детали)
        try {
            await newShip.init();
            this.ship = newShip;
            
            this.ui.updateStats();
            if (this._updateSlotButtons) {
                this._updateSlotButtons();
            }
            
            // Анимация появления
            this.shipGroup.scale.set(0, 0, 0);
            this._animateShipAppearance();
            
            console.log(`🚀 Загружен: ${this.ship.name}`);
            this._showNotification(`Корабль "${this.ship.name}" готов`, 'success');
        } catch (error) {
            console.error('Ошибка загрузки корабля:', error);
            this._showNotification('Ошибка загрузки корабля', 'error');
        } finally {
            this.showLoading(false);
            this.isLoading = false;
        }
    }
    
    _animateShipAppearance() {
        const startTime = Date.now();
        const duration = 800;
        
        const animate = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(1, elapsed / duration);
            const easeOutBack = 1 - Math.pow(1 - progress, 3);
            this.shipGroup.scale.set(easeOutBack, easeOutBack, easeOutBack);
            
            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };
        
        animate();
    }
    
    async onPartClick(partId) {
        if (!this.ship) {
            this._showNotification('Сначала загрузите корабль', 'error');
            return;
        }
        
        if (this.isLoading) {
            this._showNotification('Подождите, идет загрузка...', 'error');
            return;
        }
        
        const partConfig = this.catalog.getById(partId);
        if (!partConfig) return;
        
        // Ищем первый свободный слот нужной категории
        const emptySlots = this.ship.getEmptySlots();
        const slot = emptySlots.find(s => s.category === partConfig.category);
        
        if (!slot) {
            this._showNotification(`Нет свободных слотов для "${partConfig.category}"`, 'error');
            return;
        }
        
        this.showLoading(true, 0);
        this.isLoading = true;
        
        try {
            const part = this.catalog.createPart(partId);
            await part.loadVisual();
            
            if (this.ship.installPart(slot.id, part)) {
                this.ui.updateStats();
                if (this._updateSlotButtons) {
                    this._updateSlotButtons();
                }
                this._showNotification(`✅ ${part.name} установлен`, 'success');
            } else {
                this._showNotification(`❌ Не удалось установить ${part.name}`, 'error');
            }
        } catch (error) {
            console.error('Ошибка установки детали:', error);
            this._showNotification('Ошибка при установке детали', 'error');
        } finally {
            this.showLoading(false);
            this.isLoading = false;
        }
    }
    
    clearShip() {
        if (!this.ship) return;
        
        for (const slotId of Object.keys(this.ship.slots)) {
            this.ship.removePart(slotId);
        }
        this.ui.updateStats();
        if (this._updateSlotButtons) {
            this._updateSlotButtons();
        }
        this._showNotification('🧹 Корабль очищен', 'info');
    }
    
    async randomizeShip() {
        if (!this.ship || this.isLoading) return;
        
        this.showLoading(true, 0);
        this.isLoading = true;
        
        const slots = Object.entries(this.ship.slots);
        let processed = 0;
        
        try {
            for (const [slotId, slot] of slots) {
                this.ship.removePart(slotId);
                
                const items = this.catalog.getByCategory(slot.category);
                if (items.length > 0) {
                    const rand = items[Math.floor(Math.random() * items.length)];
                    const part = this.catalog.createPart(rand.id);
                    await part.loadVisual();
                    if (part) {
                        this.ship.installPart(slotId, part);
                    }
                }
                
                processed++;
                this.showLoading(true, (processed / slots.length) * 100);
            }
            
            this.ui.updateStats();
            if (this._updateSlotButtons) {
                this._updateSlotButtons();
            }
            
            this._showNotification('🎲 Случайная сборка готова', 'success');
        } catch (error) {
            console.error('Ошибка при случайной сборке:', error);
            this._showNotification('Ошибка при создании случайной сборки', 'error');
        } finally {
            this.showLoading(false);
            this.isLoading = false;
        }
    }
    
    _showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        const colors = {
            success: 'rgba(50, 255, 50, 0.9)',
            error: 'rgba(255, 50, 50, 0.9)',
            info: 'rgba(50, 50, 100, 0.9)'
        };
        
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            left: 50%;
            transform: translateX(-50%);
            background: ${colors[type] || colors.info};
            color: white;
            padding: 10px 20px;
            border-radius: 8px;
            font-size: 14px;
            z-index: 2000;
            animation: slideDown 0.3s ease-out;
            backdrop-filter: blur(5px);
            pointer-events: none;
            font-family: monospace;
        `;
        notification.textContent = message;
        
        const style = document.createElement('style');
        style.textContent = `
            @keyframes slideDown {
                from {
                    opacity: 0;
                    transform: translateX(-50%) translateY(-20px);
                }
                to {
                    opacity: 1;
                    transform: translateX(-50%) translateY(0);
                }
            }
        `;
        document.head.appendChild(style);
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.opacity = '0';
            notification.style.transition = 'opacity 0.3s';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
                style.remove();
            }, 300);
        }, 2000);
    }
    
    animate() {
        requestAnimationFrame(() => this.animate());
        this.controls.update();
        
        if (this.shipGroup && !this.controls.autoRotate) {
            this.shipGroup.rotation.y += 0.002;
        }
        
        if (this.rimLight) {
            const time = Date.now() * 0.002;
            this.rimLight.intensity = LIGHTS.rim.intensity + Math.sin(time * 2) * 0.1;
        }
        
        this.renderer.render(this.scene, this.camera);
        this._updateReadyIndicator();
    }
    
    _updateReadyIndicator() {
        const el = document.getElementById('ready-status');
        if (!el || !this.ship) return;
        
        const result = ShipValidator.validate(this.ship);
        
        if (result.canFly) {
            el.textContent = '✅ ГОТОВ К ВЫЛЕТУ';
            el.className = 'ready';
        } else {
            el.textContent = `❌ ${result.problems[0] || 'Недостаточно деталей'}`;
            el.className = 'not-ready';
        }
    }
}