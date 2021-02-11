const Router = require('express');

const SessionController = require('../app/controllers/SessionController');
const authMiddlaware = require('../app/middlewares/auth');

const routes = Router();

routes.post('/', SessionController.store);

routes.use(authMiddlaware);

module.exports = routes;
