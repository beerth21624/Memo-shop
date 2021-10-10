import React from 'react';
import Navbar from '../components/Home/Navbar';
import Header from '../components/Home/Header';
import Sponser from '../components/Home/Sponser';
import Category from '../components/Home/Category';
import Footer from '../components/Footer/Footer';

import { Grid } from '@material-ui/core';
import { Container } from '@material-ui/core';

const Home = () => {
  return (
    <Grid container direction="column">
      <Grid item>
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
