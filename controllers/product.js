const Product = require('../models/Product');

//create
exports.createProduct = async (req, res) => {
  const { name, desc, image, price, category } = req.body;
  try {
    const product = await Product.create({
      name,
      desc,
      image,
      price,
      category,
    });

    res.status(201).json(product);
  } catch (err) {
    res.status(500).json(err);
  }
};

//getProductCategory
exports.getProductCategory = async (req, res) => {
  const category = req.params.id;
  try {
    const product = await Product.find({ category });
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json(err);
  }
};

//getAllProduct
exports.getAllProduct = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json(err);
  }
};

//getProduct
exports.getProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json(err);
  }
};

//update
exports.updateProduct = async (req, res) => {
  try {
    const newProduct = await Product.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(newProduct);
  } catch (err) {
    res.status(500).json(err);
  }
};

//delete
exports.deleteProduct = async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.status(200).json('product has been deleted...');
  } catch (err) {
    res.status(500).json(err);
  }
};
