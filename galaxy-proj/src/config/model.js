export const MODELS_CONFIG = {
    ships: [
        {
            id: 'scout',
            name: 'Исследовательский корабль',
            url: 'https://raw.githubusercontent.com/Gabryelf/Atlas-Assets/main/docs/models/ships/scout.glb',
            color: 0xff4444,
            scale: 1.0,
            rotationSpeed: 0.005
        },
        {
            id: 'assault',
            name: 'Штурмовой корабль',
            url: 'https://raw.githubusercontent.com/Gabryelf/Atlas-Assets/main/docs/models/ships/assault.glb',
            color: 0xff4444,
            scale: 1.0,
            rotationSpeed: 0.005
        },
        {
            id: 'freighter',
            name: 'Штурмовой корабль',
            url: 'https://raw.githubusercontent.com/Gabryelf/Atlas-Assets/main/docs/models/ships/freighter.glb',
            color: 0xff4444,
            scale: 1.0,
            rotationSpeed: 0.005
        }
    ],
    body: [
        {
            id: 'asteroid',
            name: 'Астероид',
            url: '../../models/asteroid2.glb',
            color: 0xff4444,
            scale: 1.0,
            rotationSpeed: 0.005
        }
    ],
    loading: {
        showProgress: true,
        defaultScale: 1.0
    }
}