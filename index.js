// Importar modulos requeridos para el funcionamiento del servidor
const express = require("express");
const exphbs = require("express-handlebars");
const router = require("./routes/index");

// Habilitat el archivo de variables de entoro
require("dotenv").config({ path: ".env" });

// Crear un servidor utilizando express
const app = express();

// Implementar nuestro router
app.use("/", router());

app.listen(process.env.PORT);
