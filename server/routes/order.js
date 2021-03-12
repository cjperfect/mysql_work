const express = require('express');
const router = express.Router();
const OrderController = require('../controller/OrderController');

router.get('/order/:page/:limit', OrderController.getAllOrder);

router.get('/total/:page/:limit', OrderController.getTotalData);

router.get('/getorder/:id', OrderController.getUserOrders);

module.exports = router;