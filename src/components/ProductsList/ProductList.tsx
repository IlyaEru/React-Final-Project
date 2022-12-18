import { useProducts } from '../../app/hooks';
import ProductCard from '../ProductCard/ProductCard';
import { StyledProductList } from './ProductList.style';

export default function ProductList() {
  const products = useProducts()[0];
  return (
    <StyledProductList>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </StyledProductList>
  );
}
