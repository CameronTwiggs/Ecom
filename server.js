const fetch = import('node-fetch');
const cors = require("cors")
const express = require('express');
const mysql = require('mysql');


// starts express server
const app = express();
const port = 8080

app.use(cors());

app.listen(port, () => console.log(`Listening on port ${port}`));



// connects to mysql database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'test'
});

// pulls data from mysql database
app.get('/', (req, res) => {
    connection.query('SELECT * FROM test', (err, rows, fields) => {
        if (err) throw err;
        res.send(rows);
    });
});
