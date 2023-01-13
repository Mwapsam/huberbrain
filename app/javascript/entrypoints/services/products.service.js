import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const createProduct = createAsyncThunk(
    'products/createProduct',
    async (product) => {
      const prod = await axios.post('/products', product);
      const res = await prod.data;
      return res;
    },
);

export const getProducts = createAsyncThunk(
    'products/getProducts',
    async ({query}) => {
    try {
        const prod = await axios.post('/products/search', {query});
        const res = await prod.data;
        return res;
      } catch(e) {
        throw new Error(e.response.statusText)
      }
    },
);