const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'db',        // ← must match the service name in docker-compose.yml
  user: 'user',      // from docker-compose.yml
  password: 'password',
  database: 'ecoreward'
});
