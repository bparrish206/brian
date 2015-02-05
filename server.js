"use strict";

var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.static(__dirname + '/build'));
mongoose.connect(process.env.MONGO_URL || 'mongodb://localhost/cush');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {//verifies db is connected
});

app.set('port', process.env.PORT || 8000);
app.listen(app.get('port'), function() {
  console.log('server running on port: %d', app.get('port'));
});

module.exports = app;
