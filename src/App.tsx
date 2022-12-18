import { collection, onSnapshot } from 'firebase/firestore';
import { useEffect } from 'react';
import { useAppDispatch } from './app/hooks';
import { fetchCustomers } from './features/customers/customersSlice';
import { fetchProducts } from './features/products/productsSlice';
import { fetchPurchases } from './features/purchases/purchasesSlice';
import { db } from './helpers/firebase';
import RoutesSwitch from './RoutesSwitch';

function App() {
  const dispatch = useAppDispatch();

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
