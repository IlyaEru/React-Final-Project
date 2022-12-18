import { useState } from 'react';

import { useCustomers, useProducts, usePurchases } from '../../app/hooks';
import CustomersTable from '../../components/CustomersTable/CustomersTable';
import {
  StyledPurchasesContainer,
  StyledPurchasesHeader,
} from './Purchases.style';
import Loader from '../../components/Loader/Loader';
import { getPurchasesSearchFilter } from '../../helpers/utils';
import PurchasesFilterForm from '../../components/PurchasesFilterForm/PurchasesFilterForm';

export default function Purchases() {
  const [purchases, isLoading, isError] = usePurchases();
  const [products] = useProducts();
  const [customers] = useCustomers();

  const [isPurchasesSearch, setIsPurchasesSearch] = useState(false);

  const [filterSelectedValues, setFilterSelectedValues] = useState({
    customer: 'all',
    product: 'all',
    dateFrom: '',
    dateTo: '',
  });

  const [filteredPurchases, setFilteredPurchases] = useState(purchases);

  const callbacks = {
    handleFilterSelect: (
      e?: React.ChangeEvent<HTMLSelectElement>,
      name?: string,
      value?: string,
    ) => {
      if (!name) {
        if (!e) return;
        const { name, value } = e.target;
        setFilterSelectedValues({
          ...filterSelectedValues,
          [name]: value,
        });
      } else {
        setFilterSelectedValues({
          ...filterSelectedValues,
          [name]: value,
        });
      }
    },
    handlePurchasesFormSubmit: (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const searchFilteredPurchases = getPurchasesSearchFilter(
        purchases,
        filterSelectedValues.customer,
        filterSelectedValues.product,
        filterSelectedValues.dateFrom,
        filterSelectedValues.dateTo,
      );
      setFilteredPurchases(searchFilteredPurchases);
      setIsPurchasesSearch(true);
    },
  };

  if (isError) {
    return <div>Error loading Purchases!</div>;
  }

  if (isLoading) {
    return <Loader loadedData="Purchases" />;
  }

  return (
    <StyledPurchasesContainer>
      <StyledPurchasesHeader>Purchases</StyledPurchasesHeader>
      <PurchasesFilterForm
        products={products}
        customers={customers}
        isPurchasesSearch={isPurchasesSearch}
        callbacks={callbacks}
      />
      {isPurchasesSearch && (
        <CustomersTable filteredPurchases={filteredPurchases} />
      )}
    </StyledPurchasesContainer>
  );
}
