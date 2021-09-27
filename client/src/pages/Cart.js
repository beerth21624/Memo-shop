import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Navbar from '../components/Home/Navbar';
import { Grid } from '@material-ui/core';
import { Container } from '@material-ui/core';
import { Paper } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { Box } from '@material-ui/core';
import { Button } from '@material-ui/core';
import CardProductCart from '../components/cardProductCart';

const useStyles = makeStyles({
  root: {
    backgroundImage:
      'linear-gradient(rgba( 0, 0, 0, 0.8), rgba( 0,0,0,0.3)),url(https://images.unsplash.com/photo-1523026447058-6a3420892f4a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80)',
    backgroundSize: 'cover',
    minHeight: '100vh',
    paddingBottom: '100px',
  },
  Paper: {
    borderRadius: '30px',
    width: '100%',
    minHeight: '80vh',
    display: 'flex',
    justifyContent: 'row',
    marginTop: '50px',
  },
  BoxList: {
    width: '65%',
    borderRight: '2px solid lightgray',
    padding: '80px',
  },
  BoxOrder: {
    width: '35%',
    padding: '10px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  order: {
    width: '80%',
    minHeight: '30vh',
    marginTop: '-50px',
    display: 'flex',
    flexDirection: 'column',
  },
});

const Cart = () => {
  const classes = useStyles();
  return (
    <Grid md={12} className={classes.root}>
      <Navbar />
      <Container maxWidth="lg">
        <Paper className={classes.Paper}>
          <Box className={classes.BoxList}>
            <Typography variant="h4">รายการคำสั่งซื้อ</Typography>
            <CardProductCart />
            <CardProductCart />
            <CardProductCart />
            <CardProductCart />
          </Box>
          <Box className={classes.BoxOrder}>
            <Box className={classes.order}>
              <Typography variant="h4" paragraph>
                รวมการสั่งซื้อ
              </Typography>
              <Box
                display="flex"
                flexDirection="row"
                justifyContent="space-between"
                marginBottom="8px"
              >
                <Typography>ราคาสินค้า</Typography>
                <Typography>
                  <span>4500</span> บาท{' '}
                </Typography>
              </Box>
              <Box
                display="flex"
                flexDirection="row"
                justifyContent="space-between"
                marginBottom="8px"
              >
                <Typography>ค่าจัดส่ง</Typography>
                <Typography>
                  <span>45</span> บาท{' '}
                </Typography>
              </Box>
              <Box
                display="flex"
                flexDirection="row"
                justifyContent="space-between"
                marginBottom="13px"
              >
                <Typography>ส่วนลด</Typography>
                <Typography>
                  <span>0</span> บาท{' '}
                </Typography>
              </Box>
              <Box
                display="flex"
                flexDirection="row"
                justifyContent="space-between"
                marginBottom="8px"
              >
                <Typography variant="h5">รวม</Typography>
                <Typography variant="h5">
                  <span>4545</span> บาท{' '}
                </Typography>
              </Box>
              <Button variant="contained">ชำระเงิน</Button>
            </Box>
          </Box>
        </Paper>
      </Container>
    </Grid>
  );
};

export default Cart;
