import React from 'react';
import { Provider } from 'react-redux';
import store from '../store';
import GlobalWrapper from './GlobalWrapper';

const Root = () => {
  return (
    <Provider store={store}>
      <GlobalWrapper />
    </Provider>
  );
};

export default Root;
