import { useParams } from 'react-router-dom';
import { useProducts } from '../../app/hooks';

import EditForm from '../../components/EditForm/EditForm';
import Loader from '../../components/Loader/Loader';
import ProductPurchases from '../../components/ProductPurchases/ProductPurchases';
import { StyledEditProductContainer } from './EditProduct.style';

export default function EditProduct() {
  const [, isLoading, isError] = useProducts();
  const { productId } = useParams();

  if (!productId) {
    return <div>Product not found!</div>;
  }
  if (isError) {
    return <div>Error loading Product!</div>;
  }
  if (isLoading) {
    return <Loader loadedData="Product" />;
  }
  return (
    <StyledEditProductContainer>
      <EditForm editedId={productId} editedType="product" />
      <ProductPurchases productID={productId} />
    </StyledEditProductContainer>
  );
}
