import React from 'react';
import styled from 'styled-components';
import { Title } from '../Title/Title';

const StyledLi = styled.li`
  margin-top: 1em;
  display: flex;
  justify-content: space-between;
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

const StyledCity = () => {
  return (
    <StyledLi>
      <Wrapper>
        <StyledTitle>{'Mumbai'}</StyledTitle>
        <div>{'22'}&#176;C</div>
        <StyledDescription>{'Light Drizzle'}</StyledDescription>
      </Wrapper>
      <img
        src={`https://openweathermap.org/img/wn/${'10d'}@2x.png`}
        alt="weather"
      />
    </StyledLi>
  );
};

export default StyledCity;
