var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Car = require('../models/Car.js');

/* GET /tests listing. */
router.get('/', function(req, res, next) {
  Car.find(function (err, cars) {
    if (err) return next(err);
    res.json(cars);
  });
});

router.post('/', function(req, res, next) {
  Car.create(req.body, function (err, post) {

    console.log(req.body);

    if (err) return next(err);
    res.json(post);
  });
})

router.delete('/:id', function(req, res, next) {
  Car.findByIdAndRemove(req.params.id, req.body, function (err, post) {

    console.log("Remove: " + req.params.id);

    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;