const mysql = require('mysql');

// Create a MySQL connection
const connection = mysql.createConnection({
    host: '85.10.205.173',
    port: 3306,
    user: '',
    password: '',
    database: ''
  });
  
  // Connect to the MySQL server
  connection.connect((error) => {
    if (error) {
      console.error('Error connecting to the database:', error);
    } else {
      console.log('Connected to the database');
    }
  });

  module.exports = connection;