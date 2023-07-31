const express = require('express');
const router = express.Router();
const c = require('../controllers');

router.get('/', c.collection.index);

module.exports = router;