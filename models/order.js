
var mongoose = require('mongoose');

var orderSchema = new mongoose.Schema({
    name: String,
    address: String,
    hrcontact: String,
    hrphone: String,
    hremail: String,
    gmcontact: String,
    gmphone: String,
    gmemail: String,
    distance: String,
    notes: String,
    image: String
    // client: {
    //     id: {
    //       type: mongoose.Schema.Types.ObjectId,
    //       ref: "User"
    //     },
    //     username: String
    // }
    
});

module.exports = mongoose.model("Order", orderSchema);