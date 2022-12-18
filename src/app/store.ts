import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import productsReducer from '../features/products/productsSlice';
import customersReducer from '../features/customers/customersSlice';
import purchasesReducer from '../features/purchases/purchasesSlice';

export const store = configureStore({
  reducer: {
    products: productsReducer,
    customers: customersReducer,
    purchases: purchasesReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
