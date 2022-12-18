import { useParams } from 'react-router-dom';
import { useCustomers } from '../../app/hooks';
import CustomersTable from '../../components/CustomersTable/CustomersTable';

import EditForm from '../../components/EditForm/EditForm';
import Loader from '../../components/Loader/Loader';
import {
  StyledCustomerPurchasesHeader,
  StyledEditCustomerContainer,
} from './EditCustomer.style';

export default function EditCustomer() {
  const [, isLoading, isError] = useCustomers();
  const { customerId } = useParams();

  if (!customerId) {
    return <div>Customer not found!</div>;
  }
  if (isError) {
    return <div>Error loading Customer!</div>;
  }
  if (isLoading) {
    return <Loader loadedData="Customer" />;
  }
  return (
    <StyledEditCustomerContainer>
      <EditForm editedId={customerId} editedType="customer" />
      <StyledCustomerPurchasesHeader>Purchases</StyledCustomerPurchasesHeader>
      <CustomersTable customerId={customerId} />
    </StyledEditCustomerContainer>
  );
}
