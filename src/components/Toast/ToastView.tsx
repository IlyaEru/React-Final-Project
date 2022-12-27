import React, { useEffect, useState } from 'react';
import {
  StyledToast,
  StyledToastCloseButton,
  StyledToastMessage,
} from './Toast.style';

interface ToastViewProps {
  item: {
    id: string;
    message: string;
    type: string;
  };
  handleRemoveToast: (id: string) => void;
}

export default function ToastView({ item, handleRemoveToast }: ToastViewProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const showTimer = setTimeout(() => {
      setIsMounted(true);
    }, 100);
    return () => clearTimeout(showTimer);
  }, []);

  useEffect(() => {
    const removeTimer = setTimeout(() => {
      handleRemoveToast(item.id);
    }, 4000);
    const hideTimer = setTimeout(() => {
      setIsMounted(false);
    }, 3700);

    return () => {
      clearTimeout(removeTimer);
      clearTimeout(hideTimer);
    };
  }, []);
  return (
    <StyledToast
      key={item.id}
      className={`${item.type} ${isMounted ? 'show' : ''}`}
    >
      <StyledToastMessage>
        {item.message}
        <StyledToastCloseButton
          onClick={() => {
            handleRemoveToast(item.id);
          }}
        >
          X
        </StyledToastCloseButton>
      </StyledToastMessage>
    </StyledToast>
  );
}
