const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRouter = require('./routers/auth');
const productRouter = require('./routers/product');

dotenv.config();
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log('connected to mongodb'))
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });

app.use('/api/auth', authRouter);
app.use('/api/product', productRouter);

app.listen(5000, () => {
  console.log('backend start');
});
