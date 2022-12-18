import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import {
  deleteAllPurchasesOfCustomer,
  deleteCustomer,
  getCollection,
  updateCustomer,
} from '../../helpers/firebase';
import { Customer } from '../../types';

interface CustomersState {
  customers: Customer[] | [];
  isLoading: boolean;
  isError: boolean;
}

const initialState: CustomersState = {
  customers: [],
  isLoading: true,
  isError: false,
};

const customersSlice = createSlice({
  name: 'customers',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCustomers.pending, (state) => {
      state.isLoading = true;
    }),
      builder.addCase(fetchCustomers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.customers = action.payload as Customer[];
      }),
      builder.addCase(fetchCustomers.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export const fetchCustomers = createAsyncThunk(
  'customers/getCustomers',
  async () => {
    return await getCollection('customers');
  },
);

export const setCustomer = createAsyncThunk(
  'customers/updateCustomer',
  async (customer: Customer) => {
    updateCustomer(
      customer.id,
      customer.firstName,
      customer.lastName,
      customer.city,
    );
  },
);

export const removeCustomer = createAsyncThunk(
  'customers/removeCustomer',
  async (id: string) => {
    deleteCustomer(id);
    deleteAllPurchasesOfCustomer(id);
  },
);

export const customersSelector = (state: RootState) =>
  state.customers.customers;

export const customersLoadingSelector = (state: RootState) =>
  state.customers.isLoading;

export const customersErrorSelector = (state: RootState) =>
  state.customers.isError;

export default customersSlice.reducer;
