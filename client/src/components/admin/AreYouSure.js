import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Button, Paper, Typography } from '@material-ui/core';
const useStyles = makeStyles({
  modal: {
    position: 'absolute',
    top: '50%',
    left: '52%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
  },
  paperModal: {
    width: '350px',
    height: '200px',
    borderRadius: '20px',
  },
  buttonYes: {
    width: '100px',
    backgroundColor: 'green',
    color: 'white',
  },
  buttonNo: {
    width: '100px',
    backgroundColor: '#DA4747',
    color: 'white',
  },
});
const AreYouSure = ({ handleDelete, setOpen }) => {
  const classes = useStyles();
  return (
    <Box className={classes.modal}>
      <Paper className={classes.paperModal}>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          width="100%"
          height="100%"
          gridGap="30px"
        >
          <Typography variant="h6">Are you sure ?</Typography>
          <Box display="flex" gridGap="10px">
            <Button
              className={classes.buttonYes}
              variant="contained"
              onClick={handleDelete}
            >
              yes
            </Button>
            <Button
              className={classes.buttonNo}
              variant="contained"
              onClick={() => setOpen(false)}
            >
              no
            </Button>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};

export default AreYouSure;
