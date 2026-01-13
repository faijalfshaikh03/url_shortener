const URL = require('../models/url')

async function handleGetALLURL(req,res){
    const allURLs = await URL.find({});
    
    return res.send(allURLs);
}




module.exports = {
    handleGetALLURL
}