import styled from 'styled-components';

export const StyledEditCustomerContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
`;

export const StyledCustomerPurchasesHeader = styled.h4`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.primaryDarkBlue};
  margin-bottom: 1rem;
  font-family: 'Cormorant Upright ';
`;
