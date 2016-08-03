
var express    = require('express');      
var app        = express();                
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('ui'));

var mongoose   = require('mongoose');
var configDB = require('./config/db.js');
mongoose.connect(configDB.url); 

var port = process.env.PORT || 8090;        
           

var router = require('./routes/index')(app); 

//app.use('/api', require('./routes/loginRouter'));

app.listen(port);
console.log('Server running at port : ' + port);
//module.exports = app;