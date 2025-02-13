// eslint-disable-next-line import/no-extraneous-dependencies
import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import productsReducer from '../features/productSlice';

export const store = configureStore({
  reducer: {
    products: productsReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

/* eslint-disable @typescript-eslint/indent */
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
