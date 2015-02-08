'use strict';

var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
  firstName:String,
  lastName:String,
  email:String,
  address:String,
  city:String,
  ST:String,
  zip:String,
  order:[
  {
  quantity:0,
  color:String,
  size:String
  }
  ]

});

module.exports = mongoose.model('User', userSchema);
