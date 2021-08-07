import React, { useEffect } from 'react';
import styled from 'styled-components';
import Main from '../components/organisms/Main/Main';
import Details from '../components/organisms/Details/Details';
import Forecast from '../components/organisms/Forecast/Forecast';
import Navigation from '../components/molecules/Navigation/Navigation';
import { getLocalWeather } from '../store';
import { useDispatch, useSelector } from 'react-redux';

const Wrapper = styled.main`
  padding-top: 20vh;
  display: flex;
  height: 100vh;
  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;
  overflow-x: scroll;
`;

const StyledSection = styled.section`
  flex: none;
  width: 100vw;
  scroll-margin-top: 20vh;
  height: 80vh;
  scroll-snap-align: start;
  padding: 0 1.6em;
`;

const Mobile = () => {
  const state = useSelector((state) => state.locations);
  const dispatch = useDispatch();

  useEffect(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) =>
        dispatch(
          getLocalWeather({
            lat: position.coords.latitude,
            lon: position.coords.longitude,
          })
        )
      );
    } else {
      dispatch(getLocalWeather());
    }
  }, [dispatch]);

  console.log(state);

  return (
    <Wrapper>
      {!state.length ? (
        <>Loading...</>
      ) : (
        <>
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
        </>
      )}
    </Wrapper>
  );
};

export default Mobile;
