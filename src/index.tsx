import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme/theme';
import { GlobalStyle } from './styles/globalStyle';
import '@fontsource/josefin-sans';
import '@fontsource/josefin-sans/700.css';
import '@fontsource/cormorant-upright';
import '@fontsource/cormorant-upright/700.css';
import '@fontsource/montserrat';
import '@fontsource/montserrat/700.css';
import '@fontsource/mukta-vaani';
import '@fontsource/heebo';

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
);
