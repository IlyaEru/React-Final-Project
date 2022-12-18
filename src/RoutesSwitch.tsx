import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Customers from './pages/Customers/Customers';
import EditCustomer from './pages/EditCustomer/EditCustomer';
import EditProduct from './pages/EditProduct/EditProduct';
import Menu from './components/Menu/Menu';
import Products from './pages/Products/Products';
import Purchases from './pages/Purchases/Purchases';

export default function RoutesSwitch() {
  return (
    <Router>
      <Menu />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:productId" element={<EditProduct />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/customers/:customerId" element={<EditCustomer />} />
        <Route path="/purchases" element={<Purchases />} />
      </Routes>
    </Router>
  );
}
