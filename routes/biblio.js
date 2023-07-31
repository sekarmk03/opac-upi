const express = require('express');
const router = express.Router();
const c = require('../controllers');

router.get('/basic-search', c.biblio.basicSearch);

module.exports = router;