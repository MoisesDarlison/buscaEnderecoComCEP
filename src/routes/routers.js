const express = require('express');
const autenticationController = require('../controllers/autenticationController');
const route = express();
const userController = require('../controllers/userController')
const enderecoController = require('../controllers/enderecoController')
const auteticationJWT = require('../middlewares/auteticationJWT')
const buscaCepMiddleware = require('../middlewares/buscaCepMiddleware')


route.post('/user', userController.create)
route.delete('/user/:id', userController.destroy)

route.post('/login', autenticationController.create)

route.post('/address', auteticationJWT.verifyJWT,
    buscaCepMiddleware.buscaCep, enderecoController.create)
 
    module.exports = route;