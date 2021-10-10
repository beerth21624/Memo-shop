import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Navbar from '../components/Home/Navbar';
import HeaderShop from '../components/ShopCenter/HeaderShop';
import Footer from '../components/Footer/Footer';
import CategoryShop from '../components/ShopCenter/CategoryShop';
import MainShop from '../components/ShopCenter/MainShop';
import { Grid } from '@material-ui/core';
import { Container } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    backgroundColor: '#F3F3F3',
  },
});

const ShopCenter = () => {
  const classes = useStyles();
  return (
    <Grid container direction="column">
      <Grid>
        <Navbar />
        <HeaderShop />
      </Grid>
      <Container maxWidth="lg" className={classes.root}>
        <Grid container direction="row">
          <Grid item md={2}>
            <CategoryShop />
          </Grid>
          <Grid item md={10}>
            <MainShop />
          </Grid>
        </Grid>
      </Container>
      <Grid>
        <Footer />
      </Grid>
    </Grid>
  );
};

export default ShopCenter;
