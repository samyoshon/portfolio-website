// 'use strict'

var express = require("express");
var app     = express();
var path    = require("path");
var port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/view'));
//Store all HTML files in view folder.
app.use(express.static(__dirname + '/scripts'));
//Store all JS and CSS in Scripts folder.

app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
  //__dirname : It will resolve to your project folder.
});

app.listen(port);

console.log("Running at Port 3000");