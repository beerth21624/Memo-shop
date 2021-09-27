import { combineReducers } from 'redux';

import authReducer from './authRedux/authReducer';

export default combineReducers({
  auth: authReducer,
});
