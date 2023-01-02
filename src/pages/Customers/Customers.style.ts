import styled from 'styled-components';
import {
  StyledButton,
  StyledContainer,
  StyledMainHeading,
} from '../../styles/globalStyle';

export const StyledCustomersContainer = styled(StyledContainer).attrs({
  as: 'main',
})`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.xSmall}) {
    padding: 0 1rem;
  }
`;

export const StyledCustomersHeader = styled(StyledMainHeading)`
  font-weight: 400;
  padding-top: 1rem;
  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    font-size: 2rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.xSmall}) {
    font-size: 1.8rem;
  }
`;

export const StyledCustomersBuyProductButton = styled(StyledButton)`
  margin-top: 1rem;
  min-width: 11rem;
  min-height: 2.5rem;
  font-size: 1.1rem;
  margin-bottom: 2rem;
  :hover {
    background-color: ${({ theme }) => theme.colors.primaryDarkBlue};
    color: white;
  }
`;
