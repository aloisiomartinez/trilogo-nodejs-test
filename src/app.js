const express = require('express');
const cors = require('cors');

const app = express();

const userRoutes = require('./routes/user.routes');
const chatRoomRoutes = require('./routes/chatroom.routes');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use('/user', userRoutes);
app.use('/chatRoom', chatRoomRoutes);

module.exports = app;
