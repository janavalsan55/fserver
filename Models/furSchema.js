const mongoose = require('mongoose')

const furSchema = new mongoose.Schema({
    pname:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    },
    overview:{
        type:String,
        required:true
    },
    mobile:{
        type:String,
        required:true
    },
    uname:{
        type:String,
        required:true
    },
    place:{
        type:String,
        required:true
    },
    pimage:{
        type:String,
        required:true
    },
    userid:{
        type:String,
        required:true
    },
    access:{
        type:String,
        required:true
    }
})

const furs = mongoose.model('furs',furSchema)

module.exports = furs