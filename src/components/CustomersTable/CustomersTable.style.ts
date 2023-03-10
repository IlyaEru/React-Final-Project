import styled from 'styled-components';
import { StyledTable } from '../../styles/globalStyle';

export const StyledNoPurchasesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  margin-top: 3rem;
`;

export const StyledCustomersTable = styled(StyledTable)`
  margin-bottom: 1rem;
  white-space: nowrap;
  max-width: ${({ theme }) => theme.smallMaxWidth};
  thead {
    background-color: ${({ theme }) => theme.colors.primaryDarkBlue};
    color: white;
    .table-header__content-wrapper {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    th button {
      display: flex;
      justify-content: center;
      align-items: center;
      background: transparent;
      border: none;
      color: white;
      font-size: 1.2rem;
      cursor: pointer;
      margin-left: 0.2rem;
      opacity: 0.5;
      transition: opacity 0.2s ease-in-out;

      :hover,
      &.active {
        opacity: 1;
      }
    }
  }
  td,
  th {
    text-align: center;
  }
  tbody td:nth-child(3n) {
    text-align: left;
    white-space: normal;
    ul li {
      margin-bottom: 0.4rem;
    }
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.xSmall}) {
    font-size: 0.7rem;
    thead th button {
      font-size: 0.8rem;
    }
    tbody td:nth-child(3n) {
      font-size: 0.6rem;
    }
  }
  @media (max-width: 400px) {
    font-size: 0.7rem;
    thead th button {
      font-size: 0.8rem;
    }
    tbody td:nth-child(3n) {
      font-size: 0.6rem;
    }
  }
`;
