var express = require('express');
var app = express();
var bodyParser = require('body-parser');
// var Films = require("./client/src/models/films");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//PASSES A PATH TO DIRECOTRY YOU WANT TO BE "PUBLIC"
app.use(express.static('client/build'));


var filmRouter = require('./controllers/films.js');
app.use("/api/films", filmRouter);



app.listen(3000, function () {
  console.log('App running on port ' + this.address().port);
});
