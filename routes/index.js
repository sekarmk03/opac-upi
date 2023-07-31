const express = require('express');
const router = express.Router();

const biblio = require('./biblio');
const collection = require('./collection');
const material = require('./material');

router.use('/biblios', biblio);
router.use('/collections', collection);
router.use('/materials', material);

module.exports = router;