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
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require('../middleware/validateToken');

router.route('/getProduct/:id').get(getProduct);
router.route('/getCat/:id').get(getProductCategory);
router.route('/create').post(verifyTokenAndAdmin, createProduct);
router.route('/getAll').get(getAllProduct);
router.route('/update/:id').put(verifyTokenAndAdmin, updateProduct);
router.route('/delete/:id').delete(verifyTokenAndAdmin, deleteProduct);

module.exports = router;
