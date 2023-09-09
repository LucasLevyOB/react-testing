import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { Reset } from 'styled-reset'

import App from './App.tsx';
import { theme , GlobalStyle} from './theme';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Reset />
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
