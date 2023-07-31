const express = require('express');
const router = express.Router();

const biblio = require('./biblio');
const collection = require('./collection');

router.use('/biblios', biblio);
router.use('/collections', collection);

module.exports = router;