const express = require('express');
const route = require('./routes/routers');
require('dotenv').config();
const app = express();
const port = process.env.portApp;

app.use(express.json())
app.use(route)

app.listen(port, () => console.log(`Server Up in port ${port}`))