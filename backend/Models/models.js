const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        minLength: 3,
        maxLength: 20,
        required: true
    },
    lastName: {
        type: String,
        minLength: 3,
        maxLength: 15,
        required: true
    },
    email: {
        type: String,
        unique:true,
        required: true,
    },
    password: {
        type: String,
        required: true, 
    },
    age: {
        type: Number,
        required: true,

    },
    phone: {
        type:  String,
        required: true
    }
    


})

exports.userModel = new mongoose.model('user', userSchema)

const productSchema = new mongoose.Schema({
    title: String,
    desc: String,
    price: Number,
    rating: String,
    category: String,
    image: String,
}, {timestamp: true})
productModel =  mongoose.model('Product', productSchema)
module.exports = productModel