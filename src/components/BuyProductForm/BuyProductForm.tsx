import { useEffect, useState } from 'react';
import { useAppDispatch, useCustomers, useProducts } from '../../app/hooks';
import { createPurchase } from '../../features/purchases/purchasesSlice';
import {
  StyledButProductFormTotalPrice,
  StyledBuyProductForm,
  StyledBuyProductFormButton,
  StyledBuyProductFormPrice,
} from './BuyProductForm.style';
import BuyProductFormField from './BuyProductFormField';

interface BuyProductFormProps {
  providedProduct?: string;
  providedCustomer?: string;
}

interface SelectedFormValues {
  customer: string;
  product: string;
  quantity: number | string;
  productPrice: number;
}

export default function BuyProductForm({
  providedProduct,
  providedCustomer,
}: BuyProductFormProps) {
  const [products, isLoadingProduct] = useProducts();
  const [, isLoadingCustomers] = useCustomers();
  const dispatch = useAppDispatch();

  const [selectedFormValues, setSelectedFormValues] =
    useState<SelectedFormValues>({
      customer: '',
      product: '',
      quantity: 1,
      productPrice: 0,
    });

  useEffect(() => {
    if (isLoadingCustomers || isLoadingProduct) {
      return;
    }
    if (providedProduct) {
      setSelectedFormValues((prev) => ({
        ...prev,
        product: providedProduct,
      }));
    }
    const product = products.find(
      (product) => product.id === selectedFormValues.product,
    );
    if (product) {
      setSelectedFormValues((prev) => ({
        ...prev,
        productPrice: product.price,
      }));
    }
  }, [isLoadingProduct, isLoadingCustomers, selectedFormValues.product]);

  const handleFormInputChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    if (name === 'quantity') {
      if (Number(value) > 0) {
        setSelectedFormValues((prev) => ({
          ...prev,
          [name]: Number(value),
        }));
      } else {
        setSelectedFormValues((prev) => ({
          ...prev,
          [name]: '',
        }));
      }
    } else {
      setSelectedFormValues((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleBuyProductFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      selectedFormValues.product &&
      selectedFormValues.customer &&
      typeof selectedFormValues.quantity === 'number'
    ) {
      dispatch(
        createPurchase({
          productId: selectedFormValues.product,
          customerId: selectedFormValues.customer,
          quantity: selectedFormValues.quantity,
        }),
      );
      setSelectedFormValues((prev) => ({
        ...prev,
        quantity: 1,
      }));
    }
  };

  return (
    <StyledBuyProductForm onSubmit={handleBuyProductFormSubmit}>
      {!providedCustomer && (
        <BuyProductFormField
          name="customer"
          fieldType="select"
          handleFormInputChange={handleFormInputChange}
          selectedFormValues={selectedFormValues}
        />
      )}
      {!providedProduct && (
        <BuyProductFormField
          name="product"
          fieldType="select"
          handleFormInputChange={handleFormInputChange}
          selectedFormValues={selectedFormValues}
        />
      )}
      <BuyProductFormField
        name="quantity"
        fieldType="number"
        handleFormInputChange={handleFormInputChange}
        selectedFormValues={selectedFormValues}
      />
      <StyledBuyProductFormPrice>
        <span className="label">Price:</span>{' '}
        <span className="price-value">{selectedFormValues.productPrice}$ </span>
        per unit
      </StyledBuyProductFormPrice>
      <StyledButProductFormTotalPrice>
        <span className="label">Total: </span>
        <span className="total-price-value">
          {(
            selectedFormValues.productPrice *
            Number(selectedFormValues.quantity)
          ).toFixed(2) || 0}
          $
        </span>
      </StyledButProductFormTotalPrice>
      <StyledBuyProductFormButton type="submit">Buy</StyledBuyProductFormButton>
    </StyledBuyProductForm>
  );
}
