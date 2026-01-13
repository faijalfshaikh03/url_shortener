const URL = require('../models/url')
const shortid = require('shortid')

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


async function getURL(req,res) {
    const result = await URL.findOneAndUpdate({shortid:req.params.id}, {
        $push:{
            visitHistory: {
                timeStamps: Date.now()
            }
        }
    })

    res.redirect(result.redirectURL);
}



module.exports = {
    handleGetALLURL,
    handleCreateURL,
    getURL
}