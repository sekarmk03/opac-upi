const express = require('express');
const router = express.Router();

const biblio = require('./biblio');
const collection = require('./collection');
const material = require('./material');
const biblioField = require('./biblio_field');

router.use('/biblios', biblio);
router.use('/collections', collection);
router.use('/materials', material);
router.use('/details', biblioField);

module.exports = router;