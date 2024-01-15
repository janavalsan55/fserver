const mongoose = require('mongoose')
const validator = require('validator')

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    mobile:{
        type:String,
        required:true,
        
        
    },
    password:{
        type:String,
        required:true
    },
    access:{
        type:String,
        required:true
    }
})

const users = mongoose.model('users',userSchema)

module.exports = users