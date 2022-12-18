import { useCustomers, useProducts } from '../../app/hooks';
import {
  StyledBuyProductFormInput,
  StyledBuyProductFormInputWrapper,
  StyledBuyProductFormLabel,
  StyledBuyProductFormSelect,
} from './BuyProductForm.style';

interface BuyProductFormFieldProps {
  fieldType: 'select' | 'number' | 'text';
  name: 'customer' | 'product' | 'quantity';
  selectedFormValues: {
    customer: string;
    product: string;
    productPrice: number;
    quantity: number | string;
  };
  handleFormInputChange: (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>,
  ) => void;
}

export default function BuyProductFormField({
  fieldType,
  name,
  handleFormInputChange,
  selectedFormValues,
}: BuyProductFormFieldProps) {
  const [products] = useProducts();
  const [customers] = useCustomers();
  return (
    <StyledBuyProductFormInputWrapper>
      <StyledBuyProductFormLabel
        htmlFor={`${selectedFormValues.product}__${name}-input`}
      >
        {name}
      </StyledBuyProductFormLabel>
      {fieldType === 'select' ? (
        <StyledBuyProductFormSelect
          name={name}
          id={`${selectedFormValues.product}__${name}-input`}
          onChange={handleFormInputChange}
          defaultValue="DEFAULT"
        >
          <option value="DEFAULT" disabled hidden>
            Please select a {name}
          </option>
          {name === 'customer'
            ? customers.map((customer) => (
                <option key={customer.id} value={customer.id}>
                  {`${customer.firstName} ${customer.lastName}`}
                </option>
              ))
            : products.map((product) => (
                <option key={product.id} value={product.id}>
                  {product.name}
                </option>
              ))}
        </StyledBuyProductFormSelect>
      ) : (
        <>
          <StyledBuyProductFormInput
            type={fieldType}
            name={name}
            value={selectedFormValues[name]}
            id={`${selectedFormValues.product}__${name}-input`}
            onChange={handleFormInputChange}
          />
        </>
      )}
    </StyledBuyProductFormInputWrapper>
  );
}
