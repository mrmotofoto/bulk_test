
var mongoose = require('mongoose');

var orderSchema = new mongoose.Schema({
    baseCode: String,
    timingbox1: String,
    timingbox2: String,
    cust_timing: String,
    bgColor: String,
    baseLogo: String,
    baseOffer: String,
    baseDealer: String,
    baseAddress1: String,
    baseLocation1: String,
    baseDealer2: String,
    baseAddress2: String,
    baseLocation2: String,
    baseURL: String,
    notes: String,
    approved: 0,
    timestamp: Date
  
// lower3rdnull: String,
// lower3rdPhone: String,
// lower3rdURL: String,
// lower3rdLogo: String,

    // client: {
    //     id: {
    //       type: mongoose.Schema.Types.ObjectId,
    //       ref: "Client"
    //     },
    //     username: String
    // }
    
});

module.exports = mongoose.model("Order", orderSchema);