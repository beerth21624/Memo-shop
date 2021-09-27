const express = require('express');
const router = express.Router();
const {
  createOrder,
  getUserOrder,
  getAllOrder,
  updateOrder,
  deleteOrder,
} = require('../controllers/order');

router.route('/create').post(createOrder);
router.route('/user/:userId').get(getUserOrder);
router.route('/all').get(getAllOrder);
router.route('/update/:id').put(updateOrder);
router.route('/delete/:id').delete(deleteOrder);

module.exports = router;
