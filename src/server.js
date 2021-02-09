require('dotenv').config();
require('./database/connection');
const jwt = require('jsonwebtoken');
const app = require('./app');
const authConfig = require('./config/auth');

const PORT = 3333 || process.env.PORT;

const server = app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

const io = require('socket.io')(server);

io.use(async (socket, next) => {
  try {
    const { token } = socket.handshake.query;
    console.log('TOKEN', token);
    const payload = await jwt.verify(token, authConfig.secret);
    // eslint-disable-next-line no-param-reassign
    socket.userId = payload.id;
    next();
  } catch (err) {}
});

io.on('connection', (socket) => {
  console.log(`Connected: ${socket.userId}`);

  socket.on('disconnect', () => {
    console.log(`Disconnected: ${socket.userId}`);
  });
});
