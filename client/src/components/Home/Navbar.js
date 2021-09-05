import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import { Box } from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    zIndex: '99',
  },
  logo: {
    width: '220px',
    height: '60px',
  },
  icon: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'baseline',
    gap: '10px',
    marginTop: '15px',
  },
  iconItem: {
    color: 'white',
    marginBottom: '-5px',
    cursor: 'pointer',
  },
  title: {
    color: 'white',
  },
});

const Navbar = () => {
  const classes = useStyles();
  return (
    <Grid item container>
      <Box
        className={classes.root}
        width="100vw"
        height="80px"
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        padding="15px 30px"
      >
        <Link to="/">
          <img className={classes.logo} src="/images/logo.png" alt="" />
        </Link>
        <Box className={classes.icon}>
          <Link to="/register" className="link">
            <Button className={classes.title}>Register</Button>
          </Link>
          <Link to="/login" className="link">
            <Button className={classes.title}>Login</Button>
          </Link>
          <Link to="/cart">
            <Box marginBottom="-5px">
              <ShoppingCartIcon className={classes.iconItem} />
            </Box>
          </Link>
        </Box>
      </Box>
    </Grid>
  );
};

export default Navbar;
