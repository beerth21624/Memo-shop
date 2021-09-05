import React from 'react';
import {
  createTheme,
  makeStyles,
  ThemeProvider,
} from '@material-ui/core/styles';
import Navbar from '../components/Home/Navbar';

import { Grid } from '@material-ui/core';
import { Container } from '@material-ui/core';
import { Box } from '@material-ui/core';
import { Paper } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { Button } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2C2B2B',
    },
    secondary: {
      main: '#a36955',
    },
  },
});

const useStyles = makeStyles({
  root: {
    backgroundImage:
      'linear-gradient(rgba( 0, 0, 0, 0.7), rgba( 0,0,0,0.3)),url(https://images.unsplash.com/photo-1502176747191-3354e2597a5f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=818&q=80)',
    backgroundSize: 'cover',
    minHeight: '100vh',
  },
  Paper: {
    borderRadius: '30px',
    width: '100%',
    minHeight: '80vh',
    display: 'flex',
    flexDirection: 'column',
    marginTop: '50px',
  },
  rootImg: {
    padding: '10px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: '90%',
    height: 500,
  },
  detail: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    padding: '100px 30px 100px 10px',
    height: '100%',
    textAlign: 'center',
    borderLeft: '2px solid lightgray',
  },
  Button: {
    color: 'white',
    width: '200px',
  },
  boxDesc: {
    display: 'flex',
    flexDirection: 'column',
    padding: '50px 100px',
    borderTop: '2px solid lightgray',
  },
});

const Product = () => {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <Grid md={12} className={classes.root}>
        <Navbar />
        <Container maxWidth="lg">
          <Paper className={classes.Paper}>
            <Grid container md={12}>
              <Grid item md={6} className={classes.rootImg}>
                <img
                  className={classes.img}
                  src="https://static.wixstatic.com/media/b3db52_95396623076b49dcb19b23c44b03d1df~mv2.jpg/v1/fill/w_551,h_551,al_c,q_85,usm_0.66_1.00_0.01/b3db52_95396623076b49dcb19b23c44b03d1df~mv2.webp"
                  alt=""
                />
              </Grid>
              <Grid item md={6}>
                <Box className={classes.detail}>
                  <Box display="flex" flexDirection="column">
                    <Typography variant="h5" gutterBottom>
                      DOD ONE POLE TENT Tan (S) 3P
                    </Typography>
                    <Typography>
                      ราคา <span>4500</span> บาท
                    </Typography>
                  </Box>
                  <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                  >
                    <Button
                      variant="contained"
                      color="primary"
                      className={classes.Button}
                    >
                      เพิ่มลงในรถเข็น
                    </Button>
                  </Box>
                </Box>
              </Grid>
            </Grid>
            <Grid container md={12}>
              <Box className={classes.boxDesc}>
                <Typography variant="h5" gutterBottom>
                  รายละเอียดสินค้า
                </Typography>
                <Typography variant="body">
                  เต็นท์ทรงกระโจม สำหรับ 3 คน เหมาะกับเดอะแก็งค์และครอบครัวเล็กๆ
                  กางง่าย เก็บง่าย ทำความสะอาดง่าย เพราะเป็นเต็นท์แบบเสาเดียว
                  สไตล์คูลๆ ตัวเต็นท์เคลือบกันแสงไว้ในตัวผ้า ทำให้แสง
                  และความร้อนผ่านเข้ามาข้างในได้ยาก
                  เหมาะกับการนอนหลับยาวๆในวันพักผ่อน
                </Typography>
              </Box>
            </Grid>
          </Paper>
        </Container>
      </Grid>
    </ThemeProvider>
  );
};

export default Product;
