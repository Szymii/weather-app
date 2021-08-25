import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 0;
  left: 0;
  width: 100%;
  padding: 0.6em 0;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.black};
`;

const StyledDesc = styled.span`
  color: ${({ theme }) => theme.colors.middle};
  font-size: ${({ theme }) => theme.fs.s};
`;

const ErrorModal = ({ errorMessage = 'Error' }) => {
  const message =
    errorMessage === 'City Not Found'
      ? 'Please try again'
      : 'Please check your connection';
  return (
    <Wrapper>
      <div>{errorMessage}</div>
      <StyledDesc>{message}</StyledDesc>
    </Wrapper>
  );
};

export default ErrorModal;
