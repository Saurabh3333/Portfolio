const functions = require('firebase-functions');
const express = require('express');
var path = require('path');

const app = express();
app.set('view engine', 'ejs');
app.use('/public', express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/cv', (req, res) => {
    res.send("Under construction");
});

app.get('/blog', (req, res) => {
    res.send("Under construction");
});

app.get('/projects', (req, res) => {
    res.send("Under construction");
});



exports.app = functions.https.onRequest(app);