
const connection = require('../connection');
const get = (req, res) => {
    // Retrieve all students from the database
    const sql = 'SELECT Id, Name FROM students';
    connection.query(sql, (error, results) => {
      if (error) {
        console.error('Error retrieving students from the database:', error);
        res.status(500).json({message: 'Error retrieving students from the database'});
      } else {
        res.send(results);
      }
    });
  }

  module.exports = get;