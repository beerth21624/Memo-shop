const express = require('express');
const router = express.Router();
const {
  updateUser,
  deleteUser,
  getUser,
  getAllUser,
} = require('../controllers/user');

router.route('/update/:id').put(updateUser);
router.route('/delete/:id').delete(deleteUser);
router.route('/all').get(getAllUser);
router.route('/:id').get(getUser);

module.exports = router;
