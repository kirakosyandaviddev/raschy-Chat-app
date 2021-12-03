import React from 'react';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle } from '../globalStyles';
import { baseTheme } from '../theme/baseTheme';
import { Router } from './Router';

function App() {
  return (
    <div>
      <GlobalStyle />
      <ThemeProvider theme={baseTheme}>
          <Router />
      </ThemeProvider>
    </div>
  );
};

export default App;



