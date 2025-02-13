/* eslint-disable no-param-reassign */
// eslint-disable-next-line import/no-extraneous-dependencies
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Category, Product } from '../types/types';
import { getProducts } from '../api/products';

const PHONES = 'phones';
const CATEGORIES: Category[] = ['phones', 'tablets', 'accessories'];

export interface ProductsState {
  products: Product[] | [];
  newModels: Product[] | [];
  hotPrices: Product[] | [];
  phones: Product[] | [];
  tablets: Product[] | [];
  accessories: Product[] | [];
  loaded: boolean;
  hasError: boolean;
}

const initialState: ProductsState = {
  products: [],
  newModels: [],
  hotPrices: [],
  phones: [],
  tablets: [],
  accessories: [],
  loaded: true,
  hasError: false,
};

export const loadProducts = createAsyncThunk(
  'products/getProducts',
  getProducts,
);

const getNewModels = (products: Product[]) => {
  if (products) {
    return products.filter(
      product =>
        product.category === PHONES &&
        product.year >= 2022 &&
        product.capacity === '256GB',
    );
  }

  return [];
};

const getHotPrices = (products: Product[]) => {
  if (products) {
    return products.filter(product => +product.year <= 2018);
  }

  return [];
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(loadProducts.pending, state => {
        state.loaded = false;
      })
      .addCase(loadProducts.fulfilled, (state, action) => {
        state.loaded = true;
        state.products = action.payload;

        state.newModels = getNewModels(action.payload);
        state.hotPrices = getHotPrices(action.payload);

        CATEGORIES.forEach(category => {
          state[category] = action.payload.filter(
            product => product.category === category,
          );
        });
      })

      .addCase(loadProducts.rejected, state => {
        state.loaded = true;
        state.hasError = true;
      });
  },
});

export default productsSlice.reducer;
