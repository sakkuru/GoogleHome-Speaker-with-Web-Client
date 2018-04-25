require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const home = require('./say');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//=========================================================
// Bot Setup
//=========================================================

const port = process.env.port || process.env.PORT || 9999;
const server = app.listen(port, () => {
    console.log('Server is listening on port %s', port);
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.post('/say', (req, res) => {
    console.log(req.body);
    if (req.body.text) {
        home.say(req.body.text, req.body.language);
    }
});