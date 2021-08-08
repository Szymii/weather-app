import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3em;
`;

const City = styled.div`
  font-size: ${({ theme }) => theme.fs.l};
`;

const Description = styled.div`
  font-size: ${({ theme }) => theme.fs.xs};
  color: ${({ theme }) => theme.colors.middle};
`;

const Location = ({ location }) => {
  return (
    <Wrapper>
      <City>{location}</City>
      <Description>Current Location</Description>
    </Wrapper>
  );
};

export default Location;
