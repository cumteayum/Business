const express = require("express");
const app = express();
const hbs = require('hbs');
const path = require('path');
const bodyParser = require('body-parser');
const nodemailer = require("nodemailer");
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended:false}));
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render("index.hbs");
});

app.get('*', (req, res) => {
    res.status(400).send("404");
});

app.listen(port, () => {console.log(`http://localhost:3000`)});