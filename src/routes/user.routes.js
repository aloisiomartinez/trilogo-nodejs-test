const Router = require('express');
const UserController = require('../app/controllers/UserController');
const authMiddlaware = require('../app/middlewares/auth');

const routes = Router();

routes.post('/', UserController.store);

routes.use(authMiddlaware);

routes.get('/', UserController.find);
routes.get('/:email', UserController.findByEmail);

module.exports = routes;
