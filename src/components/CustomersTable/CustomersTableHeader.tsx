import { useState } from 'react';
import { SlArrowDown, SlArrowUp } from 'react-icons/sl';
import { Purchase } from '../../types';

interface CustomersTableHeaderProps {
  customerId?: string;
  handleSort: (e: React.MouseEvent<HTMLButtonElement>) => void;
  filteredPurchases?: [] | Purchase[];
}

export default function CustomersTableHeader({
  customerId,
  handleSort,
  filteredPurchases,
}: CustomersTableHeaderProps) {
  const [nameSort, setNameSort] = useState<'down' | 'up'>('down');
  const [productSort, setProductSort] = useState<'down' | 'up'>('down');
  const [dateSort, setDateSort] = useState<'down' | 'up'>('down');
  const [activeSort, setActiveSort] = useState('');

  const handleActiveSort = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { value } = e.currentTarget;
    setActiveSort(value);
  };
  return (
    <thead>
      <tr>
        {!customerId && (
          <th>
            <div className="table-header__content-wrapper">
              Name
              <button
                className={
                  activeSort === 'name-down' || activeSort === 'name-up'
                    ? 'active'
                    : ''
                }
                onClick={(e) => {
                  setNameSort(nameSort === 'down' ? 'up' : 'down');
                  handleActiveSort(e);
                  handleSort(e);
                }}
                value={`name-${nameSort}`}
              >
                {nameSort === 'down' ? <SlArrowDown /> : <SlArrowUp />}
              </button>
            </div>
          </th>
        )}

        <th>
          <div className="table-header__content-wrapper">
            Products
            {(filteredPurchases || customerId) && (
              <button
                className={
                  activeSort === 'product-down' || activeSort === 'product-up'
                    ? 'active'
                    : ''
                }
                onClick={(e) => {
                  handleActiveSort(e);

                  setProductSort(productSort === 'down' ? 'up' : 'down');
                  handleSort(e);
                }}
                value={`product-${productSort}`}
              >
                {productSort === 'down' ? <SlArrowDown /> : <SlArrowUp />}
              </button>
            )}
          </div>
        </th>
        <th>
          <div className="table-header__content-wrapper">
            Purchase Dates
            {(filteredPurchases || customerId) && (
              <button
                className={
                  activeSort === 'date-down' || activeSort === 'date-up'
                    ? 'active'
                    : ''
                }
                onClick={(e) => {
                  handleActiveSort(e);

                  setDateSort(dateSort === 'down' ? 'up' : 'down');
                  handleSort(e);
                }}
                value={`date-${dateSort}`}
              >
                {dateSort === 'down' ? <SlArrowDown /> : <SlArrowUp />}
              </button>
            )}
          </div>
        </th>
      </tr>
    </thead>
  );
}
