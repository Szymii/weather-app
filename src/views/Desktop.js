import React from 'react';
import styled from 'styled-components';
import Main from '../components/organisms/Main/Main';
import Details from '../components/organisms/Details/Details';
import Forecast from '../components/organisms/Forecast/Forecast';
import Navigation from '../components/molecules/Navigation/Navigation';

const Wrapper = styled.div`
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.white};
  transition: background-color 0.4s ease, color 0.4s ease;
`;

const Grid = styled.div`
  margin: 0 auto;
  max-width: 60em;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
`;

const Desktop = () => {
  return (
    <Wrapper>
      <Grid>
        <Navigation />
        <Main />
        <Details />
        <Forecast />
      </Grid>
    </Wrapper>
  );
};

export default Desktop;
