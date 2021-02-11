const express = require('express');
const cors = require('cors');

const app = express();

const userRoutes = require('./routes/user.routes');
const chatRoomRoutes = require('./routes/chatroom.routes');
const messageRoutes = require('./routes/message.routes');
const sessionRoutes = require('./routes/session.routes');
const endPoints = require('./routes/endpoints.routes');

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.use('/endPoints', endPoints);
app.use('/user', userRoutes);
app.use('/session', sessionRoutes);
app.use('/chatRoom', chatRoomRoutes);
app.use('/messages', messageRoutes);
module.exports = app;
