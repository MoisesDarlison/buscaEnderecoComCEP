const express = require('express');
const autenticationController = require('../controllers/autenticationController');
const route = express();
const userController = require('../controllers/userController')

route.post('/user', userController.create)
route.delete('/user/:id', userController.destroy)

route.post('/login', autenticationController.create)


module.exports = route;