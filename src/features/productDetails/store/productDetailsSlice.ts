import { createSlice } from '@reduxjs/toolkit';
import type { Product } from '../../orthopedic/share/entities/product';

interface ProductDetailsState {
  currentProduct: Product | null;
}

const initialState: ProductDetailsState = {
  currentProduct: null,
};

const productDetailsSlice = createSlice({
  name: 'productDetails',
  initialState,
  reducers: {
    setProduct(state, action) {
      state.currentProduct = action.payload;
    },
  },
});

export const { setProduct } = productDetailsSlice.actions;
export default productDetailsSlice.reducer;
