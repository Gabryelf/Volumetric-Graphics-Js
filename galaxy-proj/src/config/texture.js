export const TEXTURES_CONFIG = {
    url: {
        sky: [
            '../../textures/disc.png'
        ],
        ship :[
            "../../textures/armor-hex/space-cruiser-panels2_albedo.png",
            "../../textures/armor-hex/space-cruiser-panels2_ao.png",
            "../../textures/armor-hex/space-cruiser-panels2_metallic.png",
            "../../textures/armor-hex/space-cruiser-panels2_roughness.png",
            "../../textures/armor-hex/space-cruiser-panels2_normal-ogl.png",
            "../../textures/armor-hex/space-cruiser-panels2_height.png"
        ],
        armor_plating:[
            "../../textures/armor-plating/armor-plating1_albedo.png",
            "../../textures/armor-plating/armor-plating1_ao.png",
            "../../textures/armor-plating/armor-plating1_metallic.png",
            "../../textures/armor-plating/armor-plating1_roughness.png",
            "../../textures/armor-plating/armor-plating1_normal-ogl.png",
            "../../textures/armor-plating/armor-plating1_height.png"
        ],
        cratered_rock: [
            "../../textures/cratered-rock/cratered-rock-albedo.png",
            "../../textures/cratered-rock/cratered-rock-ao.png",
            "../../textures/cratered-rock/cratered-rock-metalness.png",
            "../../textures/cratered-rock/cratered-rock-roughness.png",
            "../../textures/cratered-rock/cratered-rock-normal-ogl.png",
            "../../textures/cratered-rock/cratered-rock-height.png"
        ]
    },
    textureOptions : {
        color: 0xffffff,      // Цвет модели (белый = оригинальные цвета текстуры)
        roughness: 1.0,       // Шероховатость (0 - гладкий, 1 - шероховатый)
        metalness: 0.5,       // Металличность (0 - не металл, 1 - металл)
        emissive: 0x000000,   // Свечение (черный = нет свечения)
        transparent: false,   // Прозрачность материала
        opacity: 1.0,        // Непрозрачность (0-1)
        repeat: { x: 10, y: 10 }, // Повторение текстуры
        offset: { x: 1, y: 1 }   // Смещение текстуры
    }
    
}