const {Schema, model} = require("mongoose");

const productSchema = new Schema({
    title: {
        type:String,
        required:true
    },
    price: {       
        type:Number,
        default:0
    },
    thumbnail: String
});

module.exports = model("product", productSchema);