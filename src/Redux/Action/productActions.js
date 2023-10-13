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
      console.log('Fetched Products:', response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };
};

export const addProduct = (product) => {
  return (dispatch, getState) => {
    console.log('Existing State (Before Adding):', getState().products);
    dispatch({ type: ADD_PRODUCT, payload: product });
    console.log('Updated State (After Adding):', getState().products);
  };
};

export const deleteProduct = (productId) => {
  return (dispatch, getState) => {
    console.log('Existing State (Before Deleting):', getState().products);
    dispatch({ type: DELETE_PRODUCT, payload: productId });
    console.log('Updated State (After Deleting):', getState().products);
  };
};

export const sortProducts = (order) => {
  return (dispatch, getState) => {
    console.log('Existing State (Before Sorting):', getState().products);
    dispatch({ type: SORT_PRODUCTS, payload: order });
    console.log('Updated State (After Sorting):', getState().products);
  };
};
