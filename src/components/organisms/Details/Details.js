import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import ListItem from '../../atoms/ListItem/ListItem';
import { round } from '../../../utils/utils';
import { Title } from '../../atoms/Title/Title';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1em;
`;

const Details = () => {
  const { main, wind, visibility } = useSelector(
    (state) => state.locations[0]?.weather
  );

  return (
    <Wrapper>
      <Title>Details</Title>
      <StyledList>
        <ListItem
          title="Feels like"
          value={round(main.feels_like)}
          unit="&#176;C"
        />
        <ListItem title="Wind speed" value={wind.speed} unit="m/s" />
        <ListItem title="Humidity" value={main.humidity} unit="%" />
        <ListItem title="Visibility" value={visibility / 1000} unit="km" />
        <ListItem title="Pressure" value={main.pressure} unit="hPa" />
      </StyledList>
    </Wrapper>
  );
};

export default Details;
