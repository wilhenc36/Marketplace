// Importar modulos requeridos para el funcionamiento del servidor
const express = require("express");
const exphbs = require("express-handlebars");

// Habilitat el archivo de variables de entoro
require("dotenv").config({ path: ".env" });

// Crear un servidor utilizando express
const app = express();

app.use("/", (req, res, next) => {
  res.send("Bienvenido a MarketPlace!");
});

app.listen(process.env.PORT);
