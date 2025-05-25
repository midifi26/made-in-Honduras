const express = require("express");
const cors = require('cors');
const app = express(); // Inicializar servidor
const port = 3000;

app.use(cors());
app.use(express.json());

const productRoutes= require("./routes/product.route");

app.use('/api',productRoutes);

app.listen(port, () => {
    console.log(`Example app listening on http://localhost:${port}`);
  });