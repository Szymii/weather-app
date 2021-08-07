import React from 'react';
import { ThemeProvider } from 'styled-components';
import AppProvider from '../AppProvider';
import { theme } from '../assets/styles/theme';
import { Provider } from 'react-redux';
import store from '../store';
import Mobile from './Mobile';

const Root = () => {
  return (
    <Provider store={store}>
      <AppProvider>
        <ThemeProvider theme={theme}>
          <Mobile />
        </ThemeProvider>
      </AppProvider>
    </Provider>
  );
};

export default Root;
