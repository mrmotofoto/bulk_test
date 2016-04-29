
var mongoose = require('mongoose');

var orderSchema = new mongoose.Schema({
    code: String,
    timingbox1: String,
    timingbox2: String,
    cust_timing: String,
    bgColor: String,
    baseLogo: String,
    baseOffer: String,
    baseDealer: String,
    baseAddress1: String,
    baseURL: String,
    notes: String,
    active: 0,
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