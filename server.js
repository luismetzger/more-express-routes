'use strict'

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const bodyParse = require('body-parser');

app.use(bodyParse.json());

var colors = [
      "Navy",
      "Blue",
      "Aqua",
      "Teal",
      "Olive",
      "Green",
      "Lime",
      "Yellow",
      "Orange",
      "Red",
      "Maroon",
      "Fuchsia",
      "Purple",
      "Black",
      "Gray",
      "Silver",
      "White"
]

app.get('/', function(req, res) {
  res.send('Hello World!');
});

app.get('/pick_a_color', function(req, res) {
  res.send(colors);
});

app.get('/pick_a_color/:name', function(req, res) {
  res.send('You picked: ' + req.params.name);
});




app.listen(PORT, function() {
  console.log('Go to localhost:3000/');
});
