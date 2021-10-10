const express = require('express');
const router = express.Router();
const {
  updateUser,
  deleteUser,
  getUser,
  getAllUser,
} = require('../controllers/user');
const {
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require('../middleware/validateToken');

router.route('/update/:id').put(verifyTokenAndAuthorization, updateUser);
router.route('/delete/:id').delete(verifyTokenAndAuthorization, deleteUser);
router.route('/deleteUser/:id').delete(verifyTokenAndAdmin, deleteUser);
router.route('/all').get(verifyTokenAndAdmin, getAllUser);
router.route('/:id').get(verifyTokenAndAdmin, getUser);

module.exports = router;
