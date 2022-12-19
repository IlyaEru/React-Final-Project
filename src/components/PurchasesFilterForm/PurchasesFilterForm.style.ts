import styled from 'styled-components';
import { StyledButton, StyledCard } from '../../styles/globalStyle';

export const StyledPurchasesFilterFormContainer = styled(StyledCard)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.xSmall}) {
    input#dateFrom,
    input#dateTo {
      font-size: 0.8rem;
    }
  }
`;
export const StyledPurchasesFilterFormInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 0.6rem;
  label {
    font-size: 1rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
    text-transform: capitalize;
  }
  select {
    height: 1.8rem;
    border: 1px solid #d9d9d9;
    border-radius: 5px;
    padding: 0 0.5rem;
    background: transparent;
    font-size: 1rem;
    outline: none;
    transition: border 0.2s;
    :focus,
    :active,
    :hover {
      border-color: #40a9ff;
    }
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.xSmall}) {
    select {
      font-size: 0.8rem;
    }
  }
`;
export const StyledPurchasesFilterFormButton = styled(StyledButton)`
  grid-column: 1 / -1;
  color: #fff;
  width: 15rem;
  justify-self: center;
`;
