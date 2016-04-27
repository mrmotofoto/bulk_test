var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var passport = require('passport');
var LocalStrategy = require('passport-local');

// var Club = require('./models/club');
// var Comment = require('./models/comment');
// var User = require('./models/user');
//var seedDB = require('./seeds');
//var methodOverride = require('method-override');


//REQUIRING Routes--------------------------------------------
// var commentRoutes = require('./routes/*');
// var clubRoutes = require('./routes/*');

var indexRoutes = require('./routes/clients');
mongoose.connect('mongodb://localhost/bulk_upload_test');

app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');
app.use(express.static(__dirname + "/public"));
//app.use(methodOverride("_method"))





app.use(indexRoutes);
//app.use("/clubs/:id/comments",commentRoutes);
//app.use("/clubs", clubRoutes);


app.listen(process.env.PORT, process.env.IP, function(){
   console.log('Server Is Running'); 
});
