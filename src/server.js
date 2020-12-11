const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.portApp;

app.listen(port,()=>console.log(`Server Up in port ${port}`))