import { FETCH_PRODUCTS, ADD_PRODUCT, DELETE_PRODUCT, SORT_PRODUCTS } from '../Action/productActions';

const initialState = {
  products: [],
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    case ADD_PRODUCT:
     
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    case DELETE_PRODUCT:
    
      return {
        ...state,
        products: state.products.filter(product => product.id !== action.payload),
      };
    case SORT_PRODUCTS:
      const sortedProducts = [...state.products];

      if (action.payload === 'low-to-high') {
        sortedProducts.sort((a, b) => a.price - b.price);
      } else if (action.payload === 'high-to-low') {
        sortedProducts.sort((a, b) => b.price - a.price);
      }

      return {
        ...state,
        products: sortedProducts,
      };
    default:
      return state;
  }
};

export default productReducer;
