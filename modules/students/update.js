const connection = require('../connection');

var update = (req, res) => {
    // Update an existing user in the database
    const { id } = req.params;
    const { name } = req.body;
    const sql = 'UPDATE students SET name = ? WHERE id = ?';
    connection.query(sql, [name, id], (error, results) => {
      if (error) {
        console.error('Error updating an existing student in the database:', error);
        res.status(500).json({message: 'Error updating an existing student in the database'});
      } else {
        res.send(results);
      }
    });
  };

  module.exports = update