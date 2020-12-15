const express = require('express');
const autenticationController = require('../controllers/autenticationController');
const route = express();
const userController = require('../controllers/userController')
const enderecoController = require('../controllers/enderecoController')
const auteticationJWT = require('../middlewares/auteticationJWT')



route.post('/user', userController.create)
route.delete('/user/:id', userController.destroy)

route.post('/login', autenticationController.create)

route.post('/address', auteticationJWT.verifyJWT, enderecoController.create)

module.exports = route;