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
  database: 'sbsb'
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

// Servir archivos estáticos desde las carpetas 'HTML', 'CSS', 'js', e 'img'
app.use('/CSS', express.static(path.join(__dirname, 'CSS')));
app.use('/js', express.static(path.join(__dirname, 'js')));
app.use('/img', express.static(path.join(__dirname, 'img')));
app.use('/imagenescarrucel', express.static(path.join(__dirname, 'imagenescarrucel')));
app.use('/HTML', express.static(path.join(__dirname, 'HTML')));
app.use('/imagenSanBenito', express.static(path.join(__dirname, 'imagenSanbenito')));
app.use('/image', express.static(path.join(__dirname, 'image')));
app.use('/api', express.static(path.join(__dirname, 'api')));
app.use('/bd', express.static(path.join(__dirname, 'bd')));
app.get("/", function (req, res) {
    var filePath = path.join(__dirname, "./index.html");
    res.sendFile(filePath);
});

app.get("/index.html", function (req, res) {
    var filePath = path.join(__dirname, "./index.html");
    res.sendFile(filePath);
});

app.post('/enviarDatos', (req, res) => {
  const {
    nombre,
    apellido,
    correo,
    telefono,
    mensaje
  } = req.body;
  // Realizar la lógica para insertar datos en la base de datos
  const sql = `
    INSERT INTO formulario 
    ( nombre, apellido, correo, telefono, mensaje) 
    VALUES (?, ?, ?, ?, ?)`;

  const values = [
    
    nombre,
    apellido,
    correo,
    telefono,
    mensaje
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
  res.sendFile(path.join(__dirname, '/index.html'));
});

// Ruta para cargar la página del calendario cívico
app.get('/historia', (req, res) => {
  res.sendFile(path.join(__dirname, '/HTML/historia.html'));
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

