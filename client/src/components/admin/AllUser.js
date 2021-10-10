import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Box,
  CircularProgress,
  Grid,
  Modal,
  Typography,
} from '@material-ui/core';
import CardUser from './CardUser';
import axios from 'axios';
import { useSelector } from 'react-redux';
import AreYouSure from './AreYouSure';

const useStyles = makeStyles({
  loading: {
    color: 'white',
    position: 'absolute',
    top: '50%',
    left: '50%',
  },
  modal: {
    position: 'absolute',
    top: '50%',
    left: '52%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
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
const AllUser = () => {
  const classes = useStyles();
  const token = useSelector((state) => state.auth.token);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [userDel, setUserDel] = useState('');
  const [DelSuccess, setDelSuccess] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      setLoading(true);
      const user = await axios.get('/user/all', {
        headers: {
          token: `Bearer ${token}`,
        },
      });
      user && setLoading(false);
      setUsers(user.data);
      setDelSuccess(false);
    };
    fetchUser();
  }, [token, DelSuccess]);

  const handleClose = () => {
    setOpen(false);
    setUserDel('');
  };

  const handleDelete = async () => {
    const deleteSuccess = await axios.delete('/user/deleteUser/' + userDel, {
      headers: {
        token: `Bearer ${token}`,
      },
    });
    deleteSuccess && setOpen(false);
    deleteSuccess && setDelSuccess(true);
  };
  return (
    <Grid item container display="flex">
      <Box padding="45px">
        <Typography
          variant="h4"
          style={{ color: 'white', marginBottom: '20px' }}
        >
          All user
        </Typography>
        {loading ? (
          <Box>
            <CircularProgress className={classes.loading} />
          </Box>
        ) : (
          <Box
            display="flex"
            flexDirection="row"
            flexWrap="wrap"
            gridGap="20px"
          >
            {users.map((user) => (
              <CardUser
                key={user._id}
                userData={user}
                setOpen={setOpen}
                setUserDelete={setUserDel}
              />
            ))}
          </Box>
        )}
      </Box>
      <div>
        <Modal open={open} onClose={handleClose}>
          <AreYouSure handleDelete={handleDelete} setOpen={setOpen} />
        </Modal>
      </div>
    </Grid>
  );
};

export default AllUser;
