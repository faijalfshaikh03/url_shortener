const URL = require('../models/url')

async function handleGetALLURL(req,res){
    const allURLs = await URL.find({});
    
    return res.send(allURLs);
}

async function handleCreateURL(req,res) {
    const shortID = shortid.generate();
    const body = req.body;

    const result = await URL.create({
        shortid: shortID,
        redirectURL: body.redirectURL,
        visitHistory: []
    })
    
    res.send("Short id generated successfully")
}




module.exports = {
    handleGetALLURL,
    handleCreateURL
}