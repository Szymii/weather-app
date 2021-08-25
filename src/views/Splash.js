import React from 'react';
import styled from 'styled-components';
import { Title } from '../components/atoms/Title/Title';
import ErrorModal from '../components/molecules/ErrorModal/ErrorModal';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.middle};
  padding-bottom: 2em;
  font-size: ${({ theme }) => theme.fs.s};
`;

const StyledTitle = styled(Title)`
  margin: auto 0;
`;

const Splash = ({ offline }) => {
  return (
    <Wrapper>
      <ErrorModal errorMessage={offline} />
      <StyledTitle>Weather</StyledTitle>
      <span>A minimal weather app</span>
    </Wrapper>
  );
};

export default Splash;
