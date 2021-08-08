import React from 'react';
import styled from 'styled-components';
import { extractHour } from '../../../utils/utils';

const ListItem = styled.li`
  flex: none;
  display: flex;
  align-items: center;
  gap: 0.5em;
  flex-direction: column;
  font-size: ${({ theme }) => theme.fs.xs};
`;

const StyledTime = styled.div`
  display: flex;
  font-size: ${({ theme }) => theme.fs.m};
  color: ${({ theme }) => theme.colors.black};
`;

const Hour = ({ hour }) => {
  return (
    <ListItem>
      <StyledTime>{extractHour(hour.dt)}</StyledTime>
      <div>Icon</div>
    </ListItem>
  );
};

export default Hour;
