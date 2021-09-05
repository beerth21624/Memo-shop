import axios from 'axios';

export const RegisterFetch = async (user) => {
  try {
    const userData = await axios.post('/auth/register', user);
    console.log(userData);
  } catch (err) {
    console.error(err);
  }
};

export const LoginFetch = async (user) => {
  try {
    const userData = await axios.post('/auth/login', user);
    console.log(userData);
  } catch (err) {
    console.error(err);
  }
};
