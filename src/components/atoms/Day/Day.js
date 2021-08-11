import React from 'react';
import styled from 'styled-components';
import { extractDay, round } from '../../../utils/utils';
import DecoratorIcon from '../DecoratorIcon/DecoratorIcon';

const ListItem = styled.li`
  flex: none;
  display: flex;
  align-items: center;
  gap: 0.4em;
  flex-direction: column;
  font-size: ${({ theme }) => theme.fs.xs};
  &:first-child {
    color: ${({ theme }) => theme.colors.black};
  }
`;

const StyledTime = styled.div`
  display: flex;
  font-size: ${({ theme }) => theme.fs.m};
`;

const StyledImg = styled.img`
  width: 4.3em;
  height: auto;
`;

const Day = ({ day }) => {
  return (
    <ListItem>
      <StyledTime>{extractDay(day.dt)}</StyledTime>
      <StyledImg
        src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
        alt={day.weather[0].main}
        aria-label={day.weather[0].description}
      />
      <DecoratorIcon icon="arrowUp">{round(day.temp.max)}&#176;C</DecoratorIcon>
      <DecoratorIcon icon="arrowDown">
        {round(day.temp.min)}&#176;C
      </DecoratorIcon>
    </ListItem>
  );
};

export default Day;
