const express = require('express');
const router = express.Router();
const { getProduct } = require('../controllers/product');

router.route('/getProduct/:id').get(getProduct);

module.exports = router;
