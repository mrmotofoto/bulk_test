
var mongoose = require('mongoose');

var orderSchema = new mongoose.Schema({
    code: String,
    timingbox1: String,
    timingbox2: String,
    cust_timing: String,
    lower3rdnull: String,
    lower3rdPhone: String,
    lower3rdURL: String,
    lower3rdLogo: String,
    baseURL: String,
    baseLogo: String,
    basePhone: String,
    baseDealer: String,
    baseAddress1: String,
    baseAddress2: String,
    notes: String,
    timestamp: Date
    
    // client: {
    //     id: {
    //       type: mongoose.Schema.Types.ObjectId,
    //       ref: "User"
    //     },
    //     username: String
    // }
    
});

module.exports = mongoose.model("Order", orderSchema);