'use strict'

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const bodyParse = require('body-parser');

app.use(bodyParse.json());


var burgers = [
                "Hamburger",
                "Cheese Burger",
                "Dble Cheese Burger"
               ];

var tacos = [
                "Soft Taco",
                "Crunchy Taco",
                "Super Taco"
               ];


app.get('/', function(req, res) {
  res.send('Hello World!');
});

app.get('/tacos/:index', function(req, res) {
  var index = req.params.index;
  var selection = tacos[index] || "Sorry, that's not a taco option";
  res.send(selection);
});

app.get('/burgers/:index', function(req, res) {
  var index = req.params.index;
  var selection = burgers[index] || "Sorry, that's not a burger option";
  res.send(selection);
});

var correct_number = 10;

app.get('/pickanumber', function(req, res) {
  var num = req.query.number;
  if(num === correct_number) {
    res.send('Nailed it!');
  } else if(num > correct_number) {
    res.send('Too High!');
  } else if (num < correct_number){
    res.send('Too low!');
  } else {
    res.send('Not working');
  }
});

app.get('/add', function(req, res) {
  var x = req.query.x;
  var y = req.query.y;
  var total = x + y;
  res.send(total);
});

app.get('/multiply', function(req, res) {
  var x = req.query.x;
  var y = req.query.y;
  var total = x * y;
  res.send(total);
});


app.listen(PORT, function() {
  console.log('Go to localhost:3000/');
});
