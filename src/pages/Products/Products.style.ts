import styled from 'styled-components';
import { StyledContainer, StyledMainHeading } from '../../styles/globalStyle';

export const StyledProductsContainer = styled(StyledContainer).attrs({
  as: 'main',
})`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 1rem;
`;
export const StyledProductsPurchaseHeader = styled.h2`
  color: ${({ theme }) => theme.colors.primaryDarkBlue};
  margin: 0 0 10px 0;
  font-family: 'Cormorant Upright', serif;
  font-weight: 700;
  font-size: 2.2rem;
  @media (max-width: ${({ theme }) => theme.breakpoints.xSmall}) {
    font-size: 1.8rem;
  }
`;
export const StyledProductsHeader = styled(StyledMainHeading)`
  font-weight: 400;
  margin: 0;
  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    font-size: 2rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.xSmall}) {
    font-size: 1.8rem;
  }
`;
