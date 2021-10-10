import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { Link } from 'react-router-dom';
const useStyles = makeStyles({
  rootCard: {
    width: 305,
    textAlign: 'center',
    boxShadow: 'none',
  },
  media: {
    height: 300,
  },
});

const CardShop = ({ product }) => {
  const classes = useStyles();
  const { name, image, price, _id } = product;
  return (
    <Link to={`/product/${_id}`} className="link">
      <Card className={classes.rootCard}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={image}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="subtitle1" component="h2">
              {name}
            </Typography>
            <Typography gutterBottom variant="caption" component="h2">
              ฿<span>{price}</span>
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
};

export default CardShop;
