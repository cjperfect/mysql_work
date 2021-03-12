const express = require('express');
const router = express.Router();
const UserController = require('../controller/UserController');

router.get('/server/:page/:limit', UserController.getAllServer);

router.get('/user/:page/:limt', UserController.getAllUser);

router.get('/testData', UserController.generateTestData);

router.get('/getuser/:id', UserController.getUserByServer);

router.get('/getserver/:id', UserController.getServerByServer);

module.exports = router;