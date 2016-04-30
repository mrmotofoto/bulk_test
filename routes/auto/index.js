var express = require('express');
var router = express.Router();
var Order = require('../../models/order');
//var passport = require('passport');
//var User = require('../models/user');




router.get('/', function(req, res) {
    Order.find({}, function(err, data) {
           if(err) {
               console.log(err);
           } else {
                res.render('index', {orders: data});
           }
        });    
});  


//SHOW ALL ORDERS--------------------------------
router.get('/orders', function(req, res) {
    Order.find({}, function(err, data) {
       if(err) {
           console.log(err);
       } else {
            res.render('index', {orders: data});
       }
    });    
});

//SHOW ORDER FORM--------------------------------
router.get('/orders/new', function(req, res) {
   res.render('new'); 
});

//SHOW ONE ORDER--------------------------------
router.get('/orders/:id', function(req, res) {
   res.render('show'); 
});

//CREATE NEW ORDER--------------------------------
router.post('/orders', function(req, res) {
    var inputDefault = "false";
    var colorDefault = "#FFFFFF";
    var baseCode = req.body.baseCode ? req.body.baseCode : inputDefault;
    var timingbox1 = req.body.timingbox1 ? req.body.timingbox1 : inputDefault;
    var timingbox2 = req.body.timingbox2 ? req.body.timingbox2 : inputDefault;
    var cust_timing = req.body.cust_timing ? req.body.cust_timing : inputDefault;
    var bgColor = req.body.bgColor ? req.body.bgColor : colorDefault;
    var baseLogo = req.body.baseLogo ? req.body.baseLogo : inputDefault;
    var baseOffer = req.body.baseOffer ? req.body.baseOffer : inputDefault;
    var baseDealer = req.body.baseDealer ? req.body.baseDealer : inputDefault;
    var baseAddress1 = req.body.baseAddress1 ? req.body.baseAddress1 : inputDefault;
    var baseLocation1 = req.body.baseLocation1 ? req.body.baseLocation1 : inputDefault;
    var baseURL = req.body.baseURL ? req.body.baseURL : inputDefault;
    var notes = req.body.notes ? req.body.notes : inputDefault;
    var timestamp = Date();
    var approved = 1;


    var orderInvoice = {
        baseCode: baseCode,
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
        approved: approved,
        timestamp: timestamp
};
    
 Order.create(orderInvoice, function(err, orderInvoice) {
      if(err) {
          console.log(err);
      }  else {
            res.redirect('/orders');
         }
    }); 
});





//GET EDIT EXISTING ORDER FORM-------------------------------
router.get('/orders/:id/edit', function(req, res) {
 Order.findById(req.params.id, function(err, foundOrder) {
     if(err) {
         throw err;
     }
    res.render("edit", {foundOrder : foundOrder});    
 });    
});



router.post('/order/confirm', function(req, res) {
    // console.log("We Are Here");
    // console.log(req.orderInvoice.baseCode);
    res.render('confirm');
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