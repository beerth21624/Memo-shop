import {
  FETCH_START,
  FETCH_PRODUCT,
  FETCH_SUCCESS,
  FETCH_FAIL,
  FETCH_PRODUCT_ID,
} from './productAction';

const initialState = {
  productData: [],
  singleProduct: {},
  loading: false,
  error: false,
};

export default function productReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_START:
      return { ...state, loading: true };
    case FETCH_PRODUCT:
      return {
        ...state,
        productData: action.payload,
      };
    case FETCH_PRODUCT_ID:
      return {
        ...state,
        singleProduct: action.payload,
      };
    case FETCH_SUCCESS:
      return { ...state, loading: false };
    case FETCH_FAIL:
      return { ...state, error: true };
    default:
      return state;
  }
}
