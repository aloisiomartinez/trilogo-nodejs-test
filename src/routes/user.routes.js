const Router = require('express');
const UserController = require('../app/controllers/UserController');
const SessionController = require('../app/controllers/SessionController');
const authMiddlaware = require('../app/middlewares/auth');

const routes = Router();

routes.post('/register', UserController.store);
routes.post('/sessions', SessionController.store);

routes.use(authMiddlaware);

module.exports = routes;
