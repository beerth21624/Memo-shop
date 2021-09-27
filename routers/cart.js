const express = require('express');
const router = express.Router();
const {
  createCart,
  getUserCart,
  getAllCart,
  updateCart,
  deleteCart,
} = require('../controllers/cart');

router.route('/create').post(createCart);
router.route('/user/:id').get(getUserCart);
router.route('/all').get(getAllCart);
router.route('/update/:id').put(updateCart);
router.route('/delete/:id').delete(deleteCart);

module.exports = router;
