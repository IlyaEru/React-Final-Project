import styled from 'styled-components';

export const StyledProductList = styled.section`
  width: 100%;
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  grid-auto-rows: 10px;
  gap: 0 2rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.xSmall}) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
  @media (max-width: 400px) {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }
`;
