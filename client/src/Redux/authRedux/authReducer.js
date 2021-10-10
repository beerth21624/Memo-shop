import {
  LOGIN_START,
  LOGIN_USER,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_USER,
} from './authAction';

const initialState = {
  loading: false,
  token: JSON.parse(localStorage.getItem('token')) || null,
  user: JSON.parse(localStorage.getItem('user')) || null,
  errorMsg: null,
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_START:
      return { ...state, loading: true };
    case LOGIN_USER:
      return {
        ...state,
        token: action.payload.token,
        user: action.payload.user,
      };
    case LOGIN_SUCCESS:
      return { ...state, loading: false };
    case LOGIN_FAIL:
      return { ...state, errorMsg: action.payload };
    case LOGOUT_USER:
      return { ...state, token: null, user: null };

    default:
      return state;
  }
}
