import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import productsReducer from '../features/products/productsSlice';
import customersReducer from '../features/customers/customersSlice';
import purchasesReducer from '../features/purchases/purchasesSlice';
import toastsReducer from '../features/toasts/toastsSlice';

export const store = configureStore({
  reducer: {
    products: productsReducer,
    customers: customersReducer,
    purchases: purchasesReducer,
    toasts: toastsReducer,
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
