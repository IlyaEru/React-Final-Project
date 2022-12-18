import React from 'react';
import { StyledLoaderContainer, StyledPacmanLoader } from './Loader.style';

export default function Loader({ loadedData }: { loadedData: string }) {
  return (
    <StyledLoaderContainer>
      <h1>Loading {loadedData}...</h1>
      <StyledPacmanLoader />
    </StyledLoaderContainer>
  );
}
