const express = require('express');
const router = express.Router();
const c = require('../controllers');

router.get('/basic-search', c.biblio.basicSearch);
router.get('/basic-search/:biblio_id', c.biblio.biblioDetail);

module.exports = router;