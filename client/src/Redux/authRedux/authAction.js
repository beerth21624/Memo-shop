import axios from 'axios';
import { push } from 'connected-react-router';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_USER = 'LOGIN_USER';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';
export const LOGOUT_USER = 'LOGOUT_USER';

export const RegisterAction = (user) => {
  return async (dispatch) => {
    dispatch({ type: LOGIN_START });
    try {
      await axios.post('/auth/register', user);
      dispatch({ type: LOGIN_SUCCESS });
      dispatch(push('/login'));
    } catch (err) {
      dispatch({
        type: LOGIN_FAIL,
        payload: err.response.data.error,
      });
    }
  };
};

export const LoginAction = (user) => {
  return async (dispatch) => {
    dispatch({ type: LOGIN_START });
    try {
      const userData = await axios.post('/auth/login', user);
      console.log(userData.data);
      localStorage.setItem('token', JSON.stringify(userData.data.token));
      localStorage.setItem('user', JSON.stringify(userData.data.user));
      dispatch({
        type: LOGIN_USER,
        payload: userData.data,
      });
      dispatch({ type: LOGIN_SUCCESS });
      dispatch(push('/'));
    } catch (err) {
      dispatch({
        type: LOGIN_FAIL,
        payload: err.response.data.error,
      });
    }
  };
};

export const LogoutAction = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
  return {
    type: LOGOUT_USER,
  };
};
