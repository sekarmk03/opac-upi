const express = require('express');
const router = express.Router();

const biblio = require('./biblio');

router.use('/biblios', biblio);

module.exports = router;