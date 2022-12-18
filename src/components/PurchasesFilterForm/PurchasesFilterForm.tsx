import { DatePicker } from 'antd';
import dayjs from 'dayjs';
import { Customer, Product } from '../../types';
import {
  StyledPurchasesFilterFormButton,
  StyledPurchasesFilterFormContainer,
  StyledPurchasesFilterFormInputWrapper,
} from './PurchasesFilterForm.style';

interface PurchasesFilterFormProps {
  products: Product[];
  customers: Customer[];
  isPurchasesSearch: boolean;

  callbacks: {
    handleFilterSelect: (
      e?: React.ChangeEvent<HTMLSelectElement>,
      name?: string,
      value?: string,
    ) => void;
    handlePurchasesFormSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  };
}

export default function PurchasesFilterForm({
  products,
  customers,
  callbacks,
}: PurchasesFilterFormProps) {
  return (
    <StyledPurchasesFilterFormContainer
      as="form"
      onSubmit={callbacks.handlePurchasesFormSubmit}
    >
      <StyledPurchasesFilterFormInputWrapper>
        <label htmlFor="productSelect">Product</label>
        <select
          onChange={callbacks.handleFilterSelect}
          name="product"
          id="productSelect"
        >
          <option value="all">All</option>
          {products.map((product) => (
            <option key={product.id} value={product.id}>
              {product.name}
            </option>
          ))}
        </select>
      </StyledPurchasesFilterFormInputWrapper>
      <StyledPurchasesFilterFormInputWrapper>
        <label htmlFor="customerSelect">Customer</label>
        <select
          onChange={callbacks.handleFilterSelect}
          name="customer"
          id="customerSelect"
        >
          <option value="all">All</option>
          {customers.map((customer) => (
            <option key={customer.id} value={customer.id}>
              {`${customer.firstName} ${customer.lastName}`}
            </option>
          ))}
        </select>
      </StyledPurchasesFilterFormInputWrapper>

      <StyledPurchasesFilterFormInputWrapper>
        <label htmlFor="dateFrom">from</label>
        <DatePicker
          id="dateFrom"
          onChange={(date) => {
            callbacks.handleFilterSelect(
              undefined,
              'dateFrom',
              dayjs(date).isValid() ? dayjs(date).format('YYYY-MM-DD') : '',
            );
          }}
        />
      </StyledPurchasesFilterFormInputWrapper>
      <StyledPurchasesFilterFormInputWrapper>
        <label htmlFor="dateTo">to</label>
        <DatePicker
          id="dateTo"
          onChange={(date) => {
            callbacks.handleFilterSelect(
              undefined,
              'dateTo',
              dayjs(date).isValid() ? dayjs(date).format('YYYY-MM-DD') : '',
            );
          }}
        />
      </StyledPurchasesFilterFormInputWrapper>

      <StyledPurchasesFilterFormButton>Search</StyledPurchasesFilterFormButton>
    </StyledPurchasesFilterFormContainer>
  );
}
