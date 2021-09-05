import React, { useRef } from 'react';
import {
  makeStyles,
  createTheme,
  ThemeProvider,
} from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import Navbar from '../components/Home/Navbar';
import { Box } from '@material-ui/core';
import { Paper } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';
import { LoginFetch } from '../Redux/authRedux/authService';

const theme = createTheme({
  palette: {
    primary: {
      main: '#000000',
    },
    secondary: {
      main: '#a36955',
    },
  },
});
const useStyles = makeStyles({
  root: {
    backgroundImage:
      'linear-gradient(rgba( 0, 0, 0, 0.6), rgba( 0,0,0,0.3)),url(https://images.unsplash.com/photo-1533575770077-052fa2c609fc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80)',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    minHeight: '100vh',
  },
  paper: {
    width: '35vw',
    height: '60vh',
    backgroundColor: 'white',
    opacity: '0.7',
    padding: '50px',
    marginTop: '-20vh',
    borderRadius: '40px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  TextField: {
    border: '2px solid white',
  },
  form: {
    textAlign: 'center',
  },
  submit: {
    backgroundColor: 'green',
    color: 'white',
    marginTop: '20px',
  },
});

const Login = () => {
  const classes = useStyles();
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleLogin = (e) => {
    e.preventDefault();
    LoginFetch({
      email: emailRef.current.value,
      password: passwordRef.current.value,
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container md={12} className={classes.root}>
        <Navbar />
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          width="100vw"
        >
          <Paper className={classes.paper}>
            <form onSubmit={handleLogin} className={classes.form} noValidate>
              <Typography variant="h4" paragraph>
                เข้าสู่ระบบ
              </Typography>
              <TextField
                className={classes.TextField}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                inputRef={emailRef}
              />
              <TextField
                style={{ color: 'red' }}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                inputRef={passwordRef}
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                className={classes.submit}
              >
                Login
              </Button>
            </form>
          </Paper>
        </Box>
      </Grid>
    </ThemeProvider>
  );
};

export default Login;
