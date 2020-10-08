// Importar los modulos requeridos
const express = require("express");

// Configura y mantiene todos los endpoints en el servidor
const router = express.Router();

module.exports = () => {
  // Rutas disponibles
  router.get("/", (req, res, next) => {
    res.send("Bienvenido a MarketPlace!");
  });

  return router;
};
