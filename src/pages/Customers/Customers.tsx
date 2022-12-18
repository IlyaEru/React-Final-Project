import { useState } from 'react';
import { useCustomers } from '../../app/hooks';
import BuyProductForm from '../../components/BuyProductForm/BuyProductForm';
import CustomersTable from '../../components/CustomersTable/CustomersTable';
import Loader from '../../components/Loader/Loader';

import {
  StyledCustomersBuyProductButton,
  StyledCustomersContainer,
  StyledCustomersHeader,
} from './Customers.style';

export default function Customers() {
  const [isShowingBuyForm, setIsShowingBuyForm] = useState(false);
  const [, isLoading, isError] = useCustomers();

  if (isError) {
    return <div>Error loading Customers!</div>;
  }

  if (isLoading) {
    return <Loader loadedData="Customers" />;
  }

  return (
    <StyledCustomersContainer>
      <StyledCustomersHeader>Customers</StyledCustomersHeader>
      <CustomersTable />
      <StyledCustomersBuyProductButton
        onClick={() => {
          setIsShowingBuyForm(!isShowingBuyForm);
        }}
      >
        {isShowingBuyForm ? 'Cancel' : 'Buy Product'}
      </StyledCustomersBuyProductButton>
      {isShowingBuyForm && <BuyProductForm />}
    </StyledCustomersContainer>
  );
}
