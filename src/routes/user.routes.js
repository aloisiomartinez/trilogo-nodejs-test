const Router = require('express');
const UserController = require('../app/controllers/UserController');
const SessionController = require('../app/controllers/SessionController');
const authMiddlaware = require('../app/middlewares/auth');

const routes = Router();

routes.post('/', UserController.store);
routes.post('/sessions', SessionController.store);

routes.use(authMiddlaware);

routes.get('/', UserController.find);
routes.get('/:email', UserController.findByEmail);

// routes.put('/', UserController.update);

// routes.delete('/:email', UserController.delete);

module.exports = routes;
