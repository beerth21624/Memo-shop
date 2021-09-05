const { ViewModuleSharp } = require('@material-ui/icons');
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    require: [true, 'โปรดใส่ชื่อสินค้า'],
  },
  desc: {
    type: String,
    require: [true, 'โปรดใส่คำอธิบายสินค้า'],
  },
  price: {
    type: Number,
    require: [true, 'โปรดใส่ราคาสินค้า'],
  },
  category: {
    type: String,
    require: [true, 'โปรดใส่หมวดหมู่สินค้า'],
  },
});

module.exports = mongoose.model('Product', productSchema);
