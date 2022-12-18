import styled from 'styled-components';
import { StyledOutlineButton } from '../../styles/globalStyle';

export const StyledBuyProductForm = styled.form`
  background-color: white;
  padding: 2rem 3rem;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin: 1rem 0;
  gap: 1rem;
  box-shadow: ${({ theme }) => theme.lightShadow};
  @media (max-width: ${({ theme }) => theme.breakpoints.xSmall}) {
    font-size: 1rem;
    padding: 1rem 1.5rem;
  }
  @media (max-width: 400px) {
    font-size: 0.8rem;
    padding: 0.5rem 1rem;
  }
`;
export const StyledBuyProductFormInputWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  grid-template-columns: 1fr 2fr;
  gap: 1rem;
`;
export const StyledBuyProductFormButton = styled(StyledOutlineButton)`
  width: 100%;
  &:hover {
    background-color: ${({ theme }) => theme.colors.lightGrey3};
  }
`;
export const StyledBuyProductFormLabel = styled.label`
  flex: 1;
  font-size: 1.2rem;
  font-weight: 500;
  letter-spacing: ${({ theme }) => theme.letterSpacing};
  text-transform: capitalize;

  @media (max-width: ${({ theme }) => theme.breakpoints.xSmall}) {
    font-size: 1rem;
  }
`;

export const StyledBuyProductFormInput = styled.input`
  flex: 2;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  appearance: none;
  background-color: white;
  background-position: right 10px top 50%, 0 0;
  background-size: 20px auto, 100%;
  background-repeat: no-repeat;
  width: inherit;
  transition: border 0.2s;
  :focus,
  :hover,
  :active {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primaryBlue};
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.xSmall}) {
    font-size: 0.9rem;
  }

  @media (max-width: 400px) {
    font-size: 0.7rem;
  }
`;

export const StyledBuyProductFormSelect = styled(
  StyledBuyProductFormInput,
).attrs({
  as: 'select',
})``;
export const StyledBuyProductFormOption = styled.option``;

export const StyledBuyProductFormPrice = styled.p`
  padding: 10px 0;
  .label {
    font-size: 1.2rem;
    font-weight: 500;
    @media (max-width: ${({ theme }) => theme.breakpoints.xSmall}) {
      font-size: 1rem;
    }
  }
  .price-value {
    font-weight: 500;
  }
`;

export const StyledButProductFormTotalPrice = styled(StyledBuyProductFormPrice)`
  display: flex;
  width: 100%;
  .label {
    margin-right: auto;
  }
  .total-price-value {
    font-size: 1.2rem;
    font-weight: 700;
  }
`;
