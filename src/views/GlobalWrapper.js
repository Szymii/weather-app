import React, { useCallback, useEffect } from 'react';
import { getLocalWeather } from '../store';
import { useDispatch, useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { light, dark } from '../assets/styles/theme';
import Mobile from './Mobile';
import Desktop from './Desktop';
import useDimensions from '../hooks/useDimensions';

const GlobalWrapper = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const { width } = useDimensions();

  const theme = state.themes === 'light' ? light : dark;
  const view = width < 970 ? <Mobile /> : <Desktop />;

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
        <ThemeProvider theme={theme}>{view}</ThemeProvider>
      )}
    </>
  );
};

export default GlobalWrapper;
