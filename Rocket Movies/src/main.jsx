import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';

import theme from './styles/theme.js'

import GlobalStyle from './styles/global.js';

import { SignUP } from './pages/SignUP'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <GlobalStyle />
    <SignUP />
    </ThemeProvider>
  </React.StrictMode>
)
