const Router = require('express');
const MessageController = require('../app/controllers/MessageController');

const authMiddlaware = require('../app/middlewares/auth');

const routes = Router();

routes.get('/:id', MessageController.getMessageByRoom);
routes.get('/', MessageController.test);

module.exports = routes;
