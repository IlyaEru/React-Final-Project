import { useCustomers, useProducts, usePurchases } from '../../app/hooks';
import {
  getCustomersPurchases,
  getReducedCustomersProducts,
  isObjectEmpty,
} from '../../helpers/utils';
import { StyledLink } from '../../styles/globalStyle';
import { Customer, Purchase } from '../../types';

interface CustomersTableBodyProps {
  isFilteredPurchases?: boolean;
  tableShownCustomers?: Customer[];
  tableShownPurchases?: Purchase[];
  customerId?: string;
}

export default function CustomersTableBody({
  isFilteredPurchases,
  tableShownCustomers,
  tableShownPurchases,
  customerId,
}: CustomersTableBodyProps) {
  const [customers] = useCustomers();
  const [purchases] = usePurchases();
  const [products] = useProducts();

  const getCustomerPurchases = () => {
    if (customerId && tableShownPurchases) {
      const customerPurchases = getCustomersPurchases(
        customerId,
        tableShownPurchases,
        products,
      );
      return customerPurchases.length === 0 ? (
        <tr>
          <td colSpan={2}>No Purchases</td>
        </tr>
      ) : (
        customerPurchases.map((purchase) => {
          const purchasedProduct = products.find(
            (product) => product.id === purchase.productId,
          );
          return (
            <tr key={purchase.id}>
              <td>
                <StyledLink to={`/products/${purchase.productId}`}>
                  {purchasedProduct?.name}
                </StyledLink>
                ({purchase.quantity})
              </td>
              <td>{purchase.date}</td>
            </tr>
          );
        })
      );
    }
  };

  const getFilteredPurchases = () => {
    return tableShownPurchases?.map((purchase) => {
      const customer = customers.find(
        (customer) => customer.id === purchase.customerId,
      );
      const product = products.find(
        (product) => product.id === purchase.productId,
      );
      return (
        <tr key={purchase.id}>
          <td>
            <StyledLink to={`/customers/${customer?.id}`}>
              {`${customer?.firstName} ${customer?.lastName}`}
            </StyledLink>
          </td>
          <td>
            <ul>
              <li>
                <StyledLink to={`/products/${product?.id}`}>
                  {product?.name}
                </StyledLink>
                : ({purchase.quantity})
              </li>
            </ul>
          </td>
          <td>
            <ul>
              <li>{purchase.date}</li>
            </ul>
          </td>
        </tr>
      );
    });
  };

  const getAllCustomersPurchases = () => {
    return tableShownCustomers?.map((tableShownCustomer) => {
      const customerProducts = getReducedCustomersProducts(
        tableShownCustomer.id,
        purchases,
        products,
      );

      const customerPurchases = getCustomersPurchases(
        tableShownCustomer.id,
        purchases,
        products,
      );
      return (
        <tr key={tableShownCustomer.id}>
          <td>
            <StyledLink to={`/customers/${tableShownCustomer.id}`}>
              {`${tableShownCustomer.firstName} ${tableShownCustomer.lastName}`}
            </StyledLink>
          </td>
          <td>
            {isObjectEmpty(customerProducts) ? (
              'No Products'
            ) : (
              <ul>
                {Object.keys(customerProducts).map((product) => {
                  return (
                    <li key={customerProducts[product].id}>
                      <StyledLink
                        to={`/products/${customerProducts[product].id}`}
                      >
                        {product}
                      </StyledLink>
                      : ({customerProducts[product].quantity})
                    </li>
                  );
                })}
              </ul>
            )}
          </td>
          <td>
            {customerPurchases.length === 0 ? (
              'No Purchases'
            ) : (
              <ul>
                {customerPurchases.map((purchase) => {
                  return (
                    <li key={purchase.id}>
                      <>
                        {purchase.date} : {purchase.product} (
                        {purchase.quantity})
                      </>
                    </li>
                  );
                })}
              </ul>
            )}
          </td>
        </tr>
      );
    });
  };
  return (
    <tbody>
      {isFilteredPurchases
        ? getFilteredPurchases()
        : customerId
        ? getCustomerPurchases()
        : getAllCustomersPurchases()}
    </tbody>
  );
}
