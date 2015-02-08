"use strict";

var User = require('../model/user');

module.exports = function(app) {
  app.get('/buy', function(req, res) {
  var order = new User();
  order.firstName = req.body.firstName;
  order.lastName = req.body.lastName;
  order.email = req.body.email;
  order.address = req.body.address;
  order.city = req.body.city;
  order.ST = req.body.ST;
  order.zip = req.body.zip;
  order.order = req.body.order;
  order.save(function(err, data) {
    if (err) return res.status(500).send('server error');
    res.json(data);
  });
  });
};
