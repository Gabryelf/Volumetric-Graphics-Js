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
    console.log(`------ Игрок подключился: ${socket.id} -------`);

    socket.emit('your-id', socket.id);

    socket.on('disconect', () => {
        console.log(`====== Игрок отключился: ${socket.id} =======`);
        players.delete(socket.id);
        socket.broadcast.emit('player-disconected', socket.id);
    });
});

server.listen(PORT, () => {
    console.log(`Сервер запущен на http://localhost:${PORT}`);
});