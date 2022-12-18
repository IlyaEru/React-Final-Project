import styled from 'styled-components';

export const StyledMenuContainer = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background: ${({ theme }) => theme.colors.grey};
  color: white;
  box-shadow: ${({ theme }) => theme.lightShadow};
`;

export const StyledMenuList = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

export const StyledMenuListItem = styled.li`
  margin: 0 10px;
  a {
    color: ${({ theme }) => theme.colors.darkGrey};
    text-decoration: none;
    font-size: 1.4rem;
    transition: all 0.2s ease;
    position: relative;
    font-family: 'josefin sans', sans-serif;
    font-weight: 700;

    &:hover,
    &.active {
      color: ${({ theme }) => theme.colors.primaryBlue};
      ::after {
        width: 100%;
      }
    }
    ::after {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      margin: auto;
      width: 0%;
      content: '.';
      color: transparent;
      background: ${({ theme }) => theme.colors.primaryBlue};
      height: 2px;
      transition: all 0.4s ease;
    }
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.xSmall}) {
    a {
      font-size: 1rem;
    }
  }
`;
