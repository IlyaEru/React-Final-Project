import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import {
  deleteAllPurchasesOfCustomer,
  deleteCustomer,
  getCollection,
  updateCustomer,
} from '../../helpers/firebase';
import { Customer } from '../../types';
import { addToast } from '../toasts/toastsSlice';

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
  async (customer: Customer, { dispatch }) => {
    updateCustomer(
      customer.id,
      customer.firstName,
      customer.lastName,
      customer.city,
    );
    dispatch(addToast({ message: 'Customer updated', type: 'success' }));
  },
);

export const removeCustomer = createAsyncThunk(
  'customers/removeCustomer',
  async (id: string, { dispatch }) => {
    deleteCustomer(id);
    deleteAllPurchasesOfCustomer(id);
    dispatch(addToast({ message: 'Customer deleted', type: 'success' }));
  },
);

export const customersSelector = (state: RootState) =>
  state.customers.customers;

export const customersLoadingSelector = (state: RootState) =>
  state.customers.isLoading;

export const customersErrorSelector = (state: RootState) =>
  state.customers.isError;

export default customersSlice.reducer;
