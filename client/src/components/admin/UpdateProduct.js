import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Box,
  Button,
  CircularProgress,
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
import { useHistory, useParams } from 'react-router';
import axios from 'axios';
import { useSelector } from 'react-redux';
const useStyles = makeStyles({
  root: {
    display: 'flex',
  },
  paperImg: {
    width: '80%',
    height: '550px',
    backgroundImage: 'url(/images/upload.jpg)',
    backgroundSize: 'cover',
    borderRadius: '20px',
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
  save: {
    backgroundColor: 'green',
    color: 'white',
    width: '100px',
  },
  cancle: {
    backgroundColor: 'red',
    color: 'white',
    width: '100px',
  },
  loading: {
    color: 'white',
    position: 'absolute',
    top: '50%',
    left: '55%',
  },
});

const UpdateProduct = () => {
  const classes = useStyles();
  const [category, setCategory] = useState('');
  const { id } = useParams();
  const [Name, setName] = useState('');
  const [Price, setPrice] = useState('');
  const [Desc, setDesc] = useState('');
  const token = useSelector((state) => state.auth.token);
  const history = useHistory();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      const product = await axios.get('/product/getProduct/' + id);
      setName(product.data.name);
      setPrice(product.data.price);
      setDesc(product.data.desc);
      setCategory(product.data.category);
      setLoading(false);
    };
    fetchProduct();
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);
    const newProduct = await axios.put(
      '/product/update/' + id,
      {
        name: Name,
        desc: Desc,
        image:
          'https://static.wixstatic.com/media/b3db52_4321c828edb441119cf5c04b06698b13~mv2.jpg/v1/fill/w_306,h_306,al_c,q_80,usm_0.66_1.00_0.01/b3db52_4321c828edb441119cf5c04b06698b13~mv2.webp',
        price: Price,
        category: category,
      },
      {
        headers: {
          token: `Bearer ${token}`,
        },
      }
    );
    newProduct && setLoading(false);
    newProduct && history.push('/admin/product');
  };
  return (
    <Grid item container className={classes.root}>
      {loading ? (
        <Box>
          <CircularProgress className={classes.loading} />
        </Box>
      ) : (
        <>
          <Grid item md={6} display="flex">
            <Paper
              className={classes.paperImg}
              style={{ margin: '50px auto' }}
            ></Paper>
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
              Update product
            </Typography>
            <Box width="100%">
              <form onSubmit={handleUpdate}>
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
                <Box display="flex" gridGap="10px">
                  <Button
                    className={classes.save}
                    variant="contained"
                    onClick={handleUpdate}
                  >
                    save
                  </Button>
                  <Button className={classes.cancle} variant="contained">
                    cancle
                  </Button>
                </Box>
              </form>
            </Box>
          </Grid>
        </>
      )}
    </Grid>
  );
};

export default UpdateProduct;
