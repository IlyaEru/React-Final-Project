import styled from 'styled-components';
import { StyledButton, StyledTable } from '../../styles/globalStyle';

export const StyledProductPurchasesContainer = styled.section`
  width: 100%;
  max-width: ${({ theme }) => theme.smallMaxWidth};
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const StyledProductPurchasesHeader = styled.h4`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.primaryDarkBlue};
  margin-bottom: 1rem;
  font-family: 'Cormorant Upright ';
`;

export const StyledProductPurchasesTable = styled(StyledTable)`
  margin: 1rem;
  max-width: ${({ theme }) => theme.smallMaxWidth};
  thead {
    background-color: ${({ theme }) => theme.colors.primaryDarkBlue};
    color: white;
  }
  td,
  th {
    text-align: center;
  }
  tbody {
    tr {
      background-color: ${({ theme }) => theme.colors.white};
    }
    tr:hover {
      background-color: ${({ theme }) => theme.colors.lightGrey};
    }
  }
  margin-bottom: 1rem;
`;

export const StyledProductPurchasesButton = styled(StyledButton)`
  margin-top: 1rem;
  min-width: 11rem;
  min-height: 2.5rem;
  font-size: 1.1rem;
  :hover {
    background-color: ${({ theme }) => theme.colors.primaryDarkBlue};
    color: white;
  }
`;
