import { configureStore } from '@reduxjs/toolkit';
import productDetailsSlice from '../../features/productDetails/store/productDetailsSlice';
import orthopedicSlice from '../../features/orthopedic/store/orthopedicSlice';

export const store = configureStore({
  reducer: {
    productDetails: productDetailsSlice,
    orthopedic: orthopedicSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
