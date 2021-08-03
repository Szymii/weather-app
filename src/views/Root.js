import React from 'react';
import Main from '../components/organisms/Main/Main';
import Details from '../components/organisms/Details/Details';
import Forecast from '../components/organisms/Forecast/Forecast';
import Navigation from '../components/molecules/Navigation/Navigation';

import styled, { ThemeProvider } from 'styled-components';
import AppProvider from '../AppProvider';
import { theme } from '../styles/theme';

const Wrapper = styled.main`
  padding-top: 20vh;
  height: 100vh;
  overflow-y: scroll;
  scroll-behavior: smooth;
  scroll-snap-type: y mandatory;
`;

const StyledSection = styled.section`
  scroll-margin-top: 20vh;
  height: 80vh;
  scroll-snap-align: start;
`;

const Root = () => {
  return (
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
  );
};

export default Root;
