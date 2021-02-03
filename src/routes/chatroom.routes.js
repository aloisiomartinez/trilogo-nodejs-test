const Router = require('express');
const ChatRoomController = require('../app/controllers/ChatRoomController');

const authMiddlaware = require('../app/middlewares/auth');

const routes = Router();

routes.use(authMiddlaware);

routes.post('/', ChatRoomController.store);

module.exports = routes;
