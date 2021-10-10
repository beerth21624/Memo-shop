import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Button, Paper, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'row',
    padding: '20px',
    borderRadius: '20px',
    backgroundColor: '#E6E6E6',
    flex: 1,
    // minWidth: '30vw',
  },
  image: {
    width: '200px',
    height: '200px',
  },
  button: {
    backgroundColor: 'green',
    color: 'white',
  },
});
const CardProduct = ({ productData, setProductId, setOpen }) => {
  const classes = useStyles();
  const { _id, name, image, price, category } = productData;
  const handleDelete = () => {
    setProductId(_id);
    setOpen(true);
  };

  return (
    <Paper className={classes.root}>
      <Box>
        <img className={classes.image} src={image} alt="" />
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        padding="10px"
        justifyContent="center"
      >
        <Typography variant="body1">
          name: <span>{name}</span>
        </Typography>
        <Typography variant="body1">
          price: ฿<span>{price}</span>
        </Typography>
        <Typography variant="body1">
          category: <span>{category}</span>
        </Typography>
        <Box display="flex" gridGap="10px" paddingTop="20px">
          {/* <Button className={classes.button} variant="contained">
            view
          </Button> */}
          <Link to={'/admin/update/' + _id} className="link">
            <Button className={classes.button} variant="contained">
              edit
            </Button>
          </Link>
          <Button
            className={classes.button}
            variant="contained"
            onClick={handleDelete}
          >
            delete
          </Button>
        </Box>
      </Box>
    </Paper>
  );
};

export default CardProduct;
