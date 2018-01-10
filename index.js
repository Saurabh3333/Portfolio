const functions = require('firebase-functions');
const express = require('express');
var path = require('path');
var http = require('http');

const app = express();
app.set('view engine', 'ejs');
app.use('/public', express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/cv', (req, res) => {
    res.writeHead(301, {
        "Location": "https://drive.google.com/file/d/1sCgK13EXfN44u_dz7F_5jSMAtQILDa-T/view?usp=sharing"
    });
    res.end();
});

app.get('/beta-version', (req, res) => {
    res.render('beta-home');
});

app.get('/beta-version/blogs', (req, res) => {
    res.render('beta-blogs');
});

app.get('/beta-version/projects', (req, res) => {
    res.render('beta-projects');
});



exports.app = functions.https.onRequest(app);