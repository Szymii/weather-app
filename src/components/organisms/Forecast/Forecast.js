import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ForecastList from '../../molecules/ForecastList/ForecastList';
import { Title } from '../../atoms/Title/Title';
import { useDispatch, useSelector } from 'react-redux';
import { getForecat } from '../../../store';
import ErrorModal from '../../molecules/ErrorModal/ErrorModal';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.black};
`;

const ForecastWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 2em;
  margin-top: 1em;
  color: ${({ theme }) => theme.colors.middle};
`;

const Subtitle = styled.h3`
  font-size: ${({ theme }) => theme.fs.xm};
  font-weight: 400;
`;

const Forecast = () => {
  const state = useSelector((state) => state);
  const forecast = state.forecast;
  const dispatch = useDispatch();
  const { lat, lon } = state.locations[0].coord;
  const [error, setError] = useState(null);

  useEffect(() => {
    dispatch(getForecat({ lat, lon }))
      .unwrap()
      .then(() => {
        setError(null);
      })
      .catch((error) => {
        setError(error.message);
      });
  }, [dispatch, lat, lon]);

  return (
    <Wrapper>
      <Title>Forecast</Title>
      {forecast.loading && !error ? (
        <>Loadig...</>
      ) : (
        <ForecastWrapper>
          {error ? (
            <ErrorModal errorMessage={error} />
          ) : (
            <>
              <div>
                <Subtitle>Hourly Forecast</Subtitle>
                <ForecastList list={forecast.hourly} />
              </div>
              <div>
                <Subtitle>Daily Forecast</Subtitle>
                <ForecastList daily list={forecast.daily} />
              </div>
            </>
          )}
        </ForecastWrapper>
      )}
    </Wrapper>
  );
};

export default Forecast;
