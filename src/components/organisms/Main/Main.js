import React from 'react';
import styled from 'styled-components';
import DecoratorIcon from '../../atoms/DecoratorIcon/DecoratorIcon';
import { useSelector } from 'react-redux';
import {
  round,
  extractHour,
  getDateFromUnix,
  toCapitalLetter,
} from '../../../utils/utils';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.4em;
  color: ${({ theme }) => theme.colors.middle};
  padding-bottom: 2em;
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

const ImageWrapper = styled.div`
  margin-top: -1.4em;
  height: 8em;
  img {
    height: 100%;
  }
`;

const StyledDescription = styled.p`
  margin-top: -2em;
`;

const Main = () => {
  const city = useSelector((state) => state.states.city);
  const state = useSelector((state) => state);

  const { dt, details, sys, main, icon, description } = city
    ? state.locations.filter((location) => location.city === city)[0].weather
    : state.locations[0].weather;

  return (
    <Wrapper>
      <div>{getDateFromUnix(dt)}</div>
      <StyledTemperature>
        {round(details.temp)}
        <StyledUnit>&#176;C</StyledUnit>
      </StyledTemperature>
      <InlineWrapper>
        <DecoratorIcon icon="arrowDown">
          {round(details.temp_min)}&#176;C
        </DecoratorIcon>
        <DecoratorIcon icon="arrowUp">
          {round(details.temp_max)}&#176;C
        </DecoratorIcon>
      </InlineWrapper>
      <ImageWrapper>
        <img
          src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
          alt={main}
          aria-label={description}
        />
      </ImageWrapper>
      <StyledDescription>{toCapitalLetter(description)}</StyledDescription>
      <InlineWrapper>
        <DecoratorIcon icon="sunrise">{extractHour(sys.sunrise)}</DecoratorIcon>
        <DecoratorIcon icon="sunset">{extractHour(sys.sunset)}</DecoratorIcon>
      </InlineWrapper>
    </Wrapper>
  );
};

export default Main;
