const express = require('express');
require('dotenv').config();
const route = express();
const userController = require('../controllers/userController')

route.post('/user',userController.create)


