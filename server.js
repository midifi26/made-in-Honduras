const express = require("express");
const cors = require('cors');
const app = express(); // Inicializar servidor
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swagger.json');
const port = 3000;

app.use(cors());
app.use(express.json());

const productRoutes= require("./routes/product.route");

app.use('/api',productRoutes);

//http://localhost:3000/api-docs/
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));


app.listen(port, () => {
    console.log(`Example app listening on http://localhost:${port}`);
  });