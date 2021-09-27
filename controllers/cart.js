const Cart = require('../models/Cart');

//create
exports.createCart = async (req, res) => {
  try {
    const newCart = await Cart.create(req.body);
    res.status(200).json(newCart);
  } catch (err) {
    res.status(500).json(err);
  }
};

//getUserProduct
exports.getUserCart = async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.params.id });
    res.status(200).json(cart);
  } catch (err) {
    res.status(500).json(err);
  }
};

//getAll
exports.getAllCart = async (req, res) => {
  try {
    const carts = await Cart.find();
    res.status(500).json(carts);
  } catch (err) {
    res.status(500).json(err);
  }
};

//update
exports.updateCart = async (req, res) => {
  try {
    const newCart = await Cart.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(newCart);
  } catch (err) {
    res.status(500).json(err);
  }
};

//delete
exports.deleteCart = async (req, res) => {
  try {
    await Cart.findByIdAndDelete(req.params.id);
    res.status(200).json('Cart has been deleted...');
  } catch (err) {
    res.status(500).json(err);
  }
};
