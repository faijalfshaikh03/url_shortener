const express = require('express');
const URL = require('../models/url');
const { handleGetALLURL,handleCreateURL, getURL } = require('../controllers/url');

const router = express.Router();

router.get('/',handleGetALLURL)
router.get('/:id',getURL)

router.post('/',handleCreateURL);


module.exports = router;