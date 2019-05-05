const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const path = require('path');

const app = express();

const _dist = path.join(__dirname, '../dist');

app.use(express.static(_dist));

app.use(logger('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/*', (req, res) => {
  res.sendFile(`${_dist}/index.html`);
});

module.exports = app;