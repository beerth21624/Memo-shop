import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import { Box } from '@material-ui/core';
import { Card } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { CardActionArea } from '@material-ui/core';
import { Link } from 'react-router-dom';
const useStyles = makeStyles({
  root: {
    zIndex: '99',
  },
  logo: {
    width: '220px',
    height: '60px',
  },
  icon: {
    gap: '10px',
    marginTop: '15px',
  },
  iconItem: {
    color: 'white',
  },
  card1: {
    backgroundImage:
      'linear-gradient(rgba( 0, 0, 0, 0.6), rgba( 0,0,0,0.3)),url(https://images.unsplash.com/photo-1455496231601-e6195da1f841?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1095&q=80)',
    backgroundPosition: 'center',
    borderRadius: '10px',
  },
  card2: {
    backgroundImage:
      'linear-gradient(rgba( 0, 0, 0, 0.5), rgba( 0,0,0,0.2)),url(https://images.unsplash.com/photo-1493244040629-496f6d136cc4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1032&q=80)',
    borderRadius: '10px',
  },
  card3: {
    backgroundImage:
      'linear-gradient(rgba( 0, 0, 0, 0.5), rgba( 0,0,0,0.3)),url(https://images.unsplash.com/photo-1466220549276-aef9ce186540?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80)',
    backgroundPosition: 'center',
    borderRadius: '10px',
  },
  card4: {
    backgroundImage:
      'linear-gradient(rgba( 0, 0, 0, 0.6), rgba( 0,0,0,0.7)),url(https://images.unsplash.com/photo-1603994009456-2d70669cf49a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60)',
    borderRadius: '10px',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
  paper: {
    height: '40vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: 'white',
    fontSize: '45px',
    fontFamily: 'Prompt',
    fontWeight: 500,
  },
});

const Navbar = () => {
  const classes = useStyles();
  return (
    <Grid container md={12} spacing={2}>
      <Grid item md={6}>
        <Link to="/product/tent" className="link">
          <Card className={classes.card1}>
            <CardActionArea className={classes.paper}>
              <Typography className={classes.title}>เต้นท์</Typography>
            </CardActionArea>
          </Card>
        </Link>
      </Grid>
      <Grid item md={6}>
        <Link to="/product/acsessory" className="link">
          <Card className={classes.card2}>
            <CardActionArea className={classes.paper}>
              <Typography className={classes.title}>
                อุปกรณ์ตั้งแคมป์
              </Typography>
            </CardActionArea>
          </Card>
        </Link>
      </Grid>
      <Grid item md={6}>
        <Link to="/product/cooking" className="link">
          <Card className={classes.card3}>
            <CardActionArea className={classes.paper}>
              <Typography className={classes.title}>อุปกรณ์ทำอาหาร</Typography>
            </CardActionArea>
          </Card>
        </Link>
      </Grid>
      <Grid item md={6}>
        <Link to="/product/costume" className="link">
          <Card className={classes.card4}>
            <CardActionArea className={classes.paper}>
              <Typography className={classes.title}>เครื่องแต่งกาย</Typography>
            </CardActionArea>
          </Card>
        </Link>
      </Grid>
    </Grid>
  );
};

export default Navbar;
