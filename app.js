const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const path = require('path');

const app = express();
const port = 3000;

// Configurar la conexión a la base de datos MySQL
const conexion = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'admin',
  database: 'formulario'
});

// Conectar a la base de datos
conexion.connect((err) => {
  if (err) {
    console.error('Error al conectar a la base de datos:', err);
  } else {
    console.log('Conexión exitosa a la base de datos MySQL');
  }
});

// Configurar el middleware body-parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Servir archivos estáticos desde las carpetas 'public' y 'CSS'
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'CSS')));

app.post('/enviarDatos', (req, res) => {
  const {
    carrera,
    nombre,
    apellidos,
    correo,
    Asunto,
    Fecha,
    Telefono,
    Estado,
    nombreEstudiante,
    apellidoEstudiante,
    Seccion
  } = req.body;

  // Realizar la lógica para insertar datos en la base de datos
  const sql = `
    INSERT INTO formulario 
    (carrera, nombre, apellidos, correo, Asunto, Fecha, Telefono, Estado, nombreEstudiante, apellidoEstudiante, Seccion) 
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;

  const values = [
    carrera,
    nombre,
    apellidos,
    correo,
    Asunto,
    Fecha,
    Telefono,
    Estado,
    nombreEstudiante,
    apellidoEstudiante,
    Seccion
  ];

  conexion.query(sql, values, (err, results) => {
    if (err) {
      console.error('Error al insertar datos:', err);
      return res.status(500).send('Error al guardar en la base de datos');
    }

    console.log('Datos insertados correctamente');
    res.send('Datos enviados correctamente');
  });
});

// Ruta para cargar la página principal del formulario
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/HTML/formulario.html'));
});

// Rutas para las fechas cívicas
const fechasCivicasRoutes = require('./api/fechasCivicas');
app.use('/api', fechasCivicasRoutes);

// Ruta para cargar la página del calendario cívico
app.get('/calendario', (req, res) => {
  res.sendFile(path.join(__dirname, '/HTML/calendario.html'));
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor en ejecución en http://localhost:${port}`);
});
