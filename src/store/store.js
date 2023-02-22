import { configureStore } from '@reduxjs/toolkit';
import productSlice from './productSlice';
import productsSlice from './productsSlice';
import userSlice from './userSlice';

const store = configureStore({
  reducer: {
    products: productsSlice,
    product: productSlice,
    user: userSlice
  }
});

export var RootState = store.getState;
export var AppDispatch = store.dispatch;
export default store;
