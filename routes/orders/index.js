var express = require('express');
var router = express.Router();
var Order = require('../../models/order');
//var passport = require('passport');
//var User = require('../models/user');



router.get('/', function(req, res) {
   res.render('index');
});  


//SHOW ALL ORDERS--------VIEW----------------
router.get('/orders', function(req, res) {
    Order.find({}, function(err, data) {
       if(err) {
           console.log(err);
       } else {
            res.render('viewOrders', {orders: data});
       }
    });    
});



//SHOW ORDER FORM--------------------------------
router.get('/orders/new', function(req, res) {
   res.render('new'); 
});


//MULTIPLE DEALER FORMS-------------------------------
router.get('/orders/onedealer', function(req, res) {
   res.render('onedealer'); 
});

router.get('/orders/twodealer', function(req, res) {
   res.render('twodealer'); 
});

router.get('/orders/threedealer', function(req, res) {
   res.render('threedealer'); 
});

router.get('/orders/fourdealer', function(req, res) {
   res.render('fourdealer'); 
});




//SHOW ONE ORDER--------------------------------
router.get('/orders/:id', function(req, res) {
     Order.findById(req.params.id, function(err, foundOrder) {
         if(err) {
             throw err;
         }
        res.render("show", {foundOrder : foundOrder});    
     });       
});


//CREATE NEW ORDER--------------------------------
router.post('/orders', function(req, res) {
    var inputDefault = "n/a";
    var colorDefault = "None";
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
    var baseDealer2 = req.body.baseDealer2 ? req.body.baseDealer2 : inputDefault;
    var baseAddress2 = req.body.baseAddress2 ? req.body.baseAddress2 : inputDefault;
    var baseLocation2 = req.body.baseLocation2 ? req.body.baseLocation2 : inputDefault;
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
        baseDealer2: baseDealer2,
        baseAddress2: baseAddress2,
        baseLocation2: baseLocation2,
        baseURL: baseURL,
        notes: notes,
        approved: approved,
        timestamp: timestamp
};
    
    Order.create(orderInvoice, function(err, orderInvoice) {
      if(err) {
          throw err;
      }  else {
            res.redirect('/orders');
         }
    }); 
});


//GET EDIT ORDER FORM-------------------------------
router.get('/orders/:id/edit', function(req, res) {
 Order.findById(req.params.id, function(err, foundOrder) {
     if(err) {
         throw err;
     }
    res.render("edit", {foundOrder : foundOrder});    
 });    
});


//UPDATE ORDER FORM-------------------------------
router.put("/orders/:id", function(req, res) {
    Order.findById(req.params.id, function(err, foundOrder) {
        console.log(foundOrder);
           if(err) {
               res.redirect("/orders");
           } else {
              Order.findByIdAndUpdate(req.params.id, req.body.foundOrder, function(err, updated) {
                 console.log(req.params.id);
                 console.log(req.body.foundOrder);
                 if(err) {
                     res.redirect('/orders');
                 }  else {
                     res.redirect('/orders/');
                 }
          });               
        }
    });
});

//DELETE ORDER ------------------------------------
router.delete("/orders/:id/", function(req, res) {
     Order.findById(req.params.id, function(err, foundOrder) {
            console.log(foundOrder);
              if(err) {
                  res.redirect("/orders");
              } else {
                  Order.findByIdAndRemove(req.params.id, function(err, updated) {
                     console.log(req.params.id);
                     if(err) {
                         res.redirect('/orders');
                     }  else {
                         res.redirect('/orders/');
                     }
              });               
            }
    });  
});


module.exports = router;