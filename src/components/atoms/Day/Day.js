import React from 'react';
import styled from 'styled-components';
import { extractDay, round } from '../../../utils/utils';
import DecoratorIcon from '../DecoratorIcon/DecoratorIcon';

const ListItem = styled.li`
  flex: none;
  display: flex;
  align-items: center;
  gap: 0.6em;
  flex-direction: column;
  font-size: ${({ theme }) => theme.fs.xs};
`;

const StyledTime = styled.div`
  display: flex;
  font-size: ${({ theme }) => theme.fs.m};
  color: ${({ theme }) => theme.colors.black};
`;

const Day = ({ day }) => {
  return (
    <ListItem>
      <StyledTime>{extractDay(day.dt)}</StyledTime>
      <div>Icon</div>
      <DecoratorIcon icon="arrowUp">{round(day.temp.max)}&#176;C</DecoratorIcon>
      <DecoratorIcon icon="arrowDown">
        {round(day.temp.min)}&#176;C
      </DecoratorIcon>
    </ListItem>
  );
};

export default Day;
