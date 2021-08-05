import React from 'react';
import Main from '../components/organisms/Main/Main';
import Details from '../components/organisms/Details/Details';
import Forecast from '../components/organisms/Forecast/Forecast';
import Navigation from '../components/molecules/Navigation/Navigation';

import styled, { ThemeProvider } from 'styled-components';
import AppProvider from '../AppProvider';
import { theme } from '../styles/theme';

import { Provider } from 'react-redux';
import store from '../store';

const Wrapper = styled.main`
  padding-top: 10em;
  height: 100vh;
  overflow-y: scroll;
  scroll-behavior: smooth;
  scroll-snap-type: y mandatory;
`;

const StyledSection = styled.section`
  scroll-margin-top: 10em;
  height: calc(100vh - 10em);
  scroll-snap-align: start;
`;

const Root = () => {
  return (
    <Provider store={store}>
      <AppProvider>
        <ThemeProvider theme={theme}>
          <Wrapper>
            <Navigation />
            <StyledSection>
              <Main />
            </StyledSection>
            <StyledSection>
              <Details />
            </StyledSection>
            <StyledSection>
              <Forecast />
            </StyledSection>
          </Wrapper>
        </ThemeProvider>
      </AppProvider>
    </Provider>
  );
};

export default Root;
