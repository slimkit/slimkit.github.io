// React
import React from 'react';
import { render } from 'react-dom';

// React Router
import BrowserRouter from 'react-router-dom/BrowserRouter';

// Material UI
import createMuiTheme from 'material-ui/styles/theme';
import { MuiThemeProvider } from 'material-ui/styles';

// Component.
import App from './App';

render(
  (<BrowserRouter>
    <MuiThemeProvider theme={createMuiTheme()}>
      <App />
    </MuiThemeProvider>
  </BrowserRouter>),
  document.querySelector('#app')
);

