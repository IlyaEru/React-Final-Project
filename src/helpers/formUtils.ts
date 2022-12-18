import { EditFormProps } from '../components/EditForm/EditForm';
import { Customer, Product } from '../types';

export interface ItemField {
  [key: string]: { value: string | number; isEdit: boolean };
}

export const getField = <T>(editedType: EditFormProps['editedType']): T => {
  if (editedType === 'product') {
    return ['name', 'price', 'quantity'] as T;
  }
  return ['firstName', 'lastName', 'city'] as T;
};

export const getProductInitialValues = (editedItem: Product | undefined) => {
  const fields: (keyof Product)[] = getField<(keyof Product)[]>('product');
  return fields.reduce((acc, field) => {
    acc[field] = editedItem
      ? { value: editedItem[field], isEdit: false }
      : { value: '', isEdit: false };
    return acc;
  }, {} as ItemField);
};

export const getCustomerInitialValues = (editedItem: Customer | undefined) => {
  const fields: (keyof Customer)[] = getField<(keyof Customer)[]>('customer');
  return fields.reduce((acc, field) => {
    acc[field] = editedItem
      ? { value: editedItem[field], isEdit: false }
      : { value: '', isEdit: false };
    return acc;
  }, {} as ItemField);
};
