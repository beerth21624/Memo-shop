const express = require('express');
const router = express.Router();
const {
  getProductCategory,
  createProduct,
  getAllProduct,
  getProduct,
  updateProduct,
  deleteProduct,
} = require('../controllers/product');

router.route('/getProduct/:id').get(getProduct);
router.route('/getCat/:id').get(getProductCategory);
router.route('/create').post(createProduct);
router.route('/getAll').get(getAllProduct);
router.route('/update/:id').put(updateProduct);
router.route('/delete/:id').delete(deleteProduct);

module.exports = router;
