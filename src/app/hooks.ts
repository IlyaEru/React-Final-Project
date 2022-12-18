import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import {
  customersErrorSelector,
  customersLoadingSelector,
  customersSelector,
} from '../features/customers/customersSlice';
import {
  productsErrorSelector,
  productsLoadingSelector,
  productsSelector,
} from '../features/products/productsSlice';
import {
  purchasesErrorSelector,
  purchasesLoadingSelector,
  purchasesSelector,
} from '../features/purchases/purchasesSlice';
import { Customer, Product, Purchase } from '../types';
import type { RootState, AppDispatch } from './store';

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useProducts = (): [Product[] | [], boolean, boolean] => {
  const isLoadingProducts = useAppSelector(productsLoadingSelector);
  const isErrorProducts = useAppSelector(productsErrorSelector);
  const products = useAppSelector(productsSelector);
  return [products, isLoadingProducts, isErrorProducts];
};
export const useCustomers = (): [Customer[] | [], boolean, boolean] => {
  const isLoadingCustomers = useAppSelector(customersLoadingSelector);
  const isErrorCustomers = useAppSelector(customersErrorSelector);
  const customers = useAppSelector(customersSelector);
  return [customers, isLoadingCustomers, isErrorCustomers];
};
export const usePurchases = (): [Purchase[] | [], boolean, boolean] => {
  const isLoadingPurchases = useAppSelector(purchasesLoadingSelector);
  const isErrorPurchases = useAppSelector(purchasesErrorSelector);
  const purchases = useAppSelector(purchasesSelector);
  return [purchases, isLoadingPurchases, isErrorPurchases];
};
