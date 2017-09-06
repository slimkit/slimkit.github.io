// React
import React from 'react';
import { render } from 'react-dom';

// React Router
import BrowserRouter from 'react-router-dom/BrowserRouter';

// Material UI
import createMuiTheme from 'material-ui/styles/createMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// Redux
import { Provider as ReduxProvider } from 'react-redux';
import store from './createStore';

// Component.
import App from './App';

render(
  (<BrowserRouter basename={document.querySelector('#basename').href}>
    <ReduxProvider store={store}>
      <MuiThemeProvider theme={createMuiTheme()}>
        <App />
      </MuiThemeProvider>
    </ReduxProvider>
  </BrowserRouter>),
  document.querySelector('#app')
);

