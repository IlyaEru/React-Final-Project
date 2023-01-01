import React, { useEffect, useId, useRef, useState } from 'react';
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
  const [cardHeight, setCardHeight] = useState(800);
  const cardHeightRef = useRef<HTMLDivElement>(null);
  const cardId = useId();

  const resizeObserver = new ResizeObserver(() => {
    const cardHeight = cardHeightRef.current?.offsetHeight;
    if (cardHeight) {
      setCardHeight(cardHeight);
    }
  });

  useEffect(() => {
    if (cardHeightRef.current) {
      resizeObserver.observe(cardHeightRef.current);
    }
    return () => {
      if (cardHeightRef.current) {
        resizeObserver.unobserve(cardHeightRef.current);
      }
    };
  }, []);

  return (
    <StyledProductCardContainer
      className={cardId}
      $height={cardHeight}
      $id={cardId}
      ref={cardHeightRef}
      id={cardId}
    >
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
