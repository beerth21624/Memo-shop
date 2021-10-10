import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { Button } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { Paper } from '@material-ui/core';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import { addProductCart } from '../Redux/cartRedux/cartAction';
import { useDispatch } from 'react-redux';
const useStyles = makeStyles({
  root: {
    width: '100%',
    height: '20vh',
    borderBottom: '2px solid lightgray',
    gap: 20,
  },
  boxImg: {
    width: '30%',
  },
  img: {
    width: '100%',
    height: '100%',
  },
  boxDesc: {
    width: '70%',
  },
  countIcon: {
    width: '60px',
    height: '30px',
    padding: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const CardProductCart = ({ product, user, token }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(product.quantity);

  useEffect(() => {
    dispatch(addProductCart(user, product, token, quantity));
  }, [quantity, user, product, token, dispatch]);

  const handleAddCart = () => {
    setQuantity(quantity + 1);
  };
  const handleRemoveCart = () => {
    setQuantity(quantity - 1);
  };
  return (
    <Box display="flex" flexDirection="row" className={classes.root}>
      <Box className={classes.boxImg}>
        <img className={classes.img} src={product.productImage} alt="" />
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        className={classes.boxDesc}
      >
        <Typography variant="h6">{product.productName}</Typography>
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          alignItems="baseline"
        >
          <Box display="flex" flexDirection="row" margin="20px 0px">
            <Button
              variant="contained"
              className={classes.countIcon}
              onClick={handleRemoveCart}
            >
              <RemoveIcon />
            </Button>
            <Paper className={classes.countIcon}>
              <Typography>{quantity}</Typography>
            </Paper>
            <Button
              variant="contained"
              className={classes.countIcon}
              onClick={handleAddCart}
            >
              <AddIcon />
            </Button>
          </Box>
          <DeleteOutlineIcon />
        </Box>
        <Typography variant="h6">
          ฿<span>{product.productPrice}</span>
        </Typography>
      </Box>
    </Box>
  );
};

export default CardProductCart;
