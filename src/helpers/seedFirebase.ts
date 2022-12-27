import { addProduct, addCustomer } from './firebase';

const products = [
  {
    name: 'Fidget Spinner',
    price: 10.99,
    quantity: 100,
  },
  {
    name: 'Bluetooth Speaker',
    price: 5.99,
    quantity: 50,
  },
  {
    name: 'Smartphone',
    price: 15.99,
    quantity: 75,
  },
  {
    name: 'Laptop',
    price: 20.99,
    quantity: 25,
  },
  {
    name: 'Television',
    price: 25.99,
    quantity: 10,
  },
  {
    name: 'Gaming Console',
    price: 30.99,
    quantity: 5,
  },
  {
    name: 'Smartwatch',
    price: 35.99,
    quantity: 20,
  },
  {
    name: 'Virtual Reality Headset',
    price: 40.99,
    quantity: 15,
  },
  {
    name: 'Electric Scooter',
    price: 45.99,
    quantity: 10,
  },
  {
    name: 'Drone',
    price: 50.99,
    quantity: 5,
  },
];

const customers = [
  {
    firstName: 'John',
    lastName: 'Doe',
    city: 'New York',
  },
  {
    firstName: 'Jane',
    lastName: 'Doe',
    city: 'Chicago',
  },
  {
    firstName: 'Bob',
    lastName: 'Smith',
    city: 'Los Angeles',
  },
  {
    firstName: 'Alice',
    lastName: 'Smith',
    city: 'Houston',
  },
  {
    firstName: 'Mike',
    lastName: 'Johnson',
    city: 'Philadelphia',
  },
  {
    firstName: 'Sarah',
    lastName: 'Johnson',
    city: 'Phoenix',
  },
  {
    firstName: 'Dave',
    lastName: 'Williams',
    city: 'San Antonio',
  },
  {
    firstName: 'Linda',
    lastName: 'Williams',
    city: 'San Diego',
  },
  {
    firstName: 'James',
    lastName: 'Brown',
    city: 'Dallas',
  },
  {
    firstName: 'Emily',
    lastName: 'Brown',
    city: 'San Francisco',
  },
];

export const seedProducts = async () => {
  products.forEach(async (product) => {
    const { name, price, quantity } = product;
    await addProduct(name, price, quantity);
  });
};

export const seedCustomers = async () => {
  customers.forEach(async (customer) => {
    const { firstName, lastName, city } = customer;
    await addCustomer(firstName, lastName, city);
  });
};
