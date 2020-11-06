let express = require('express');
let bodyParser = require('body-parser');
let fs = require('fs');
let path = require('path');

let app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(function (req, res, next) { setTimeout(next, 400) });

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

let activeCartFilePath = path.join(__dirname, 'api/data.js');
let activeCartFile = fs.readFileSync(activeCartFilePath);
let activeCart = JSON.parse(activeCartFile);

app.get('/', function (req, res, next) {
  res.status(200).send('Storybook Module Project');
});

app.get('/users', function (req, res) {
  res.json(activeCart);
})

// app.listen(5000);

var server = app.listen(5000, function () {
  console.log("app running on port.", server.address().port);
});





// const express = require('express')
// const app = express()
// var path = require('path')
// var bodyParser = require('body-parser')
// app.use(express.static(path.join(__dirname, 'build')));

// var dataController = require('./dataController');

// app.get('/users', dataController.getData);

// // const port = 5000;

// // app.listen(process.env.PORT || port);

// var server = app.listen(5000, function () {
//   console.log("app running on port.", server.address().port);
// });