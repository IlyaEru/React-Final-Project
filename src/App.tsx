import { collection, onSnapshot } from 'firebase/firestore';
import { useEffect } from 'react';
import { useAppDispatch, useCustomers, useProducts } from './app/hooks';
import { fetchCustomers } from './features/customers/customersSlice';
import { fetchProducts } from './features/products/productsSlice';
import { fetchPurchases } from './features/purchases/purchasesSlice';
import { db } from './helpers/firebase';
import { seedProducts, seedCustomers } from './helpers/seedFirebase';
import RoutesSwitch from './RoutesSwitch';

function App() {
  const dispatch = useAppDispatch();

  const [products, isLoadingProducts] = useProducts();
  const [customers, isLoadingCustomers] = useCustomers();

  useEffect(() => {
    if (!isLoadingProducts && !isLoadingCustomers) {
      if (products.length === 0) {
        seedProducts();
      }
      if (customers.length === 0) {
        seedCustomers();
      }
    }
  }, [isLoadingProducts, isLoadingCustomers]);

  useEffect(() => {
    const unsubscribeProducts = onSnapshot(collection(db, 'products'), () => {
      dispatch(fetchProducts());
    });
    const unsubscribeCustomers = onSnapshot(collection(db, 'customers'), () => {
      dispatch(fetchCustomers());
    });
    const unsubscribePurchases = onSnapshot(collection(db, 'purchases'), () => {
      dispatch(fetchPurchases());
    });
    return () => {
      unsubscribeProducts();
      unsubscribeCustomers();
      unsubscribePurchases();
    };
  }, []);
  return (
    <>
      <RoutesSwitch />
    </>
  );
}

export default App;
