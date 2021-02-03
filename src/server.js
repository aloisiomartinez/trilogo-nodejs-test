import express from 'express';
import http from 'http';
import { Server } from 'socket.io';

import './database/connection';
// const express = require('express');
// const http = require('http');
// const Server = require('socket.io');
// require('./database/connection');

const app = express();
const server = http.createServer(app);
app.use(express.json());

const io = new Server(server);

io.on('connection', (socket) => {
  console.log('ois');
});

const PORT = 3000 || process.env.PORT;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
