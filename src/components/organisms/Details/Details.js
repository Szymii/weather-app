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
  gap: 1.2em;
`;

const Details = () => {
  const { details, wind, visibility } = useSelector(
    (state) => state.locations[0]?.weather
  );

  return (
    <Wrapper>
      <Title>Details</Title>
      <StyledList>
        <ListItem
          title="Feels like"
          value={round(details.feels_like)}
          unit="&#176;C"
        />
        <ListItem title="Wind speed" value={wind.speed} unit="m/s" />
        <ListItem title="Humidity" value={details.humidity} unit="%" />
        <ListItem title="Visibility" value={visibility / 1000} unit="km" />
        <ListItem title="Pressure" value={details.pressure} unit="hPa" />
      </StyledList>
    </Wrapper>
  );
};

export default Details;
