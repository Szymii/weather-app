import React from 'react';
import styled from 'styled-components';
import Day from '../../atoms/Day/Day';
import Hour from '../../atoms/Hour/Hour';

const StyledList = styled.ul`
  list-style: none;
  display: flex;
  gap: 1.9em;
  padding: 0.8em 0;
  overflow-x: scroll;
`;

const ForecastList = ({ daily, list }) => {
  const forecast = daily ? list : list.slice(0, 12);
  console.log(forecast[0]);

  return (
    <StyledList>
      {forecast.map((element) =>
        daily ? (
          <Day key={element.dt} day={element} />
        ) : (
          <Hour key={element.dt} hour={element} />
        )
      )}
    </StyledList>
  );
};

export default ForecastList;
