import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import { Box } from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from 'react-router-dom';
import { Typography } from '@material-ui/core';
import { Button } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { Paper } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    width: '100%',
    height: '20vh',
    borderBottom: '2px solid lightgray',
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

const CardProductCart = () => {
  const classes = useStyles();
  return (
    <Box display="flex" flexDirection="row" className={classes.root}>
      <Box className={classes.boxImg}>
        <img
          className={classes.img}
          src="https://static.wixstatic.com/media/b3db52_95396623076b49dcb19b23c44b03d1df~mv2.jpg/v1/fill/w_551,h_551,al_c,q_85,usm_0.66_1.00_0.01/b3db52_95396623076b49dcb19b23c44b03d1df~mv2.webp"
          alt=""
        />
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        className={classes.boxDesc}
      >
        <Typography variant="h6">DOD ONE POLE TENT Tan (S) 3P</Typography>
        <Box display="flex" flexDirection="row" margin="20px 0px">
          <Button variant="contained" className={classes.countIcon}>
            <RemoveIcon />
          </Button>
          <Paper className={classes.countIcon}>
            <Typography>1</Typography>
          </Paper>
          <Button variant="contained" className={classes.countIcon}>
            <AddIcon />
          </Button>
        </Box>
        <Typography variant="h6">
          ฿<span>4500</span>
        </Typography>
      </Box>
    </Box>
  );
};

export default CardProductCart;
