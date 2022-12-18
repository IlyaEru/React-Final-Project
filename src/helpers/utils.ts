import dayjs from 'dayjs';
import { Customer, Product, Purchase } from '../types';

interface ProductWithQuantity {
  quantity: number;
  id: string;
}

interface CustomerWithQuantity {
  quantity: number;
  id: string;
  customerId: string;
}

export const isObjectEmpty = (obj: Record<string, unknown>) => {
  return Object.keys(obj).length === 0;
};

export const getTotalAmountOfPurchasedProducts = (
  purchases: Purchase[] | undefined,
) => {
  if (purchases === undefined) return 0;

  return purchases.reduce(
    (acc: number, purchase: Purchase) => acc + purchase.quantity,
    0,
  );
};

export const getReducedCustomersProducts = (
  customerId: string,
  purchases: Purchase[] | [],
  products: Product[] | [],
) => {
  if (!purchases.find((purchase) => purchase.customerId === customerId)) {
    return {};
  }
  const customersPurchases = getCustomersPurchases(
    customerId,
    purchases,
    products,
  );
  return customersPurchases.reduce(
    (productsObj: Record<string, ProductWithQuantity>, purchase: Purchase) => {
      const product = products.find(
        (product) => product.id === purchase.productId,
      );
      if (product) {
        if (productsObj[product.name]) {
          productsObj[product.name].quantity += purchase.quantity;
        } else {
          productsObj[product.name] = {
            quantity: purchase.quantity,
            id: product.id,
          };
        }
      }
      return productsObj;
    },
    {},
  );
};

export const getCustomersPurchases = (
  customerId: string,
  purchases: Purchase[] | [],
  products: Product[] | [],
) => {
  return purchases
    .filter((purchase) => purchase.customerId === customerId)
    .map((purchase) => {
      const product = products.find(
        (product) => product.id === purchase.productId,
      );
      if (!product) return purchase;
      return {
        ...purchase,
        product: product.name,
      };
    });
};

export const getProductsPurchases = (
  productId: string,
  purchases: Purchase[] | [],
  customers: Customer[] | [],
) => {
  return purchases
    .filter((purchase) => purchase.productId === productId)
    .map((purchase) => {
      const customer = customers.find(
        (customer) => customer.id === purchase.customerId,
      );
      if (!customer) return purchase;
      return {
        ...purchase,
        customer: customer.id,
      };
    });
};

export const getReducedProductsPurchases = (
  productId: string,
  purchases: Purchase[] | [],
  customers: Customer[] | [],
) => {
  if (!purchases.find((purchase) => purchase.productId === productId)) {
    return {};
  }
  const productsPurchases = getProductsPurchases(
    productId,
    purchases,
    customers,
  );
  return productsPurchases.reduce(
    (
      customersObj: Record<string, CustomerWithQuantity>,
      purchase: Purchase,
    ) => {
      const customer = customers.find(
        (customer) => customer.id === purchase.customerId,
      );
      if (customer) {
        if (customersObj[customer.firstName + ' ' + customer.lastName]) {
          customersObj[customer.firstName + ' ' + customer.lastName].quantity +=
            purchase.quantity;
        } else {
          customersObj[customer.firstName + ' ' + customer.lastName] = {
            quantity: purchase.quantity,
            id: purchase.id,
            customerId: purchase.customerId,
          };
        }
      }
      return customersObj;
    },
    {},
  );
};

export const getFormattedISODate = () => {
  return (
    new Date().toISOString().split('T')[0] +
    ' ' +
    new Date().toISOString().split('T')[1].split('.')[0]
  );
};

export const getPurchasesSearchFilter = (
  purchases: Purchase[] | [],
  selectedCustomer: string,
  selectedProduct: string,
  selectedDateFrom: string,
  selectedDateTo: string,
) => {
  const custumerAndProductFilter = purchases.filter((purchase) => {
    if (selectedCustomer === 'all' && selectedProduct === 'all') {
      return true;
    }
    if (selectedCustomer === 'all') {
      return purchase.productId === selectedProduct;
    }
    if (selectedProduct === 'all') {
      return purchase.customerId === selectedCustomer;
    }
    return (
      purchase.customerId === selectedCustomer &&
      purchase.productId === selectedProduct
    );
  });
  const dateFilter = custumerAndProductFilter.filter((purchase) => {
    if (selectedDateFrom === '' && selectedDateTo === '') {
      return true;
    }
    if (selectedDateFrom === '') {
      return dayjs(purchase.date).isBefore(dayjs(selectedDateTo));
    }
    if (selectedDateTo === '') {
      return dayjs(purchase.date).isAfter(dayjs(selectedDateFrom));
    }
    return (
      dayjs(purchase.date).isAfter(dayjs(selectedDateFrom)) &&
      dayjs(purchase.date).isBefore(dayjs(selectedDateTo))
    );
  });
  return dateFilter;
};
