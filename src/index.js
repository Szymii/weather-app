import React from 'react';
import ReactDOM from 'react-dom';
import Root from './views/Root';
import { GlobalStyle } from './assets/styles/GlobalStyles';
import './assets/styles/fonts.css';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);
