const Router = require('express');
const ChatRoomController = require('../app/controllers/ChatRoomController');

const authMiddlaware = require('../app/middlewares/auth');

const routes = Router();

routes.use(authMiddlaware);

routes.post('/', ChatRoomController.store);
routes.get('/', ChatRoomController.getAllChatrooms);
routes.get('/users/:id', ChatRoomController.getUsersFromChatRoom);

module.exports = routes;
