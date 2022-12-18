import { useCustomers, useProducts, usePurchases } from '../../app/hooks';

import { Purchase } from '../../types';

import {
  StyledCustomersTable,
  StyledNoPurchasesContainer,
} from './CustomersTable.style';
import { useEffect, useState } from 'react';

import {
  getSortedCustomers,
  getSortedPurchases,
} from '../../helpers/tableUtils';
import CustomersTableHeader from './CustomersTableHeader';
import CustomersTableBody from './CustomersTableBody';

interface CustomersTableProps {
  filteredPurchases?: [] | Purchase[];
  customerId?: string;
}

type SortByState =
  | ''
  | 'name-down'
  | 'name-up'
  | 'product-down'
  | 'product-up'
  | 'date-down'
  | 'date-up';

export default function CustomersTable({
  filteredPurchases,
  customerId,
}: CustomersTableProps) {
  const [sortBy, setSortBy] = useState<SortByState>('');

  const [customers, isLoadingCustomers] = useCustomers();
  const [purchases, isLoadingPurchases] = usePurchases();
  const [products, isLoadingProducts] = useProducts();

  const [tableShownCustomers, setTableShownCustomers] = useState(customers);
  const [tableShownPurchases, setTableShownPurchases] = useState(
    filteredPurchases ? filteredPurchases : purchases,
  );

  useEffect(() => {
    if (filteredPurchases) {
      setTableShownPurchases(filteredPurchases);
    }
  }, [filteredPurchases]);

  useEffect(() => {
    if (!isLoadingCustomers && !isLoadingPurchases && !isLoadingProducts) {
      setTableShownCustomers(customers);
      setTableShownPurchases(filteredPurchases ? filteredPurchases : purchases);
    }
  }, [isLoadingCustomers, isLoadingPurchases, isLoadingProducts]);
  const handleSort = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { value } = e.currentTarget;
    setSortBy(value as SortByState);
  };

  useEffect(() => {
    if (filteredPurchases && filteredPurchases.length === 0) {
      return;
    } else if (filteredPurchases && filteredPurchases.length > 0) {
      const sortedPurchases = getSortedPurchases(
        filteredPurchases,
        customers,
        products,
        sortBy,
      );

      setTableShownPurchases(sortedPurchases);
    } else if (customerId) {
      const sortedPurchases = getSortedPurchases(
        purchases,
        customers,
        products,
        sortBy,
      );
      setTableShownPurchases(sortedPurchases);
    } else {
      const sortedCustomers = getSortedCustomers(sortBy, customers);

      setTableShownCustomers(sortedCustomers);
    }
  }, [sortBy]);

  if (filteredPurchases && filteredPurchases.length === 0) {
    return (
      <StyledNoPurchasesContainer>
        No Purchases found!
      </StyledNoPurchasesContainer>
    );
  }
  return (
    <StyledCustomersTable>
      <CustomersTableHeader
        customerId={customerId}
        handleSort={handleSort}
        filteredPurchases={filteredPurchases}
      />
      <CustomersTableBody
        isFilteredPurchases={filteredPurchases ? true : false}
        tableShownCustomers={tableShownCustomers}
        tableShownPurchases={tableShownPurchases}
        customerId={customerId}
      />
    </StyledCustomersTable>
  );
}
