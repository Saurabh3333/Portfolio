const functions = require('firebase-functions');
const express = require('express');
var path = require('path');

const app = express();
app.set('view engine', 'ejs');
app.use('/public', express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('home');
});



exports.app = functions.https.onRequest(app);