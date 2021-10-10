import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Button, Grid, Typography } from '@material-ui/core';
import Navbar from '../components/Home/Navbar';
import CreateProduct from '../components/admin/CreateProduct';
import UpdateProduct from '../components/admin/UpdateProduct';
import ShowProduct from '../components/admin/ShowProduct';
import AllUser from '../components/admin/AllUser';
import { useLocation, useParams } from 'react-router';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    backgroundColor: 'black',
    minHeight: '100vh',
  },
  button: {
    width: '100%',
    '&:hover': {
      backgroundColor: '#B6B6B6',
    },
  },
  buttonHover: {
    width: '100%',
    backgroundColor: 'green',
    '&:hover': {
      backgroundColor: 'green',
    },
  },
});

const Admin = () => {
  const classes = useStyles();
  const { id } = useParams();
  const location = useLocation();

  const currentLocation = location.pathname.split('/')[2];

  console.log(currentLocation);
  return (
    <div className={classes.root}>
      <Navbar />
      <Grid container>
        <Grid item md={2} padding="30px">
          <Box
            display="flex"
            flexDirection="column"
            padding="50px 5px 0px 30px"
            gridGap="10px"
          >
            <Typography
              variant="h4"
              style={{
                margin: 'auto',
                color: 'white',
                fontSize: '30px',
                marginBottom: '20px',
              }}
            >
              You are admin...
            </Typography>
            <Button variant="contained">Home</Button>
            <Link to="/admin/allUser" className="link">
              {id === 'allUser' ? (
                <Button className={classes.buttonHover} variant="contained">
                  user
                </Button>
              ) : (
                <Button className={classes.button} variant="contained">
                  user
                </Button>
              )}
            </Link>
            <Link to="/admin/create" className="link">
              {id === 'create' ? (
                <Button className={classes.buttonHover} variant="contained">
                  Create
                </Button>
              ) : (
                <Button className={classes.button} variant="contained">
                  Create
                </Button>
              )}
            </Link>
            <Link to="/admin/product" className="link">
              {id === 'product' ? (
                <Button className={classes.buttonHover} variant="contained">
                  Product
                </Button>
              ) : (
                <Button className={classes.button} variant="contained">
                  Product
                </Button>
              )}
            </Link>
          </Box>
        </Grid>
        <Grid item container md={10}>
          {id === 'allUser' && <AllUser />}
          {id === 'create' && <CreateProduct />}
          {id === 'product' && <ShowProduct />}
          {currentLocation === 'update' && <UpdateProduct />}
        </Grid>
      </Grid>
    </div>
  );
};

export default Admin;
