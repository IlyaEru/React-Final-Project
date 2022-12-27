import styled from 'styled-components';

export const StyledToastContainer = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  z-index: 100;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 1rem;
  gap: 1rem;
`;

export const StyledToast = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.5rem;
  opacity: 0;
  transform: translateY(100%);
  transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;

  &.show {
    opacity: 1;
    transform: translateY(0);
  }

  &.success {
    background-color: #f6ffed;
    border: 1px solid #b7eb8f;
    color: #52c41a;
  }
  &.error {
    background-color: #fff1f0;
    border: 1px solid #ffa39e;
    color: #cf1322;
  }
`;

export const StyledToastMessage = styled.div``;

export const StyledToastCloseButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  padding: 0.5rem;
  border: none;
  background: transparent;
  cursor: pointer;
  outline: none;
  font-weight: bold;
`;
