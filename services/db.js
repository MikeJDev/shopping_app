const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  // database: 'shoppingDb'
});

connection.connect(function(err) {
  if (err) {
    return console.error('error: ' + err.message);
  }
  console.log('Connected to the Mysql server.');
  connection.query("CREATE DATABASE IF NOT EXISTS shoppingDb", function (err, result) {
    if (err) {
      return console.error('error creating db: ' + err.message);
    };
  console.log("Database created");
    connection.changeUser({
      database : 'shoppingDb'
    }, function(err) {
      if (err) {
        console.error('error in changing database', err);
        return;
      }});
    const sql = `CREATE TABLE IF NOT EXISTS items (
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
  });
});

module.exports = connection;