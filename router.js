const express = require('express');
const router = express.Router();
const userController = require('./controllers/userController');

router.post('/add', userController.createActivationCode);
router.get('/getActivationCode', userController.getActivationCode);
router.get('/upBalance', userController.upBalance);
router.get('/deleteActivationCode', userController.deleteActivationCode);

module.exports = router;
