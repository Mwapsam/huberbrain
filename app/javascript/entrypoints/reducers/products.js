import { createSlice } from '@reduxjs/toolkit';
import { getProducts, createProduct } from '../services/products.service';

const productSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
    status: null,
  },
  extraReducers: {
    [getProducts.pending]: (state) => {
      state.status = 'pending';
      state.isProductStored = false;
    },
    [getProducts.fulfilled]: (state, { payload }) => {
      state.products = payload;
      state.status = 'success';
      state.isProductStored = true;
    },
    [getProducts.rejected]: (state) => {
      state.status = 'failed';
      state.isProductStored = false;
    },

    [createProduct.fulfilled]: (state, {payload}) => {
      state.products = [...state.products, payload];
    },
  },
});

export default productSlice.reducer;