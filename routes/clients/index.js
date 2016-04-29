
var express = require('express');
var router = express.Router();
var passport = require('passport');
var Order = require('../../models/order');
//var User = require('../models/user');


//REDIRECT TO /clubs------------------------------------------------------------


router.get('/', function(req, res) {
   res.render('index'); 
});


router.post('/order', function(req, res) {
    var inputDefault = "false";
    var colorDefault = "#FFFFFF";
    var code = req.body.code ? req.body.code : inputDefault;
    var timingbox1 = req.body.timingbox1 ? req.body.timingbox1 : inputDefault;
    var timingbox2 = req.body.timingbox2 ? req.body.timingbox2 : inputDefault;
    var cust_timing = req.body.cust_timing ? req.body.cust_timing : inputDefault;;
    var bgColor = req.body.bgColor ? req.body.bgColor : colorDefault;
    var baseLogo = req.body.baseLogo ? req.body.baseLogo : inputDefault;
    var baseOffer = req.body.baseOffer ? req.body.baseOffer : inputDefault;
    var baseDealer = req.body.baseDealer ? req.body.baseDealer : inputDefault;
    var baseAddress1 = req.body.baseAddress1 ? req.body.baseAddress1 : inputDefault;
    var baseLocation1 = req.body.baseLocation1 ? req.body.baseLocation1 : inputDefault;
    var baseURL = req.body.baseURL ? req.body.baseURL : inputDefault;
    var notes = req.body.notes ? req.body.notes : inputDefault;
    var timestamp = Date();
    var active = 0;

// var lower3rdnull = req.body.lower3rdnull ? req.body.lower3rdnull : inputDefault;
// var lower3rdPhone = req.body.lower3rdPhone ? req.body.lower3rdPhone : inputDefault;
// var lower3rdURL = req.body.lower3rdURL ? req.body.lower3rdURL : inputDefault;
// var lower3rdLogo = req.body.lower3rdLogo ? req.body.lower3rdLogo : inputDefault;
// var baseAddress2 = req.body.baseAddress2 ? req.body.baseAddress2 : inputDefault;

    var orderInvoice = {
        code: code,
        timingbox1: timingbox1,
        timingbox2: timingbox2,
        cust_timing: cust_timing,
        baseLogo: baseLogo,
        baseOffer: baseOffer,
        bgColor: bgColor,
        baseDealer: baseDealer,
        baseAddress1: baseAddress1,
        baseLocation1: baseLocation1,
        baseURL: baseURL,
        notes: notes,
        active: active,
        timestamp: timestamp
        
// baseAddress2: baseAddress2,
// lower3rdnull: lower3rdnull,
// lower3rdPhone: lower3rdPhone,
// lower3rdURL: lower3rdURL,
// lower3rdLogo: lower3rdLogo,

    }
    
 Order.create(orderInvoice, function(err, orderInvoice) {
      if(err) {
          console.log(err);
      }  else {
          console.log(orderInvoice);
           res.render('order', {orderInvoice: orderInvoice});
         }
    }); 

  
});




router.post('/order/confirm', function(req, res) {
    res.render('confirm')
    // var inputDefault = "false";
    // var code = req.body.code ? req.body.code : inputDefault;;
    // var checkbox1 = req.body.checkbox1 ? req.body.checkbox1 : inputDefault;
    // var checkbox2 = req.body.checkbox2 ? req.body.checkbox2 : inputDefault;
    // var checkbox3 = req.body.checkbox3 ? req.body.checkbox3 : inputDefault;
    // var notes = req.body.notes ? req.body.notes : inputDefault;
    
    // var orderInvoice = {
    //     code: code,
    //     checkbox1: checkbox1,
    //     checkbox2: checkbox2,
    //     checkbox3: checkbox3,
    //     notes: notes
    // }

//   res.render('confirm', {orderInvoice: orderInvoice});
});


//SHOW REGISTRATION FORM--------------------------------------------------------
// router.get('/register', function(req, res) {
//   res.render('register'); 
// });

//SUBMIT REGISTRATION-----------------------------------------------------------
// router.post('/register', function(req, res) {
//     var newUser = new User({username: req.body.username});
//     User.register(newUser, req.body.password, function(err, user) {
//         if(err) {
//             console.log(err);
//             return res.render('register');
//         } 
//           passport.authenticate('local')(req, res, function() {
//           res.redirect('/clubs'); 
//         });
//     });
// });


//SHOW LOGIN FORM---------------------------------------------------------------
// router.get('/login', function(req, res) {
//   res.render('login'); 
// });

//LOGIN LOGIC-------------------------------------------------------------------
// router.post('/login', passport.authenticate('local', 
//     {
//         successRedirect: "/clubs",
//         failureRedirect: "/login"
//     }), function(req, res) {
// });


//LOGOUT LOGIC------------------------------------------------------------------
// router.get('/logout', function(req, res) {
//     req.logout();
//     res.redirect('/clubs')
// });

//MIDDLEWARE--------------------------------------------------------------------
// function isLoggedIn(req, res, next) {
//     if(req.isAuthenticated()) {
//         return next();
//     }
//     res.redirect('/login');
// }

module.exports = router;