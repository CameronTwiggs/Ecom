const fetch = import('node-fetch');
const cors = require("cors")
const express = require('express');
const mysql = require('mysql');


// starts express server
const app = express();
const port = process.env.PORT || 8080;

app.use(cors());

app.listen(port, () => console.log(`Listening on port ${port}`));



// connects to mysql database
const connection = mysql.createConnection({
    host: process.env.DB_host,
    user: process.env.DB_user,
    port:  process.env.DB_port,
    password: process.env.DB_password,
    database: process.env.DB_database 
});

// pulls data from mysql database
app.get('/', (req, res) => {
    connection.query('SELECT * FROM products', (err, rows, fields) => {
        if (err) throw err;
        res.send(rows);
    });
});


app.get('/low', (req, res) => {
    connection.query('SELECT * FROM products ORDER BY price ASC;', (err, rows, fields) => {
        if (err) throw err;
        res.send(rows);
    });
});


app.get('/high', (req, res) => {
    connection.query('SELECT * FROM products ORDER BY price DESC;', (err, rows, fields) => {
        if (err) throw err;
        res.send(rows);
    });
});

app.get('/:id', (req, res) => {
    connection.query('SELECT * FROM products WHERE id = ?', [req.params.id], (err, rows, fields) => {
        if (err) throw err;
        else if (rows == []) {
            res.status(404).send('Product not found');
        }
        else {
            res.send(rows);
        }
    });
});

