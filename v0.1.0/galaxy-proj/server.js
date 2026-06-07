import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const server = createServer(app);
const PORT = process.env.PORT || 3000;

const io = new Server(server, {cors:{origin: '*'}});
const players = new Map();

// Раздаём статические файлы из корня
app.use(express.static(__dirname));

app.get('/', (req, res) => {
    res.sendFile(join(__dirname, 'index.html'));
});

io.on('connection', (socket) => {
    console.log(`✅ Игрок подключился: ${socket.id}`);
    
    const newPlayer = {
        id: socket.id,
        position: {x: 0, y: 0, z: 0},
        rotation: {x: 0, y: 0, z: 0}
    };
    players.set(socket.id, newPlayer);
    
    // Отправляем ВСЕМ КРОМЕ нового игрока
    socket.broadcast.emit('player-joined', newPlayer);
    console.log(`📢 Отправлено player-joined всем, кроме ${socket.id}`);

    // Отправляем новому игроку список существующих
    const existingPlayers = Array.from(players.values()).filter(p => p.id !== socket.id);
    socket.emit('current-players', existingPlayers);
    console.log(`📋 Отправлено current-players новому игроку: ${existingPlayers.length} игроков`);

    socket.on('player-move', (data) => {
        const player = players.get(socket.id);
        if(player){
            player.position = data.position;
            player.rotation = data.rotation;
            // Рассылаем всем КРОМЕ отправителя
            socket.broadcast.emit('player-moved', {
                id: socket.id,
                position: data.position,
                rotation: data.rotation
            });
        }
    });

    socket.emit('your-id', socket.id);

    socket.on('disconnect', () => {
        console.log(`❌ Игрок отключился: ${socket.id}`);
        players.delete(socket.id);
        socket.broadcast.emit('player-disconnected', socket.id);
    });
});

server.listen(PORT, () => {
    console.log(`🚀 Сервер запущен на http://localhost:${PORT}`);
    console.log(`📊 Ожидание подключений...`);
});