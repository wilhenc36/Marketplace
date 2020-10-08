// Importar modulos requeridos para el funcionamiento del servidor
const express = require("express");
const exphbs = require("express-handlebars");

// Crear un servidor utilizando express
const app = express();

app.use("/", (req, res, next) => {
  res.send("Bienvenido a MarketPlace!");
});

app.listen(3000);
