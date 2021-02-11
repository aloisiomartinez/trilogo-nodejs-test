const Router = require('express');
const MessageController = require('../app/controllers/MessageController');

const authMiddlaware = require('../app/middlewares/auth');

const routes = Router();

routes.use(authMiddlaware);

routes.get('/:id', MessageController.getMessageByRoom);

module.exports = routes;
