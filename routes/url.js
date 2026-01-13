const express = require('express');
const shortid = require('shortid');
const URL = require('../models/url');
const { handleGetALLURL } = require('../controllers/url');

const router = express.Router();

router.get('/',handleGetALLURL )

router.post('/',async (req,res) => {
    const shortID = shortid.generate();
    const body = req.body;

    const result = await URL.create({
        shortid: shortID,
        redirectURL: body.redirectURL,
        visitHistory: []
    })
    
    
    res.send("Short id generated successfully")
})


module.exports = router;