const express = require("express");
const app = express(); // Inicializar servidor
const port = 3000;

app.use(express.json());

const productRoutes= require("./routes/product.route");

app.use('/api',productRoutes);

app.listen(port, () => {
    console.log(`Example app listening on http://localhost:${port}`);
  });