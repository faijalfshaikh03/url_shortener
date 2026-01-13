const mongoose = require('mongoose');

async function connectMongoDB(url){
    return await mongoose.connect('mongodb://127.0.0.1/urlproject');
}

module.exports = connectMongoDB;