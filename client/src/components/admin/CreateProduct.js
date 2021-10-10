import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
} from '@material-ui/core';
import { TextareaAutosize } from '@material-ui/core';
import { useSelector } from 'react-redux';
import Alert from '@material-ui/lab/Alert';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { storage } from '../firebase';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  paperImg: {
    width: '80%',
    height: '550px',
    margin: '50px auto',
    borderRadius: '20px',
    cursor: 'pointer',
  },
  uploadImg: {
    width: '100%',
    height: '200%',
  },
  field: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: '10px',
    margin: '5px 0',
  },
  label: {
    color: 'white',
  },
  select: {
    width: '10vw',
    backgroundColor: 'white',
    margin: '15px 3px',
  },
  textarea: {
    border: 'none',
    width: '80%',
    '&:focus': {
      outline: 'none',
    },
    resize: 'none',
    fontSize: '1.3rem',
    borderRadius: '10px',
    padding: '10px',
    margin: '5px 0',
  },
  pulish: {
    backgroundColor: 'green',
    color: 'white',
  },
});

const CreateProduct = () => {
  const classes = useStyles();
  const [category, setCategory] = useState('');
  const [Name, setName] = useState('');
  const [Price, setPrice] = useState('');
  const [Desc, setDesc] = useState('');
  const token = useSelector((state) => state.auth.token);
  const [Success, setSuccess] = useState(false);
  const [PreviewImage, setPreviewImage] = useState('/images/upload.jpg');
  // const storage = getStorage();

  useEffect(() => {
    setSuccess(false);
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newProduct = await axios.post(
      '/product/create',
      {
        name: Name,
        desc: Desc,
        image: PreviewImage,
        price: Price,
        category: category,
      },
      {
        headers: {
          token: `Bearer ${token}`,
        },
      }
    );
    newProduct && setSuccess(true);
    newProduct && clear();
    setTimeout(() => {
      setSuccess(false);
    }, 3000);
  };
  function clear() {
    setName('');
    setDesc('');
    setPrice('');
    setCategory('');
    setPreviewImage('');
  }
  const handleFilePic = (e) => {
    const filePic = e.target.files[0];
    console.log(filePic);
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

  return (
    <Grid item container className={classes.root}>
      <Box padding="0px 10% 0px 5%">
        {Success && <Alert severity="success">Sucess</Alert>}
      </Box>
      <Grid item container>
        <Grid item md={6} display="flex">
          <label htmlFor="uploadFileImg">
            <Paper
              className={classes.paperImg}
              style={{
                background: `url(${PreviewImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            ></Paper>
          </label>
          <input
            accept="image/*"
            id="uploadFileImg"
            multiple
            type="file"
            onChange={handleFilePic}
            style={{ display: 'none' }}
          />
        </Grid>
        <Grid
          item
          md={6}
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <Typography
            variant="h5"
            paragraph
            style={{ color: 'white', marginTop: '50px' }}
          >
            Create product
          </Typography>
          <Box width="100%">
            <form onSubmit={handleSubmit}>
              <Box display="flex" flexDirection="column" margin="10px auto">
                <label id="P_name" className={classes.label}>
                  Product Name
                </label>
                <TextField
                  value={Name}
                  id="P_name"
                  className={classes.field}
                  variant="outlined"
                  onChange={(e) => setName(e.target.value)}
                ></TextField>
              </Box>
              <Box display="flex" flexDirection="column" margin="10px auto">
                <label id="P_price" className={classes.label}>
                  Price
                </label>
                <TextField
                  value={Price}
                  id="P_price"
                  className={classes.field}
                  variant="outlined"
                  onChange={(e) => setPrice(e.target.value)}
                ></TextField>
              </Box>
              <Box sx={{ minWidth: 120 }}>
                <FormControl variant="filled" className={classes.select}>
                  <InputLabel id="demo-simple-select-label">
                    category
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={category}
                    label="category"
                    onChange={(e) => setCategory(e.target.value)}
                  >
                    <MenuItem value="tent">tent</MenuItem>
                    <MenuItem value="ascessory">ascessory</MenuItem>
                    <MenuItem value="cooking">cooking</MenuItem>
                    <MenuItem value="costumn">costumn</MenuItem>
                  </Select>
                </FormControl>
                <Box display="flex" flexDirection="column" margin="10px auto">
                  <label id="P_desc" className={classes.label}>
                    Description
                  </label>
                  <TextareaAutosize
                    value={Desc}
                    id="P_desc"
                    type="text"
                    aria-label="minimum height"
                    minRows={7}
                    className={classes.textarea}
                    onChange={(e) => setDesc(e.target.value)}
                  ></TextareaAutosize>
                </Box>
              </Box>
              <Button
                type="submit"
                className={classes.pulish}
                variant="contained"
              >
                pulish
              </Button>
            </form>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CreateProduct;
