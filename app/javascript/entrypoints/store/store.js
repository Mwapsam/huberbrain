import { configureStore } from '@reduxjs/toolkit';
import productSlice from '../reducers/products';

const store = configureStore({
    reducer: {
        products: productSlice,
    },
  });
  export default store;