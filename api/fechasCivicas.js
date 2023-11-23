const express = require('express');
const router = express.Router();

// Importa el módulo de conexión a la base de datos
const connection = require('../bd/conexion');

// En fechasCivicas.js
router.get('/fechas-civicas-hoy', (req, res) => {
  connection.query('SELECT * FROM calendario WHERE DATE(datecal) = CURDATE()', (err, results) => {
    if (err) {
      console.error('Error al obtener las fechas cívicas de hoy:', err);
      res.status(500).send('Error del servidor');
    } else {
      res.json(results);
    }
  });
});


module.exports = router;

