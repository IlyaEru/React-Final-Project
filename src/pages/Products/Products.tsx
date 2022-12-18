import { useProducts, usePurchases } from '../../app/hooks';
import Loader from '../../components/Loader/Loader';
import ProductList from '../../components/ProductsList/ProductList';
import { getTotalAmountOfPurchasedProducts } from '../../helpers/utils';
import {
  StyledProductsPurchaseHeader,
  StyledProductsHeader,
  StyledProductsContainer,
} from './Products.style';

export default function Products() {
  const [, isLoading, isError] = useProducts();

  const [purchases] = usePurchases();
  const totalPurchasedProducts = getTotalAmountOfPurchasedProducts(purchases);

  if (isError) {
    return <div>Error loading products!</div>;
  }

  if (isLoading) {
    return <Loader loadedData="Products" />;
  }

  return (
    <StyledProductsContainer>
      <StyledProductsPurchaseHeader>
        purchased products : {totalPurchasedProducts}
      </StyledProductsPurchaseHeader>
      <StyledProductsHeader>products</StyledProductsHeader>
      <ProductList />
    </StyledProductsContainer>
  );
}
