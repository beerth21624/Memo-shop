import React, { useState, useEffect } from 'react';
import { Box, Grid, Modal, Typography } from '@material-ui/core';
import CardProduct from './Cardproduct';
import axios from 'axios';
import AreYouSure from './AreYouSure';
import { useSelector } from 'react-redux';
const ShowProduct = () => {
  const [products, setProducts] = useState([]);
  const [open, setOpen] = useState(false);
  const [productId, setProductId] = useState('');
  const token = useSelector((state) => state.auth.token);
  const [DelSuccess, setDelSuccess] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      const product = await axios.get('/product/getAll');
      setProducts(product.data);
      setProductId('');
      setDelSuccess(false);
    };
    fetchProduct();
  }, [DelSuccess]);

  const handleClose = () => {
    setOpen(false);
    setProductId('');
  };

  const handleDelete = async () => {
    const deleteSuccess = await axios.delete('/product/delete/' + productId, {
      headers: {
        token: ` Bearer ${token}`,
      },
    });
    deleteSuccess && setDelSuccess(true);
    deleteSuccess && setOpen(false);
  };
  return (
    <Grid item container display="flex">
      <Box padding="45px">
        <Typography variant="h4" style={{ color: 'white' }}>
          All product
        </Typography>
        <Box display="flex" flexDirection="row" flexWrap="wrap" gridGap="20px">
          {products.map((product) => (
            <CardProduct
              key={product._id}
              productData={product}
              setProductId={setProductId}
              setOpen={setOpen}
            />
          ))}
        </Box>
      </Box>
      <div>
        <Modal open={open} onClose={handleClose}>
          <AreYouSure handleDelete={handleDelete} setOpen={setOpen} />
        </Modal>
      </div>
    </Grid>
  );
};

export default ShowProduct;
