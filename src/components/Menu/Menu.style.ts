import styled from 'styled-components';

export const StyledMenuContainer = styled.header`
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 1fr 6fr 1fr;
  justify-items: center;
  padding: 20px;
  background: ${({ theme }) => theme.colors.menuBackground};
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
    color: ${({ theme }) => theme.colors.menuText};
    text-decoration: none;
    font-size: 1.4rem;
    transition: all 0.2s ease;
    position: relative;
    font-family: 'josefin sans', sans-serif;
    font-weight: 700;

    &:hover,
    &.active {
      color: ${({ theme }) => theme.colors.linkHover};
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
      background: ${({ theme }) => theme.colors.linkHover};
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

export const StyledThemeToggleContainer = styled.div`
  display: flex;
  align-items: center;
  label {
    width: 5rem;
    height: 2rem;
    position: relative;
    display: block;
    background: #ebebeb;
    border-radius: 200px;
    box-shadow: inset 0px 5px 15px rgba(0, 0, 0, 0.4),
      inset 0px -5px 15px rgba(255, 255, 255, 0.4);
    cursor: pointer;
    transition: 0.3s;
  }
  label:after {
    content: '';
    width: 2rem;
    height: 2rem;
    position: absolute;

    background: linear-gradient(180deg, #ffcc89, #d8860b);
    border-radius: 180px;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
    transition: 0.3s;
    transform: translateX(0);
    left: 0;
  }
  input {
    width: 0;
    height: 0;
    visibility: hidden;
  }
  input:checked + label {
    background: #242424;
  }
  input:checked + label:after {
    left: 100%;
    transform: translateX(-100%);
    background: linear-gradient(180deg, #777, #3a3a3a);
  }
  label:active:after,
  label:hover:after {
    width: 2.5rem;
  }

  label svg {
    height: 100%;
    margin: 0 0.5rem;
    position: absolute;
    z-index: 100;
  }
  label svg.sun {
    left: 0px;
    fill: #fff;
    transition: 0.3s;
  }
  label svg.moon {
    right: 0;
    fill: #7e7e7e;
    transition: 0.3s;
  }
  input:checked + label svg.sun {
    fill: #7e7e7e;
  }
  input:checked + label svg.moon {
    fill: #fff;
  }
`;
