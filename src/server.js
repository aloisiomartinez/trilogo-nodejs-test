require('dotenv').config();
require('./database/connection');

const jwt = require('jsonwebtoken');
const app = require('./app');
const authConfig = require('./config/auth');

const Message = require('./models/Message');
const User = require('./models/User');

const PORT = 3333 || process.env.PORT;

const server = app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// Socket IO

const io = require('socket.io')(server, {
  cors: {
    origin: '*',
  },
});

io.use(async (socket, next) => {
  try {
    const { token } = socket.handshake.query;

    const payload = await jwt.verify(token, authConfig.secret);

    socket.userId = payload.id;
    next();
  } catch (err) {
    console.log('Error: ', err);
  }
});

io.on('connection', (socket) => {
  console.log(`Connected: ${socket.userId}`);

  socket.on('disconnect', () => {
    console.log(`Disconnected: ${socket.userId}`);
  });

  socket.on('joinRoom', ({ chatroomId }) => {
    socket.join(chatroomId);
    console.log(`A user joined chatroom:${chatroomId}`);
  });

  socket.on('leaveRoom', ({ chatroomId }) => {
    socket.leave(chatroomId);
    console.log(`A user left chatroom:${chatroomId}`);
  });

  socket.on('chatroomMessage', async ({ chatroomId, message }) => {
    if (message.trim().length > 0) {
      const user = await User.findOne({ _id: socket.userId });

      const messageSave = new Message({ chatRoom: chatroomId, user: socket.userId, message });

      io.to(chatroomId).emit('newMessage', {
        message,
        name: user.name,
        userId: socket.userId,
      });

      await messageSave.save();
    }
  });
});
