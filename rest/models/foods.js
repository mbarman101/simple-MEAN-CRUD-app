'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//var bcrypt = require('bcrypt-nodejs');

var foodSchema = Schema({
    foodName : String
});

module.exports = mongoose.model('Food', foodSchema);



