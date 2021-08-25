import React, { useCallback, useEffect, useState } from 'react';
import { getLocalWeather } from '../store';
import { useDispatch, useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { light, dark } from '../assets/styles/theme';
import View from './View';
import Splash from './Splash';
import Select from '../components/organisms/Select/Select';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  overflow: hidden;
`;

const GlobalWrapper = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const [offline, setOffline] = useState(null);

  const theme = state.states.theme === 'light' ? light : dark;

  const dispatchWeather = useCallback(
    (position) => {
      dispatch(
        getLocalWeather(
          position
            ? {
                lat: position.coords.latitude,
                lon: position.coords.longitude,
              }
            : ''
        )
      )
        .unwrap()
        .then(() => {
          setOffline(null);
        })
        .catch((error) => {
          setOffline(error.message);
        });
    },
    [dispatch]
  );

  const success = useCallback(dispatchWeather, [dispatchWeather]);
  const error = useCallback(dispatchWeather, [dispatchWeather]);

  useEffect(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(success, error);
    } else {
      dispatchWeather();
    }
  }, [dispatchWeather, error, success]);

  return (
    <ThemeProvider theme={theme}>
      {!state.locations.length ? (
        <Splash offline={offline} />
      ) : (
        <Wrapper>
          <View />
          <Select />
        </Wrapper>
      )}
    </ThemeProvider>
  );
};

export default GlobalWrapper;
