import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { removeToast, toastsSelector } from '../../features/toasts/toastsSlice';
import {
  StyledToast,
  StyledToastCloseButton,
  StyledToastContainer,
  StyledToastMessage,
} from './Toast.style';
import ToastView from './ToastView';

export default function Toast() {
  const toastList = useAppSelector(toastsSelector);

  const dispatch = useAppDispatch();
  const handleRemoveToast = (toastId: string) => {
    dispatch(removeToast(toastId));
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (toastList.length > 0) {
        handleRemoveToast(toastList[0].id);
      }
    }, 2000);
    return () => clearTimeout(timer);
  }, [toastList]);
  return (
    <StyledToastContainer>
      {toastList.map((item) => (
        <ToastView
          key={item.id}
          item={item}
          handleRemoveToast={handleRemoveToast}
        />
      ))}
    </StyledToastContainer>
  );
}
