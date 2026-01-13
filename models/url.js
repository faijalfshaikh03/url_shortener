const mongoose = require('mongoose');
const shortid = require('shortid');


const urlSchema = new mongoose.Schema({
    shortid:{
        type: Number,
        required:true,
        unique:true
    },
    redirectURL: {
        type:String,
        required:true
    },
    visitHistory:{
        type: [
            {timeStamps:{
                type: Number
            }}
        ]
    }    
})


const URL = mongoose.model('url',urlSchema);

module.exports = URL;