import dayjs from 'dayjs';
import { Customer, Product, Purchase } from '../types';

export const getSortedPurchases = (
  purchases: [] | Purchase[],
  customers: [] | Customer[],
  products: [] | Product[],
  sortBy: string,
) => {
  return [...purchases].sort((a, b) => {
    if (sortBy === 'name-down') {
      const customerA = customers.find(
        (customer) => customer.id === a.customerId,
      );
      const customerB = customers.find(
        (customer) => customer.id === b.customerId,
      );
      if (customerA && customerB) {
        return customerA.firstName.localeCompare(customerB.firstName);
      }
    } else if (sortBy === 'name-up') {
      const customerA = customers.find(
        (customer) => customer.id === a.customerId,
      );
      const customerB = customers.find(
        (customer) => customer.id === b.customerId,
      );
      if (customerA && customerB) {
        return customerB.firstName.localeCompare(customerA.firstName);
      }
    } else if (sortBy === 'product-down') {
      const productA = products.find((product) => product.id === a.productId);
      const productB = products.find((product) => product.id === b.productId);
      if (productA && productB) {
        return productA.name.localeCompare(productB.name);
      }
    } else if (sortBy === 'product-up') {
      const productA = products.find((product) => product.id === a.productId);
      const productB = products.find((product) => product.id === b.productId);
      if (productA && productB) {
        return productB.name.localeCompare(productA.name);
      }
    } else if (sortBy === 'date-down') {
      return dayjs(a.date).isBefore(dayjs(b.date)) ? -1 : 1;
    } else if (sortBy === 'date-up') {
      return dayjs(a.date).isBefore(dayjs(b.date)) ? 1 : -1;
    }

    return 0;
  });
};

export const getSortedCustomers = (
  sortBy: string,
  customers: [] | Customer[],
) => {
  if (customers.length === 0) {
    return customers;
  }

  return [...customers].sort((a, b) => {
    if (sortBy === 'name-down') {
      return a.firstName.localeCompare(b.firstName);
    } else if (sortBy === 'name-up') {
      return b.firstName.localeCompare(a.firstName);
    } else if (sortBy === 'city-down') {
      return a.city.localeCompare(b.city);
    } else if (sortBy === 'city-up') {
      return b.city.localeCompare(a.city);
    }

    return 0;
  });
};
