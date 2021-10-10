import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Avatar, Badge, Box } from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { LogoutAction } from '../../Redux/authRedux/authAction';
import { Modal, Typography } from '@material-ui/core';
import { Cancel } from '@material-ui/icons';
import { useHistory } from 'react-router';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { storage } from '../firebase';
import axios from 'axios';

const useStyles = makeStyles({
  root: {
    zIndex: '99',
  },
  logo: {
    width: '220px',
    height: '60px',
  },
  icon: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'baseline',
    gap: '10px',
    marginTop: '15px',
  },
  iconItem: {
    display: 'flex',
    color: 'white',
    margin: 'auto',
    cursor: 'pointer',
  },
  title: {
    color: 'white',
    display: 'flex',
    margin: 'auto',
  },
  avartar: {
    display: 'flex',
    margin: 'auto',
    cursor: 'pointer',
  },
  modal: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    backgroundColor: 'white',
    borderRadius: '20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    gap: '20px',
    padding: '15px 0px 30px 0px',
  },
  avartarModal: {
    display: 'flex',
    width: 100,
    height: 100,
    cursor: 'pointer',
  },
  btnSave: {
    width: 90,
    backgroundColor: 'green',
  },
  btnCancle: {
    width: 90,
    backgroundColor: '#DA4747',
  },
});

const Navbar = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const cart = useSelector((state) => state.cart.products);
  const { token, user } = auth;
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const history = useHistory();
  const [PreviewImage, setPreviewImage] = useState('');
  const [loading, setLoading] = useState(false);
  const [YesOrNo, setYesOrNo] = useState(false);

  const haddleLogout = () => {
    dispatch(LogoutAction());
  };

  const changePath = () => {
    history.push('/cart');
  };

  const handleFilePic = (e) => {
    const filePic = e.target.files[0];
    setYesOrNo(true);
    if (filePic) {
      const reader = new FileReader();
      reader.readAsDataURL(filePic);
      reader.onloadend = () => {
        setPreviewImage(reader.result);
      };

      Upload(filePic);
    }
  };

  const Upload = (filePic) => {
    const metadata = {
      contentType: 'image/jpeg',
    };
    const storeRef = ref(storage, `images/${filePic.name}`);
    const uploadTask = uploadBytesResumable(storeRef, filePic, metadata);
    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        switch (snapshot.state) {
          case 'paused':
            console.log('Upload is paused');
            break;
          case 'running':
            console.log('Upload is running');
            break;
          default:
        }
      },
      (error) => {
        switch (error.code) {
          case 'storage/unauthorized':
            break;
          case 'storage/canceled':
            break;
          case 'storage/unknown':
            break;
          default:
        }
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log('File available at', downloadURL);
          setPreviewImage(downloadURL);
        });
      }
    );
  };

  const handleSaveImage = async () => {
    setLoading(true);
    setYesOrNo(false);
    const saveImage = await axios.put(
      '/user/update/' + user._id,
      {
        profilePic: PreviewImage,
      },
      {
        headers: {
          token: `Bearer ${token}`,
        },
      }
    );
    saveImage && setLoading(false);
  };

  const handleCancle = () => {
    setPreviewImage('');
    setYesOrNo(false);
  };
  return (
    <Box
      className={classes.root}
      width="100vw"
      height="80px"
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      padding="15px 30px"
    >
      <Link to="/">
        <img className={classes.logo} src="/images/logo.png" alt="" />
      </Link>
      <Box className={classes.icon}>
        {token ? (
          <>
            <Button className={classes.title} onClick={handleOpen}>
              {user?.username}
            </Button>
            <Avatar
              alt=""
              src={user?.profilePic}
              className={classes.avartar}
              onClick={handleOpen}
            />
            <Badge
              badgeContent={cart.length}
              color="primary"
              className={classes.iconItem}
            >
              <ShoppingCartIcon onClick={changePath} />
            </Badge>
          </>
        ) : (
          <>
            <Link to="/register" className="link">
              <Button className={classes.title}>Register</Button>
            </Link>
            <Link to="/login" className="link">
              <Button className={classes.title}>Login</Button>
            </Link>
            <Link to="/cart">
              <Box marginBottom="-5px">
                <ShoppingCartIcon className={classes.iconItem} />
              </Box>
            </Link>
          </>
        )}
      </Box>
      <Modal open={open} onClose={handleClose}>
        <Box className={classes.modal}>
          <Box display="flex" marginLeft="auto" paddingRight="20px">
            <Cancel onClick={handleClose} style={{ cursor: 'pointer' }} />
          </Box>
          <label htmlFor="uploadFileImg">
            <Avatar
              alt=""
              src={PreviewImage || user?.profilePic}
              className={classes.avartarModal}
            />
          </label>
          <input
            accept="image/*"
            id="uploadFileImg"
            multiple
            type="file"
            onChange={handleFilePic}
            style={{ display: 'none' }}
          />
          {YesOrNo && (
            <Box display="flex" gridGap="10px">
              <Button
                className={classes.btnSave}
                variant="contained"
                onClick={handleSaveImage}
              >
                save
              </Button>
              <Button
                onClick={handleCancle}
                className={classes.btnCancle}
                variant="contained"
              >
                cancle
              </Button>
            </Box>
          )}
          {loading && <Typography>Updating...</Typography>}
          <Typography variant="h5">{user?.username}</Typography>
          {token ? (
            <Button variant="outlined" onClick={haddleLogout}>
              LOGOUT
            </Button>
          ) : (
            <Link to="/login" className="link">
              <Button variant="outlined">Login</Button>
            </Link>
          )}
          {user?.isAdmin && (
            <Link to="/admin" className="link">
              <Button variant="outlined">Admin dashboard</Button>
            </Link>
          )}
        </Box>
      </Modal>
    </Box>
  );
};

export default Navbar;
