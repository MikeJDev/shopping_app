const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'shoppingCart'
});

connection.connect(function(err) {
  if (err) {
    return console.error('error: ' + err.message);
  }

  console.log('Connected to the MySQL server.');

  connection.query("CREATE DATABASE IF NOT EXISTS shoppingDb", function (err, result) {
    if (err) throw err;
    console.log("Database created");
  });
});

module.exports = connection;