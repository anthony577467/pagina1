const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost', // Cambia esto según tu configuración de MySQL
  user: 'root',
  password: 'admin',
  database: 'calendar',
});

connection.connect((err) => {
  if (err) {
    console.error('Error de conexión a la base de datos:', err);
  } else {
    console.log('Conexión exitosa a la base de datos');
  }
});


module.exports = connection;
