var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.get('/', function (req, res) {
  res.send('hello world')
})

app.listen(3000)
