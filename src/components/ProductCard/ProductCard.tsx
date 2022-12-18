import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../../types';
import ProductPurchases from '../ProductPurchases/ProductPurchases';
import {
  StyledProductCardContainer,
  StyledProductName,
  StyledProductPrice,
  StyledProductQuantity,
} from './ProductCard.style';

export default function ProductCard({ product }: { product: Product }) {
  const { id, name, price, quantity } = product;
  return (
    <StyledProductCardContainer>
      <StyledProductName>
        <Link to={`/products/${id}`}>{name}</Link>
      </StyledProductName>
      <StyledProductPrice>
        Price: <span className="price-value">{price}$</span>
      </StyledProductPrice>
      <StyledProductQuantity>
        Quantity: <span className="quantity-value">{quantity}</span>
      </StyledProductQuantity>
      <ProductPurchases productID={id} />
    </StyledProductCardContainer>
  );
}
