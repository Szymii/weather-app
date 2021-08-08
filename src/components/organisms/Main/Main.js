import React from 'react';
import styled from 'styled-components';
import DecoratorIcon from '../../atoms/DecoratorIcon/DecoratorIcon';
import { useSelector } from 'react-redux';
import { round, extractHour, getDateFromUnix } from '../../../utils/utils';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.4em;
  color: ${({ theme }) => theme.colors.middle};
`;

const Sync = styled.span`
  font-size: ${({ theme }) => theme.fs.xs};
`;

const StyledTemperature = styled.div`
  color: ${({ theme }) => theme.colors.black};
  font-size: 92px;
`;

const StyledUnit = styled.span`
  font-size: 36px;
  vertical-align: baseline;
`;

const InlineWrapper = styled.div`
  display: flex;
  gap: 1.25em;
`;

const Main = () => {
  const { dt, main, sys } = useSelector((state) => state.locations[0]?.weather);

  return (
    <Wrapper>
      {/* Sync jako osobny komponent obsługujący błedy z polaczeniem */}
      <Sync>in sync</Sync>
      <div>{getDateFromUnix(dt)}</div>
      <StyledTemperature>
        {round(main.temp)}
        <StyledUnit>&#176;C</StyledUnit>
      </StyledTemperature>
      <InlineWrapper>
        {/* zmiana temp min i max */}
        <DecoratorIcon icon="arrowDown">
          {round(main.temp_min)}&#176;C
        </DecoratorIcon>
        <DecoratorIcon icon="arrowUp">
          {round(main.temp_max)}&#176;C
        </DecoratorIcon>
      </InlineWrapper>
      {/* weather icon */}
      <InlineWrapper>
        <DecoratorIcon icon="sunrise">{extractHour(sys.sunrise)}</DecoratorIcon>
        <DecoratorIcon icon="sunset">{extractHour(sys.sunset)}</DecoratorIcon>
      </InlineWrapper>
    </Wrapper>
  );
};

export default Main;
