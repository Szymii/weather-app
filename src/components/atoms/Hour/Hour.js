import React from 'react';
import styled from 'styled-components';
import { extractHour } from '../../../utils/utils';

const ListItem = styled.li`
  flex: none;
  display: flex;
  align-items: center;
  gap: 0.4em;
  flex-direction: column;
  font-size: ${({ theme }) => theme.fs.xs};
`;

const StyledTime = styled.div`
  display: flex;
  font-size: ${({ theme }) => theme.fs.m};
  color: ${({ theme }) => theme.colors.black};
`;

const StyledImg = styled.img`
  width: 4.3em;
  height: auto;
`;

const Hour = ({ hour }) => {
  return (
    <ListItem>
      <StyledTime>{extractHour(hour.dt)}</StyledTime>
      <StyledImg
        src={`https://openweathermap.org/img/wn/${hour.weather[0].icon}@2x.png`}
        alt={hour.weather[0].main}
        aria-label={hour.weather[0].description}
      />
    </ListItem>
  );
};

export default Hour;
