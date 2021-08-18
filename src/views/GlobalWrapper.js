import React, { useCallback, useEffect } from 'react';
import { getLocalWeather } from '../store';
import { useDispatch, useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { light, dark } from '../assets/styles/theme';
import View from './View';
import Select from '../components/organisms/Select/Select';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  overflow: hidden;
`;

const GlobalWrapper = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const theme = state.states.theme === 'light' ? light : dark;

  const success = useCallback(
    (position) => {
      dispatch(
        getLocalWeather({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        })
      );
    },
    [dispatch]
  );

  const error = useCallback(() => {
    dispatch(getLocalWeather({}));
  }, [dispatch]);

  useEffect(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(success, error);
    } else {
      dispatch(getLocalWeather({}));
    }
  }, [dispatch, error, success]);

  return (
    <>
      {!state.locations.length ? (
        <>Loading...</>
      ) : (
        <ThemeProvider theme={theme}>
          <Wrapper>
            <View />
            <Select />
          </Wrapper>
        </ThemeProvider>
      )}
    </>
  );
};

export default GlobalWrapper;
