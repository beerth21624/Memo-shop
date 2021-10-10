import axios from 'axios';
import {
  FETCH_START,
  FETCH_SUCCESS,
  FETCH_FAIL,
} from '../productRedux/productAction';
export const ADD_TO_CART = 'ADD_TO_CART';
export const GET_USER_CART = 'GET_USER_CART';

export const createCart = (user, product, token) => {
  const { _id, name, image, price } = product;
  return async (dispatch) => {
    try {
      const oldCart = await axios.get('/cart/user/' + user, {
        headers: {
          token: `Bearer ${token}`,
        },
      });
      const oldCartData = oldCart.data?.products;
      //เช็คว่าเคยมีใน cart หรือยัง
      if (oldCart.data) {
        const CheckCart = oldCartData.find(
          (p_item) => p_item.productId === _id
        );
        const updateProduct = [...oldCartData];
        //ถ้ามีก็เพิ่มจำนวนไป1
        if (CheckCart) {
          updateProduct.map((p_item) => {
            if (p_item.productId === _id) {
              p_item.quantity += 1;
            }
            return '';
          });

          const updateCart = await axios.put(
            '/cart/update/' + oldCart.data._id,
            {
              userId: user,
              products: [...updateProduct],
            },
            {
              headers: {
                token: `Bearer ${token}`,
              },
            }
          );
          dispatch({
            type: ADD_TO_CART,
            payload: updateCart,
          });
        } else {
          dispatch({
            type: FETCH_START,
          });
          try {
            const updateCart = await axios.put(
              '/cart/update/' + oldCart.data._id,
              {
                userId: user,
                products: [
                  ...oldCartData,
                  {
                    productId: _id,
                    productName: name,
                    productPrice: price,
                    productImage: image,
                    quantity: 1,
                  },
                ],
              },
              {
                headers: {
                  token: `Bearer ${token}`,
                },
              }
            );
            dispatch({
              type: ADD_TO_CART,
              payload: updateCart,
            });
            dispatch({
              type: FETCH_SUCCESS,
            });
          } catch (err) {
            dispatch({
              type: FETCH_FAIL,
            });
          }
        }
      } else {
        dispatch({
          type: FETCH_START,
        });
        const cart = await axios.post('/cart/create', {
          userId: user,
          products: [
            {
              productId: product,
              productName: name,
              productPrice: price,
              productImage: image,
              quantity: 1,
            },
          ],
        });
        dispatch({
          type: ADD_TO_CART,
          payload: cart,
        });
        dispatch({
          type: FETCH_SUCCESS,
        });
      }
    } catch (err) {
      dispatch({
        type: FETCH_FAIL,
      });
    }
  };
};

export const getCart = (user, token) => {
  return async (dispatch) => {
    dispatch({
      type: FETCH_START,
    });
    try {
      const carts = await axios.get('/cart/user/' + user._id, {
        headers: {
          token: `Bearer ${token}`,
        },
      });
      dispatch({
        type: GET_USER_CART,
        payload: carts.data.products,
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

//add and remove product in cart (quantity)
export const addProductCart = (user, product, token, quantity) => {
  const { productId } = product;

  return async (dispatch) => {
    try {
      const Carts = await axios.get('/cart/user/' + user._id, {
        headers: {
          token: `Bearer ${token}`,
        },
      });
      const oldCartData = Carts.data?.products;
      if (Carts.data) {
        const updateProduct = [...oldCartData];
        updateProduct.map((p_item) => {
          if (p_item.productId === productId) {
            p_item.quantity = quantity;
          }
          return '';
        });
        await axios.put(
          '/cart/update/' + Carts.data._id,
          {
            userId: user,
            products: [...updateProduct],
          },
          {
            headers: {
              token: `Bearer ${token}`,
            },
          }
        );
      }
    } catch (err) {
      dispatch({
        type: FETCH_FAIL,
      });
    }
  };
};

// export const removeProduct = (user, product, token) => {};
