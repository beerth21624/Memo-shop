import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Navbar from '../components/Home/Navbar';
import Header from '../components/Home/Header';
import Sponser from '../components/Home/Sponser';
import Category from '../components/Home/Category';
import Footer from '../components/Footer/Footer';

import { Grid } from '@material-ui/core';
import { Container } from '@material-ui/core';

const useStyles = makeStyles({
  root: {},
});

const Home = () => {
  return (
    <Grid container direction="column">
      <Grid>
        <Navbar />
        <Header />
        <Sponser />
      </Grid>
      <Container maxWidth="lg">
        <Category />
      </Container>
      <Grid>
        <Footer />
      </Grid>
    </Grid>
  );
};

export default Home;
