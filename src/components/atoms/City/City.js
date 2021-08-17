import React from 'react';
import styled from 'styled-components';
import { Title } from '../Title/Title';
import { round } from '../../../utils/utils';

const StyledLi = styled.li`
  margin-top: 1em;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
`;

const Wrapper = styled.div`
  color: ${({ theme }) => theme.colors.middle};
  display: flex;
  flex-direction: column;
  gap: 0.2em;
`;

const StyledTitle = styled(Title)`
  margin: 0;
`;

const StyledDescription = styled.div`
  font-size: ${({ theme }) => theme.fs.s};
`;

const City = ({ value }) => {
  return (
    <StyledLi>
      <Wrapper>
        <StyledTitle>{value.city}</StyledTitle>
        <div>{round(value.weather.details.temp)}&#176;C</div>
        <StyledDescription>{value.weather.main}</StyledDescription>
      </Wrapper>
      <img
        src={`https://openweathermap.org/img/wn/${value.weather.icon}@2x.png`}
        alt="weather"
      />
    </StyledLi>
  );
};

export default City;
