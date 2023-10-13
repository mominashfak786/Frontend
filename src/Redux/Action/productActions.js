// productActions.js
import axios from 'axios';

export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';
export const ADD_PRODUCT = 'ADD_PRODUCT';
export const DELETE_PRODUCT = 'DELETE_PRODUCT';
export const SORT_PRODUCTS = 'SORT_PRODUCTS';

export const fetchProducts = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get('https://fakestoreapi.com/products');
      dispatch({ type: FETCH_PRODUCTS, payload: response.data });
    } catch (error) {
      console.error(error);
    }
  };
};

export const addProduct = (product) => {
  return {
    type: ADD_PRODUCT,
    payload: product,
  };
};

export const deleteProduct = (productId) => {
  return {
    type: DELETE_PRODUCT,
    payload: productId,
  };
};

export const sortProducts = (order) => {
  return {
    type: SORT_PRODUCTS,
    payload: order,
  };
};
