// Created 10/21/2015 by Jason Yi
// Last modified by Jason Yi on 10/21/2015

var express = require('express');

var app = express();

var port = process.env.PORT || 3000;

app.get('/', function(req, res){
  res.send('Shit is live');
});

app.listen(port, function(){
  console.log('running on port: ' + port);
});
