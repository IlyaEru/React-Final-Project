import { collection, onSnapshot } from 'firebase/firestore';
import { createContext, useEffect, useState } from 'react';
import { useAppDispatch, useCustomers, useProducts } from './app/hooks';
import { fetchCustomers } from './features/customers/customersSlice';
import { fetchProducts } from './features/products/productsSlice';
import { fetchPurchases } from './features/purchases/purchasesSlice';
import { db } from './helpers/firebase';
import { seedProducts, seedCustomers } from './helpers/seedFirebase';
import RoutesSwitch from './RoutesSwitch';
import { ThemeProvider } from 'styled-components';
import lightTheme from './theme/lightTheme';
import darkTheme from './theme/darkTheme';
import { GlobalStyle } from './styles/globalStyle';

interface ThemeContext {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
}

export const themeContext = createContext({} as ThemeContext);

function App() {
  const [theme, setTheme] = useState('light');

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

  const localTheme = localStorage.getItem('theme');

  useEffect(() => {
    if (localTheme) {
      setTheme(localTheme);
    }
  }, [localTheme, setTheme]);
  return (
    <>
      <themeContext.Provider
        value={{
          theme,
          setTheme,
        }}
      >
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
          <GlobalStyle />
          <RoutesSwitch />
        </ThemeProvider>
      </themeContext.Provider>
    </>
  );
}

export default App;
