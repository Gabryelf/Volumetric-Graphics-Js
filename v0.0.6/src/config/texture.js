export const TEXTURES_CONFIG = {
    url: [
        "../../textures/disc.png",
        "../../textures/space-cruiser-panels2_albedo.png"
    ],
    textureOptions : {
        color: 0xffffff,      // Цвет модели (белый = оригинальные цвета текстуры)
        roughness: 1.0,       // Шероховатость (0 - гладкий, 1 - шероховатый)
        metalness: 0.5,       // Металличность (0 - не металл, 1 - металл)
        emissive: 0x000000,   // Свечение (черный = нет свечения)
        transparent: false,   // Прозрачность материала
        opacity: 1.0,        // Непрозрачность (0-1)
        repeat: { x: 10, y: 10 }, // Повторение текстуры
        offset: { x: 1, y: 1 }   // Смещение текстуры
    },
    texture_maps:{
        ao: "../../textures/space-cruiser-panels2_ao.png",
        metallic: "../../textures/space-cruiser-panels2_metallic.png",
        roughness: "../../textures/space-cruiser-panels2_roughness.png",
        normal: "../../textures/space-cruiser-panels2_normal-ogl.png",
        height: "../../textures/space-cruiser-panels2_height.png"
    }
    
}