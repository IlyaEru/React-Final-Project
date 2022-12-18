import styled from 'styled-components';
import { StyledContainer, StyledMainHeading } from '../../styles/globalStyle';

export const StyledPurchasesContainer = styled(StyledContainer).attrs({
  as: 'main',
})`
  max-width: ${({ theme }) => theme.smallMaxWidth};
`;
export const StyledPurchasesHeader = styled(StyledMainHeading)`
  font-weight: 400;
  padding-top: 1rem;
  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    font-size: 2rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.xSmall}) {
    font-size: 1.8rem;
  }
`;
