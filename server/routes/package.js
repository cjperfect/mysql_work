const express = require('express');
const router = express.Router();
const PackageController = require('../controller/PackageController')

router.get('/package/:page/:limit', PackageController.getAllPackage)

router.get('/porder/:packageid', PackageController.getOrderByPackage)




module.exports = router;