import styled from 'styled-components';
import { StyledButton, StyledCard } from '../../styles/globalStyle';

export const StyledEditFormContainer = styled(StyledCard)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  padding: 2rem 3rem;
  justify-items: start;
  margin-top: 2rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.xSmall}) {
    padding: 1rem 1.5rem;
  }
`;

export const EditFormLabel = styled.label`
  display: flex;
  align-items: center;
  white-space: nowrap;
  text-transform: capitalize;
  font-size: 1.2rem;
  font-weight: 300;
  margin-right: 0.4rem;
  color: ${({ theme }) => theme.colors.primaryDarkBlue};
  @media (max-width: ${({ theme }) => theme.breakpoints.xSmall}) {
    font-size: 1rem;
  }
`;

export const EditFormFieldWrapper = styled.div`
  display: flex;
  &.edit-form__city-field,
  &.edit-form__name-field {
    grid-column: 1 / -1;
    display: flex;
  }
  &.active {
    display: grid;
    align-items: center;
    grid-auto-flow: column;
    grid-template-columns: 1fr 2fr;
    width: 100%;
    grid-column: 1 / -1;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    grid-template-columns: 1fr 2.5fr;
  }

  @media (max-width: 420px) {
    grid-template-columns: 1fr 2fr;
  }
`;

export const EditFormFieldValue = styled.p`
  font-size: 1.4rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.xSmall}) {
    font-size: 1.2rem;
  }
`;

export const EditFormFieldButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  font-size: 1.4rem;
  display: flex;
  align-items: center;
  margin-left: 0.4rem;
  &.edit-form__edit-button {
    color: ${({ theme }) => theme.colors.blueStage1};
    &:hover {
      color: ${({ theme }) => theme.colors.blueStage2};
    }
    &:focus,
    &:active {
      outline: none;
      color: ${({ theme }) => theme.colors.blueStage3};
    }
  }
  &.edit-form__cancel-button {
    color: ${({ theme }) => theme.colors.redStage1};
    &:hover {
      color: ${({ theme }) => theme.colors.redStage2};
    }
    &:focus,
    &:active {
      outline: none;
      color: ${({ theme }) => theme.colors.redStage3};
    }
  }
  &.edit-form__save-button {
    color: ${({ theme }) => theme.colors.greenStage1};
    &:hover {
      color: ${({ theme }) => theme.colors.greenStage2};
    }
    &:focus,
    &:active {
      outline: none;
      color: ${({ theme }) => theme.colors.greenStage3};
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.xSmall}) {
    font-size: 1.2rem;
  }
`;

export const EditFormDeleteButton = styled(StyledButton)`
  margin-top: 1rem;
  font-size: 1.1rem;
  text-transform: uppercase;
  grid-column: 1 / -1;
  padding: 0.6rem 4rem;
  justify-self: center;
  background-color: ${({ theme }) => theme.colors.redStage1};
  color: ${({ theme }) => theme.colors.white};
  &:hover {
    background-color: ${({ theme }) => theme.colors.redStage2};
  }
  &:focus,
  &:active {
    outline: none;
    background-color: ${({ theme }) => theme.colors.redStage3};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.xSmall}) {
    font-size: 0.9rem;
  }
`;

export const EditFormInput = styled.input`
  width: inherit;
  font-size: 1.2rem;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  appearance: none;
  background-color: white;
  background-position: right 10px top 50%, 0 0;
  background-size: 20px auto, 100%;
  background-repeat: no-repeat;
  transition: border 0.2s;
  position: relative;
  :focus,
  :hover,
  :active {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primaryBlue};
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.xSmall}) {
    font-size: 1rem;
    padding: 6px 10px;
  }
`;

export const EditFormModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
`;

export const EditFormModalContent = styled.div`
  margin-top: -10%;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 1.2rem;
  border-radius: 5px;
  box-shadow: ${({ theme }) => theme.lightShadow};
`;

export const EditFormModalButtons = styled.div`
  display: flex;

  align-items: center;
  justify-content: flex-end;
  margin-top: 1.2rem;
`;

export const EditFormModalButton = styled.button`
  padding: 0.6rem 1.2rem;
  background-color: transparent;
  border: 1px solid #ccc;
  border-radius: 5px;
  cursor: pointer;
  margin-left: 1rem;
  &:hover {
    background-color: #ccc;
  }
`;
