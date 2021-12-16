const { Router } = require('express');
const orderRoute = Router();
const OrderController = require('../controllers/OrderController');

orderRoute.get("/", OrderController.getOrders);
orderRoute.post("/add", OrderController.addOrder);
orderRoute.post("/user", OrderController.getUserOrder);

module.exports = orderRoute