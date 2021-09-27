const Order = require('../models/Order');

//create
exports.createOrder = async (req, res) => {
  try {
    const newOrder = await Order.create(req.body);
    res.status(200).json(newOrder);
  } catch (err) {
    res.status(500).json(err);
  }
};

//getUserOrder
exports.getUserOrder = async (req, res) => {
  try {
    const order = await Order.find({ userId: req.params.userId });
    res.status(200).json(order);
  } catch (err) {
    res.status(500).json(err);
  }
};

//getAll
exports.getAllOrder = async (req, res) => {
  try {
    const orders = await Order.find();
    res.status(500).json(orders);
  } catch (err) {
    res.status(500).json(err);
  }
};

//update
exports.updateOrder = async (req, res) => {
  try {
    const newOrder = await Order.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(newOrder);
  } catch (err) {
    res.status(500).json(err);
  }
};

//delete
exports.deleteOrder = async (req, res) => {
  try {
    await Order.findByIdAndDelete(req.params.id);
    res.status(200).json('Order has been deleted...');
  } catch (err) {
    res.status(500).json(err);
  }
};
