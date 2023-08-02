const express = require('express');
const router = express.Router();
const c = require('../controllers');

router.get('/test', c.biblio.test);
router.get('/basic-search', c.biblio.basicSearch);
router.get('/:biblio_id', c.biblio.biblioDetail);

module.exports = router;