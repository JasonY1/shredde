// Created 10/21/2015 by Jason Yi
// Last modified by Jason Yi on 10/21/2015

var express = require('express');

var app = express();

var port = process.env.PORT || 3000;

var swoleRouter = express.Router();

swoleRouter.route('/Swole')
.get(function(req,res){
  var responseJson = { hello: "This is it"};
  
  res.json(responseJson);
});

app.use('/', swoleRouter);




app.get('/', function(req, res){
  res.send('Shit is live');
});

app.listen(port, function(){
  console.log('Gulp is running on PORT: ' + port);
});
