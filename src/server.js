const express = require('express');
require('dotenv').config();
const app = express();
const port = process.env.portApp;

app.listen(port,()=>console.log(`Server Up in port ${port}`))