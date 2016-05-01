var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var passport = require('passport');
var LocalStrategy = require('passport-local');
var Order = require('./models/order');
mongoose.connect('mongodb://localhost/bulk_upload_test');
var methodOverride = require('method-override');

// var User = require('./models/user');
//var seedDB = require('./seeds');
//var methodOverride = require('method-override');


//REQUIRING Routes--------------------------------------------

var orderRoutes = require('./routes/orders');


app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));
app.use(orderRoutes);


app.listen(process.env.PORT, process.env.IP, function(){
   console.log('Server Is Running'); 
});
