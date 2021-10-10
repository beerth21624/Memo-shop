import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Avatar, Box, Button, Paper, Typography } from '@material-ui/core';
const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'row',
    padding: '20px',
    borderRadius: '20px',
    backgroundColor: '#E6E6E6',
    minWidth: 420,
  },
  image: {
    width: '150px',
    height: '150px',
  },
  button: {
    backgroundColor: '#DA4747',
    color: 'white',
    width: '100px',
    marginTop: '10px',
  },
});
const CardUser = ({ userData, setOpen, setUserDelete }) => {
  const classes = useStyles();
  const { username, email, profilePic, isAdmin, _id } = userData;

  const handleDelete = () => {
    setOpen(true);
    setUserDelete(_id);
  };

  return (
    <Paper className={classes.root}>
      <Box>
        <Avatar className={classes.image} alt="" src={profilePic} />
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        padding="10px"
        justifyContent="center"
      >
        <Typography variant="body1">
          Username: <span>{username}</span>
        </Typography>
        <Typography variant="body1">
          Email: <span>{email}</span>
        </Typography>
        <Typography variant="body1">
          Admin: <span>{isAdmin ? 'yes' : 'no'}</span>
        </Typography>
        <Button
          className={classes.button}
          variant="contained"
          onClick={handleDelete}
        >
          delete
        </Button>
      </Box>
    </Paper>
  );
};

export default CardUser;
