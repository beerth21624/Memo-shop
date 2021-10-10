import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import authReducer from './authRedux/authReducer';
import productReducer from './productRedux/productReducer';
import cartReducer from './cartRedux/cartReducer';
const combine = (history) =>
  combineReducers({
    router: connectRouter(history),
    auth: authReducer,
    product: productReducer,
    cart: cartReducer,
  });

export default combine;
