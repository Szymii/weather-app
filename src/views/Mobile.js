import React from 'react';
import styled from 'styled-components';
import Main from '../components/organisms/Main/Main';
import Details from '../components/organisms/Details/Details';
import Forecast from '../components/organisms/Forecast/Forecast';
import Navigation from '../components/molecules/Navigation/Navigation';

const Wrapper = styled.main`
  padding-top: 20vh;
  display: flex;
  height: 100vh;
  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;
  overflow-x: scroll;
  background-color: ${({ theme }) => theme.colors.white};
  transition: background-color 0.4s ease, color 0.4s ease;
`;

const StyledSection = styled.section`
  flex: none;
  width: 100vw;
  scroll-snap-align: start;
  padding: 0 1.6em;
`;

const Mobile = () => {
  return (
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
  );
};

export default Mobile;
