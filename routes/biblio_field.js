const express = require('express');
const router = express.Router();
const c = require('../controllers');

router.get('/publishers', c.biblioField.allPublishers);

module.exports = router;