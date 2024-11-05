// index.js
import express from 'express';
import { Server } from 'socket.io'; // שינוי הייבוא ל-Server
import http from 'http';
import dotenv from 'dotenv';
import socketHandler from './src/socketHandler.js';

dotenv.config();

const app = express();
const server = http.createServer(app);
const io = new Server(server); // יצירת מופע של ה-Socket.IO server

// התחלת השרת עם WebSocket
socketHandler(io);

const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('Server is up and running');
});

server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
