import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles({
  rootCard: {
    maxWidth: 455,
    textAlign: 'center',
    boxShadow: 'none',
  },
  media: {
    height: 340,
  },
});

const CardShop = () => {
  const classes = useStyles();
  return (
    <Card className={classes.rootCard}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://static.wixstatic.com/media/b3db52_95396623076b49dcb19b23c44b03d1df~mv2.jpg/v1/fill/w_306,h_306,al_c,q_80,usm_0.66_1.00_0.01/b3db52_95396623076b49dcb19b23c44b03d1df~mv2.webp"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="subtitle1" component="h2">
            DOD ONE POLE TENT Tan (S) 3P
          </Typography>
          <Typography gutterBottom variant="caption" component="h2">
            ฿<span>4500</span>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CardShop;
