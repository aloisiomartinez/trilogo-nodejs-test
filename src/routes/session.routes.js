const Router = require('express');

const SessionController = require('../app/controllers/SessionController');

const routes = Router();

routes.post('/', SessionController.store);

module.exports = routes;
