import Fastify from 'fastify';
import fastifyStatic from '@fastify/static';
import {Server} from 'socket.io';
import {fileURLToPath} from 'url';
import {dirname, join} from 'path';
import Player from './src/entities/Player.js'
//___________ ищем папку в которой лежит файл сервера
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
//___________ инициализируем сервер
const fastify = Fastify({logger: false});
const PORT = 8000;
//___________ регистрируем статические файлы и отдаем по основному запросу
fastify.register(fastifyStatic({root: __dirname}));
fastify.get('/', (request, reply) => {
    reply('index.html');
});
//___________ поднимаем сервер и слушаем клиенты
fastify.listen({port: PORT, host: '0.0.0.0'}, () => {
    console.log(`http://localhost:${PORT}`);
});
//___________ создаем сервер для вебсокета и инициализируем сессии
const io = Server(fastify.server);
const sessions = new Map();
//___________ ожидаем запрос от клиентов по TCP соединению и прослушиваем события
io.on('connection', (socket) => {
    socket.on('join', (sessionId, playerName, selectModel) => {
        if(!sessions.has(sessionId)){
            sessions.set(sessionId, new Map());
        }
        const session = sessions.get(sessionId);
        const player = new Player(socket.id, playerName, selectModel);

        session.set(socket.id, player);
    });
});





