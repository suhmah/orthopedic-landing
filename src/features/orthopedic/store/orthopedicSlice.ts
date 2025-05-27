import { createSlice } from '@reduxjs/toolkit';
import { productsMock } from '../presentation/mocks/productsMock';
import type { Product } from '../share/entities/product';

interface OrthopedicState {
  products: Product[];
}

const initialState: OrthopedicState = {
  products: productsMock,
};

const orthopedicSlice = createSlice({
  name: 'orthopedic',
  initialState,
  reducers: {
    setProducts(state, action) {
      state.products = action.payload;
    },
  },
});

export const { setProducts } = orthopedicSlice.actions;
export default orthopedicSlice.reducer;
