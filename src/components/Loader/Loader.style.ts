import { PacmanLoader } from 'react-spinners';
import styled from 'styled-components';

export const StyledLoaderContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
  color: ${({ theme }) => theme.colors.primaryDarkBlue};
`;

export const StyledPacmanLoader = styled(PacmanLoader).attrs({
  color: '#ffe737',
  size: 40,
})``;
