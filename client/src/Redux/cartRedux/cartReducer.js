import { ADD_TO_CART, GET_USER_CART } from './cartAction';

const initialState = {
  products: [],
};
export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART:
      return { ...state, products: action.payload.data.products };
    case GET_USER_CART:
      return { ...state, products: action.payload };
    default:
      return state;
  }
}
