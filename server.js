var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var Films = require("./client/src/models/films");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static('client/build'));

app.get("/api/films", function(req, res){
  res.json(Films());
});





app.listen(3000, function () {
  console.log('App running on port ' + this.address().port);
});
