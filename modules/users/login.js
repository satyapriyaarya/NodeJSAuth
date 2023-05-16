const connection = require('../connection');
const jwt = require("jsonwebtoken");

const login = (req, res) => {
    // Create a new user in the database
    const { username, password } = req.body;
    const sql = 'SELECT COUNT(*) FROM users WHERE Username = ? AND Password = ?';
    connection.query(sql, [username, password], (error, results) => {
      if (error) {
        console.log(error);
        res.status(404).json({message : 'Invalid username or password'});
      } else {
        const token = jwt.sign({ username: username }, "secret-key", { expiresIn: "1h" });
        res.json({ token });
      }
    });
  }

  module.exports = login;