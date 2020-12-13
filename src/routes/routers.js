const express = require('express');
const autenticationController = require('../controllers/autenticationController');
const route = express();
const userController = require('../controllers/userController')
const enderecoController = require('../controllers/enderecoController')


route.post('/user', userController.create)
route.delete('/user/:id', userController.destroy)

route.post('/login', autenticationController.create)

route.post('/address', enderecoController.create)

module.exports = route;