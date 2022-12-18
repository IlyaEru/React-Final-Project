import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { addPurchase, getCollection } from '../../helpers/firebase';
import { Purchase } from '../../types';

interface PurchasesState {
  purchases: Purchase[] | [];
  isLoading: boolean;
  isError: boolean;
}

const initialState: PurchasesState = {
  purchases: [],
  isLoading: true,
  isError: false,
};

const purchasesSlice = createSlice({
  name: 'purchases',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPurchases.pending, (state) => {
      state.isLoading = true;
    }),
      builder.addCase(fetchPurchases.fulfilled, (state, action) => {
        state.isLoading = false;
        state.purchases = action.payload as Purchase[];
      }),
      builder.addCase(fetchPurchases.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export const fetchPurchases = createAsyncThunk(
  'purchases/getPurchases',
  async () => {
    return await getCollection('purchases');
  },
);

export const createPurchase = createAsyncThunk(
  'purchases/createPurchase',
  async ({
    customerId,
    productId,
    quantity,
  }: {
    customerId: string;
    productId: string;
    quantity: number;
  }) => {
    await addPurchase(customerId, productId, quantity);
  },
);

export const purchasesSelector = (state: RootState) =>
  state.purchases.purchases;

export const purchasesLoadingSelector = (state: RootState) =>
  state.purchases.isLoading;

export const purchasesErrorSelector = (state: RootState) =>
  state.purchases.isError;

export default purchasesSlice.reducer;
