const express = require('express');
const URL = require('../models/url');
const { handleGetALLURL,handleCreateURL } = require('../controllers/url');

const router = express.Router();

router.get('/',handleGetALLURL)

router.post('/',handleCreateURL);


module.exports = router;