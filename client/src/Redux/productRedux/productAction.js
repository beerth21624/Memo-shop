import axios from 'axios';

export const FETCH_START = 'FETCH_START';
export const FETCH_PRODUCT = 'FETCH_PRODUCT';
export const FETCH_PRODUCT_ID = 'FETCH_PRODUCT_ID';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAIL = 'FETCH_FAIL';

export const getProductCat = (category) => {
  return async (dispatch) => {
    dispatch({
      type: FETCH_START,
    });
    try {
      const product = await axios.get('/product/getCat/' + category);
      dispatch({
        type: FETCH_PRODUCT,
        payload: product.data,
      });
      dispatch({
        type: FETCH_SUCCESS,
      });
    } catch (err) {
      dispatch({
        type: FETCH_FAIL,
      });
    }
  };
};

export const getProduct = (id) => {
  return async (dispatch) => {
    dispatch({ type: FETCH_START });
    try {
      const product = await axios.get('/product/getProduct/' + id);
      dispatch({
        type: FETCH_PRODUCT_ID,
        payload: product.data,
      });
    } catch (err) {
      dispatch({
        type: FETCH_FAIL,
      });
    }
  };
};
