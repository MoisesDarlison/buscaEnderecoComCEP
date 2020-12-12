const express = require('express');
const route = express();
const userController = require('../controllers/userController')

route.post('/user', userController.create)

module.exports = route;