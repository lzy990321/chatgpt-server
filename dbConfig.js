const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'lzy990321',
  database: 'chatgpt',
});

module.exports = connection;
