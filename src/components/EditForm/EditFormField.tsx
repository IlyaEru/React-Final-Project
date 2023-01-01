import { Customer, Product } from '../../types';
import {
  EditFormFieldButton,
  EditFormFieldValue,
  EditFormFieldWrapper,
  EditFormInput,
  EditFormLabel,
} from './EditForm.style';
import { FaEdit } from 'react-icons/fa';
import { ImCancelCircle } from 'react-icons/im';
import { IoMdCheckboxOutline } from 'react-icons/io';

interface EditFormFieldProps {
  field: keyof Product | keyof Customer;
  editedItem: {
    [key: string]: { value: string | number; isEdit: boolean };
  };
  editedType: 'product' | 'customer';
  callbacks: {
    handleEditFieldChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleEditFieldEdit: (field: keyof Product | keyof Customer) => void;
    handleEditFieldCancel: (field: keyof Product | keyof Customer) => void;
    handleEditFieldSave: (field: keyof Product | keyof Customer) => void;
  };
}
export default function EditFormField({
  field,
  editedItem,
  editedType,
  callbacks,
}: EditFormFieldProps) {
  const getFormattedLabel = () => {
    if (field === 'firstName' || field === 'lastName') {
      return `${field.split('Name')[0]} Name:`;
    }
    return `${field}:`;
  };

  return (
    <EditFormFieldWrapper
      key={field}
      className={`edit-form__${field}-field ${
        editedItem[field].isEdit ? 'active' : ''
      }`}
    >
      {editedItem[field].isEdit ? (
        <>
          <EditFormLabel htmlFor={`edit-${editedType}__${field}-input`}>
            {getFormattedLabel()}
          </EditFormLabel>

          <EditFormInput
            className={`edit-form__input ${
              field === 'price' ? 'price-input' : ''
            } `}
            name={field}
            id={`edit-${editedType}__${field}-input`}
            type={field === 'price' || field === 'quantity' ? 'number' : 'text'}
            value={editedItem[field].value}
            onChange={callbacks.handleEditFieldChange}
          />
          <EditFormFieldButton
            className="edit-form__save-button"
            onClick={() => callbacks.handleEditFieldSave(field)}
          >
            <IoMdCheckboxOutline />
          </EditFormFieldButton>
          <EditFormFieldButton
            className="edit-form__cancel-button"
            onClick={() => callbacks.handleEditFieldCancel(field)}
          >
            <ImCancelCircle />
          </EditFormFieldButton>
        </>
      ) : (
        <>
          <EditFormLabel>{getFormattedLabel()}</EditFormLabel>
          <EditFormFieldValue>
            {field === 'price'
              ? `${editedItem[field].value}$`
              : editedItem[field].value}
          </EditFormFieldValue>
          <EditFormFieldButton
            className="edit-form__edit-button"
            onClick={() => callbacks.handleEditFieldEdit(field)}
          >
            <FaEdit />
          </EditFormFieldButton>
        </>
      )}
    </EditFormFieldWrapper>
  );
}
