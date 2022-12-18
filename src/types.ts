export interface Product {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

export interface Customer {
  id: string;
  firstName: string;
  lastName: string;
  city: string;
}

export interface Purchase {
  id: string;
  customerId: string;
  productId: string;
  quantity: number;
  date: string;
  product?: string;
}
