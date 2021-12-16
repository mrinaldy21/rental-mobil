const { Router } = require('express');
const userRoute = Router();
const UserController = require('../controllers/UserController');

userRoute.post('/login', UserController.login);
userRoute.post('/register', UserController.register);

module.exports = userRoute