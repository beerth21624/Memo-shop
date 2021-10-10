import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, CircularProgress } from '@material-ui/core';
import CardShop from './CardShop';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getProductCat } from '../../Redux/productRedux/productAction';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    minHeight: '70vh',
    padding: '50px',
    gap: '15px',
    position: 'relative',
  },
  load: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
});

const MainShop = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { productData, loading } = useSelector((state) => state.product);
  const { id } = useParams();
  useEffect(() => {
    dispatch(getProductCat(id));
  }, [dispatch, id]);
  return (
    <Box className={classes.root}>
      {productData.map((item) => (
        <CardShop key={item._id} product={item} />
      ))}
      {loading && (
        <Box className={classes.load}>
          <CircularProgress />
        </Box>
      )}
    </Box>
  );
};

export default MainShop;
