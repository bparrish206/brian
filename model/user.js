'use strict';

var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
  userFirstName:String,
  userLastName:String,
  userEmail:String,
  userAddress:String,
  userCity:String,
  userST:String,
  userZip:String,
  order:[
  {
  quantity:0,
  color:String,
  size:String
  }
  ]

});

module.exports = mongoose.model('User', userSchema);
