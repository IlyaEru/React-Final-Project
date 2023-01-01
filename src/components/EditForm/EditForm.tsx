import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useCustomers, useProducts } from '../../app/hooks';
import {
  removeCustomer,
  setCustomer,
} from '../../features/customers/customersSlice';
import {
  removeProduct,
  setProduct,
} from '../../features/products/productsSlice';
import {
  getCustomerInitialValues,
  getField,
  getProductInitialValues,
} from '../../helpers/formUtils';
import { Customer, Product } from '../../types';
import DeleteConfirmationModal from './DeleteConfirmationModal';
import {
  EditFormDeleteButton,
  StyledEditFormContainer,
} from './EditForm.style';
import EditFormField from './EditFormField';

export interface EditFormProps {
  editedId: string;
  editedType: 'product' | 'customer';
}

export default function EditForm({ editedId, editedType }: EditFormProps) {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [products, isLoadingProducts] = useProducts();
  const [customers, isLoadingCustomers] = useCustomers();
  const [isDeleteConfirmationModalShown, setIsDeleteConfirmationModalShown] =
    useState(false);

  const fields: (keyof Product | keyof Customer)[] = getField(editedType);

  const [item, setItem] = useState<Product | Customer | undefined>(undefined);

  const initialValues =
    editedType === 'product'
      ? getProductInitialValues(item as Product)
      : getCustomerInitialValues(item as Customer);

  useEffect(() => {
    if (!item) {
      return;
    }
    setEditedItem(initialValues);
  }, [item]);

  useEffect(() => {
    if (!isLoadingProducts && !isLoadingCustomers) {
      setItem(
        editedType === 'product'
          ? products.find((product) => product.id === editedId)
          : customers.find((customer) => customer.id === editedId),
      );
    }
  }, [isLoadingProducts, isLoadingCustomers]);
  const [editedItem, setEditedItem] = useState(initialValues);

  const callbacks = {
    handleEditFieldChange: (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setEditedItem((prev) => ({
        ...prev,
        [name]: {
          ...prev[name],
          value,
        },
      }));
    },
    handleEditFieldEdit: (field: keyof Product | keyof Customer) => {
      setEditedItem((prev) => ({
        ...prev,
        [field]: {
          ...prev[field],
          isEdit: true,
        },
      }));
    },
    handleEditFieldCancel: (field: keyof Product | keyof Customer) => {
      setEditedItem((prev) => ({
        ...prev,
        [field]: {
          value: initialValues[field].value,
          isEdit: false,
        },
      }));
    },
    handleEditFieldSave: (field: keyof Product | keyof Customer) => {
      if (!editedItem[field].value) {
        return;
      }
      if (field === 'price') {
        editedItem[field].value = Number(editedItem[field].value).toFixed(2);
      }
      const updatedItem = { ...item, [field]: editedItem[field].value };
      if (editedType === 'product') {
        dispatch(setProduct(updatedItem as Product));
      } else {
        dispatch(setCustomer(updatedItem as Customer));
      }
      setEditedItem((prev) => ({
        ...prev,
        [field]: {
          ...prev[field],
          isEdit: false,
        },
      }));
    },
  };

  const handleEditFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const handleItemDeleteConfirm = () => {
    if (editedType === 'product') {
      dispatch(removeProduct(editedId));
    } else {
      dispatch(removeCustomer(editedId));
    }
    navigate('/');
  };

  const handleItemDeleteReject = () => {
    setIsDeleteConfirmationModalShown(false);
  };

  if (!editedItem) return <h1>{editedType} not found</h1>;

  return (
    <StyledEditFormContainer as="form" onSubmit={handleEditFormSubmit}>
      <>
        {fields.map((field) => (
          <EditFormField
            key={field}
            field={field}
            editedItem={editedItem}
            editedType={editedType}
            callbacks={callbacks}
          />
        ))}
        <EditFormDeleteButton
          onClick={() => setIsDeleteConfirmationModalShown(true)}
        >
          Delete
        </EditFormDeleteButton>
        {isDeleteConfirmationModalShown && (
          <DeleteConfirmationModal
            handleItemDeleteConfirm={handleItemDeleteConfirm}
            handleItemDeleteReject={handleItemDeleteReject}
            itemName={
              editedType === 'product'
                ? (editedItem.name.value as string)
                : `${editedItem.firstName.value} ${editedItem.lastName.value}`
            }
          />
        )}
      </>
    </StyledEditFormContainer>
  );
}
