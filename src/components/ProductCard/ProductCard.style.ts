import styled from 'styled-components';
import { StyledCard } from '../../styles/globalStyle';

export const StyledProductCardContainer = styled(StyledCard)<{
  $height: number;
  $id: string;
}>`
  align-self: flex-start;
  color: ${({ theme }) => theme.colors.text};
  max-width: 600px;
  width: 100%;
  white-space: nowrap;
  margin: 1.5rem 0;
  &[id='${({ $id }) => $id}'] {
    grid-row-end: span ${({ $height }) => Math.round($height / 10) + 4};
  }
  > h3,
  p {
    letter-spacing: ${({ theme }) => theme.letterSpacing};
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.xSmall}) {
    font-size: 0.9rem;
  }
  @media (max-width: 400px) {
    font-size: 0.7rem;
  }
`;
export const StyledProductName = styled.h3`
  font-size: 1.4rem;
  white-space: normal;
  text-align: center;
  a {
    color: ${({ theme }) => theme.colors.primaryDarkBlue};
    text-decoration: none;
  }
  :hover {
    text-decoration: underline;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.xSmall}) {
    font-size: 1.2rem;
  }
`;

export const StyledProductPrice = styled.p`
  font-weight: bold;
  .price-value {
    color: ${({ theme }) => theme.colors.gold};
    font-size: 1.1rem;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.xSmall}) {
    font-size: 1rem;
  }
`;

export const StyledProductQuantity = styled.p`
  font-weight: bold;
  margin-top: 0.2rem;
  .quantity-value {
    color: ${({ theme }) => theme.colors.primaryBlue2};
    font-size: 1.1rem;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.xSmall}) {
    font-size: 1rem;
  }
`;
