const express = require('express');

const productApi = require('./api/productApi');

const app = express();
app.use(express.json());

productApi(app);

app.listen(3000, () => console.log("Server started"));