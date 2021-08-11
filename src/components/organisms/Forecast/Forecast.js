import React, { useEffect } from 'react';
import styled from 'styled-components';
import ForecastList from '../../molecules/ForecastList/ForecastList';
import { Title } from '../../atoms/Title/Title';
import { useDispatch, useSelector } from 'react-redux';
import { getForecat } from '../../../store';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.black};

  @media (min-width: ${({ theme }) => theme.media.desktop}) {
    grid-column: 1 / 3;
    h2 {
      display: none;
    }
  }
`;

const ForecastWrapper = styled.div`
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
  const state = useSelector((state) => state.locations[0]);
  const dispatch = useDispatch();
  const { lat, lon } = state.coord;

  useEffect(() => {
    dispatch(getForecat({ lat, lon }));
  }, [dispatch, lat, lon]);

  return (
    <Wrapper>
      <Title>Forecast</Title>
      {!state?.forecast ? (
        <>Loadig...</>
      ) : (
        <ForecastWrapper>
          <div>
            <Subtitle>Hourly Forecast</Subtitle>
            <ForecastList list={state.forecast.hourly} />
          </div>
          <div>
            <Subtitle>Daily Forecast</Subtitle>
            <ForecastList daily list={state.forecast.daily} />
          </div>
        </ForecastWrapper>
      )}
    </Wrapper>
  );
};

export default Forecast;
