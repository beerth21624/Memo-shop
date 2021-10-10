const express = require('express');
const router = express.Router();
const {
  createCart,
  getUserCart,
  getAllCart,
  updateCart,
  deleteCart,
} = require('../controllers/cart');
const {
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require('../middleware/validateToken');

router.route('/create').post(createCart);
router.route('/user/:id').get(verifyTokenAndAuthorization, getUserCart);
router.route('/all').get(verifyTokenAndAdmin, getAllCart);
router.route('/update/:id').put(verifyTokenAndAuthorization, updateCart);
router.route('/delete/:id').delete(verifyTokenAndAuthorization, deleteCart);

module.exports = router;
