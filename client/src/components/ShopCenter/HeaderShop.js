import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    width: '100vw',
    height: '87vh',
    marginTop: '-80px',
    backgroundImage:
      'linear-gradient(rgba( 0, 0, 0, 0.7), rgba( 0,0,0,0.3)),url(https://images.unsplash.com/photo-1414016642750-7fdd78dc33d9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1049&q=80)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: 'white',
    fontSize: '60px',
    fontFamily: 'Prompt',
    fontWeight: 500,
  },
  Button: {
    backgroundColor: 'green',
    borderRadius: '20px',
    color: 'white',
    width: 300,
    marginTop: '10px',
  },
});

const HeaderShop = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Box display="flex" flexDirection="column">
        <Typography className={classes.title}>เต้นท์</Typography>
      </Box>
    </Box>
  );
};

export default HeaderShop;
