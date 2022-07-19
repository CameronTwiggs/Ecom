const fetch = import('node-fetch');
const cors = require("cors")
const express = require('express');
const mysql = require('mysql');


// starts express server
const app = express();
const port = 8080 || process.env.PORT;

app.use(cors());

app.listen(port, () => console.log(`Listening on port ${port}`));



// connects to mysql database
const connection = mysql.createConnection({
    host: process.env.db-host,
    user: process.env.db-user,
    port:  process.env.db-port,
    password: process.env.db-password,
    database: process.env.db-database 
});

// pulls data from mysql database
app.get('/', (req, res) => {
    connection.query('SELECT * FROM products', (err, rows, fields) => {
        if (err) throw err;
        res.send(rows);
    });
});
