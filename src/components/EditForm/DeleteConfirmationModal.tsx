import {
  EditFormModalButton,
  EditFormModalButtons,
  EditFormModalContainer,
  EditFormModalContent,
} from './EditForm.style';

interface DeleteConfirmationModalProps {
  handleItemDeleteConfirm: () => void;
  handleItemDeleteReject: () => void;
  itemName: string;
}

export default function DeleteConfirmationModal({
  handleItemDeleteConfirm,
  handleItemDeleteReject,
  itemName,
}: DeleteConfirmationModalProps) {
  return (
    <EditFormModalContainer>
      <EditFormModalContent>
        <h1>Are you sure you want to delete {itemName}?</h1>
        <EditFormModalButtons>
          <EditFormModalButton onClick={handleItemDeleteConfirm}>
            Yes
          </EditFormModalButton>
          <EditFormModalButton onClick={handleItemDeleteReject}>
            No
          </EditFormModalButton>
        </EditFormModalButtons>
      </EditFormModalContent>
    </EditFormModalContainer>
  );
}
