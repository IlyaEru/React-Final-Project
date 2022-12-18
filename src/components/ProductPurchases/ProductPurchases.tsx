import { useState } from 'react';
import { useCustomers, usePurchases } from '../../app/hooks';
import {
  getProductsPurchases,
  getReducedProductsPurchases,
} from '../../helpers/utils';
import { StyledLink } from '../../styles/globalStyle';
import BuyProductForm from '../BuyProductForm/BuyProductForm';

import {
  StyledProductPurchasesButton,
  StyledProductPurchasesContainer,
  StyledProductPurchasesHeader,
  StyledProductPurchasesTable,
} from './ProductPurchases.style';

export default function ProductPurchases({ productID }: { productID: string }) {
  const [isAddNewProductPurchase, setIsAddNewProductPurchase] = useState(false);

  const [purchases] = usePurchases();
  const [customers] = useCustomers();

  const productPurchases = getProductsPurchases(
    productID,
    purchases,
    customers,
  );

  const reducedProductPurchases = getReducedProductsPurchases(
    productID,
    purchases,
    customers,
  );

  return (
    <StyledProductPurchasesContainer>
      {productPurchases.length === 0 ? (
        <StyledProductPurchasesHeader>
          No Purchases yet
        </StyledProductPurchasesHeader>
      ) : (
        <>
          <StyledProductPurchasesHeader>Bought By</StyledProductPurchasesHeader>
          <StyledProductPurchasesTable>
            <thead>
              <tr>
                <th>Customer</th>
                <th>Quantity</th>
                <th>Purchase date</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(reducedProductPurchases).map((purchase) => (
                <tr key={reducedProductPurchases[purchase].id}>
                  <td>
                    <StyledLink
                      to={`/customers/${reducedProductPurchases[purchase].customerId}`}
                    >
                      {purchase}
                    </StyledLink>
                  </td>
                  <td>{reducedProductPurchases[purchase].quantity}</td>
                  <td>
                    <ul>
                      {productPurchases
                        .filter(
                          (p) =>
                            p.customerId ===
                            reducedProductPurchases[purchase].customerId,
                        )
                        .map((purchase) => {
                          return (
                            <li key={purchase.id}>
                              {`${purchase.date}`} {`(${purchase.quantity})`}
                            </li>
                          );
                        })}
                    </ul>
                  </td>
                </tr>
              ))}
            </tbody>
          </StyledProductPurchasesTable>
        </>
      )}
      <StyledProductPurchasesButton
        onClick={() => setIsAddNewProductPurchase(!isAddNewProductPurchase)}
      >
        {isAddNewProductPurchase ? 'Cancel' : 'Add new purchase'}
      </StyledProductPurchasesButton>
      {isAddNewProductPurchase && (
        <BuyProductForm providedProduct={productID} />
      )}
    </StyledProductPurchasesContainer>
  );
}
