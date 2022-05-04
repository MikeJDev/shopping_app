const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'shoppingDb'
});

connection.connect(function(err) {
  if (err) {
    return console.error('error: ' + err.message);
  }
  console.log('Connected to the DB.');

  connection.query("CREATE DATABASE IF NOT EXISTS shoppingDb", function (err, result) {
    if (err) throw err;
    console.log("Database created");
  });

  var sql = `CREATE TABLE IF NOT EXISTS items (
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) not null,
    description VARCHAR(255),
    quantity INTEGER not null,
    isPurchased BOOLEAN DEFAULT false
    )`;
  connection.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Items table created");
  });

  // connection.end(function(err) {
  //   if (err) {
  //     return console.log(err.message);
  //   }
  // });
});

module.exports = connection;