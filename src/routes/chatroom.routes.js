const Router = require('express');
const ChatRoomController = require('../app/controllers/ChatRoomController');
const MessageController = require('../app/controllers/MessageController');

const authMiddlaware = require('../app/middlewares/auth');

const routes = Router();

routes.use(authMiddlaware);

routes.get('/', ChatRoomController.getAllChatrooms);
routes.get('/:id', MessageController.getMessageByRoom);

routes.post('/', ChatRoomController.store);

module.exports = routes;
