const express = require('express');
const router = express.Router();
const {
  createOrder,
  getUserOrder,
  getAllOrder,
  updateOrder,
  deleteOrder,
} = require('../controllers/order');
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require('../middleware/validateToken');

router.route('/create').post(verifyToken, createOrder);
router.route('/user/:userId').get(verifyTokenAndAuthorization, getUserOrder);
router.route('/all').get(verifyTokenAndAdmin, getAllOrder);
router.route('/update/:id').put(verifyTokenAndAdmin, updateOrder);
router.route('/delete/:id').delete(verifyTokenAndAdmin, deleteOrder);

module.exports = router;
