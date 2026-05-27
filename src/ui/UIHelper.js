export class UIHelper {
    constructor() {
        this.createHealthBar();
    }

    createHealthBar() {
        // Создаем контейнер для HP
        const container = document.createElement('div');
        container.style.position = 'fixed';
        container.style.bottom = '20px';
        container.style.left = '20px';
        container.style.zIndex = '1000';
        container.style.backgroundColor = 'rgba(0,0,0,0.7)';
        container.style.padding = '10px';
        container.style.borderRadius = '5px';
        container.style.fontFamily = 'Arial';
        
        // Текст HP
        this.hpText = document.createElement('div');
        this.hpText.style.color = 'white';
        this.hpText.style.marginBottom = '5px';
        this.hpText.style.fontSize = '14px';
        container.appendChild(this.hpText);
        
        // Прогресс-бар
        const barBg = document.createElement('div');
        barBg.style.width = '200px';
        barBg.style.height = '20px';
        barBg.style.backgroundColor = '#333';
        barBg.style.borderRadius = '10px';
        barBg.style.overflow = 'hidden';
        
        this.hpBar = document.createElement('div');
        this.hpBar.style.width = '100%';
        this.hpBar.style.height = '100%';
        this.hpBar.style.backgroundColor = '#4caf50';
        this.hpBar.style.transition = 'width 0.3s ease';
        
        barBg.appendChild(this.hpBar);
        container.appendChild(barBg);
        
        document.body.appendChild(container);
    }

    updateHealth(currentHp, maxHp) {
        const percent = Math.max(0, (currentHp / maxHp) * 100);
        this.hpBar.style.width = `${percent}%`;
        this.hpText.textContent = `Прочность: ${Math.max(0, currentHp)} / ${maxHp}`;
        
        // Меняем цвет в зависимости от HP
        if (percent < 30) {
            this.hpBar.style.backgroundColor = '#f44336';
        } else if (percent < 60) {
            this.hpBar.style.backgroundColor = '#ff9800';
        } else {
            this.hpBar.style.backgroundColor = '#4caf50';
        }
    }

    showGameOver() {
        const overlay = document.createElement('div');
        overlay.style.position = 'fixed';
        overlay.style.top = '0';
        overlay.style.left = '0';
        overlay.style.width = '100%';
        overlay.style.height = '100%';
        overlay.style.backgroundColor = 'rgba(0,0,0,0.8)';
        overlay.style.zIndex = '2000';
        overlay.style.display = 'flex';
        overlay.style.flexDirection = 'column';
        overlay.style.justifyContent = 'center';
        overlay.style.alignItems = 'center';
        overlay.style.fontFamily = 'Arial';
        
        const title = document.createElement('h1');
        title.textContent = '💀 GAME OVER 💀';
        title.style.color = 'red';
        title.style.marginBottom = '20px';
        
        const button = document.createElement('button');
        button.textContent = 'Перезапустить игру';
        button.style.padding = '10px 20px';
        button.style.fontSize = '18px';
        button.style.cursor = 'pointer';
        button.style.backgroundColor = '#4caf50';
        button.style.color = 'white';
        button.style.border = 'none';
        button.style.borderRadius = '5px';
        
        button.onclick = () => {
            window.location.reload();
        };
        
        overlay.appendChild(title);
        overlay.appendChild(button);
        document.body.appendChild(overlay);
    }
}