import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import CardShop from './CardShop';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    minHeight: '70vh',
    padding: '50px',
    gap: '15px',
  },
});

const MainShop = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <CardShop />
      <CardShop />
      <CardShop />
      <CardShop />
      <CardShop />
      <CardShop />
    </Box>
  );
};

export default MainShop;
