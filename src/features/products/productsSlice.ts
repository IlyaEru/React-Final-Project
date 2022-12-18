import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import {
  deleteAllPurchasesOfProduct,
  deleteProduct,
  getCollection,
  updateProduct,
} from '../../helpers/firebase';
import { Product } from '../../types';

interface ProductsState {
  products: Product[] | [];
  isLoading: boolean;
  isError: boolean;
}

const initialState: ProductsState = {
  products: [],
  isLoading: true,
  isError: false,
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.isLoading = true;
    }),
      builder.addCase(fetchProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.products = action.payload as Product[];
      }),
      builder.addCase(fetchProducts.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export const fetchProducts = createAsyncThunk(
  'products/getProducts',
  async () => {
    return await getCollection('products');
  },
);

export const setProduct = createAsyncThunk(
  'products/updateProduct',
  async (product: Product) => {
    updateProduct(product.id, product.name, product.price, product.quantity);
  },
);

export const removeProduct = createAsyncThunk(
  'products/removeProduct',
  async (id: string) => {
    deleteProduct(id);
    deleteAllPurchasesOfProduct(id);
  },
);

export const productsSelector = (state: RootState) => state.products.products;
export const productsLoadingSelector = (state: RootState) =>
  state.products.isLoading;
export const productsErrorSelector = (state: RootState) =>
  state.products.isError;

export default productsSlice.reducer;
