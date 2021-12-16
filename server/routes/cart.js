const { Router } = require('express');
const cartRoute = Router();
const CartController = require('../controllers/CartController');


cartRoute.post('/add', CartController.addCart);
cartRoute.delete('/delete/:id', CartController.deleteCart);

module.exports = cartRoute