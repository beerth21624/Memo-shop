import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '130px',
    gap: '5px',
  },
  Button: {
    width: '100%',
    fontWeight: 500,
    fontSize: 17,
  },
});

const CategoryShop = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Box textAlign="center">
        <Typography variant="h5">หมวดหมู่สินค้า</Typography>
      </Box>
      <Link to="/shop/tent" className="link">
        <Button className={classes.Button}>เต้นท์</Button>
      </Link>
      <Link to="/shop/ascessory" className="link">
        <Button className={classes.Button}>อุปกรณ์ตั้งแคมป์</Button>
      </Link>
      <Link to="/shop/cooking" className="link">
        <Button className={classes.Button}>อุปกรณ์ทำอาหาร</Button>
      </Link>
      <Link to="/shop/costumn" className="link">
        <Button className={classes.Button}>เครื่องแต่งกาย</Button>
      </Link>
    </Box>
  );
};

export default CategoryShop;
