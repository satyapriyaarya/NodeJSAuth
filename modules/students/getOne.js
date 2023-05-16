const connection = require('../connection');

const getOne = (req, res) => {
    // Update an existing user in the database
    const { id } = req.params;
    const sql = 'SELECT Id, Name FROM students WHERE id = ' + id;
    connection.query(sql, (error, results) => {
      if (error) {
        console.error('Error retrieving students from the database:', error);
        res.status(500).json({message:'Error retrieving students from the database'});
      } else {
        res.send(results);
      }
    });
  }

  module.exports = getOne;