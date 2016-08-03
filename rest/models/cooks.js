'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;
//var bcrypt = require('bcrypt-nodejs');

var cookSchema = Schema({
    name : {first : String, last:String},
    fooditem_ids : [{ type : ObjectId, ref: 'Food'}]
});

module.exports = mongoose.model('Cook', cookSchema);



