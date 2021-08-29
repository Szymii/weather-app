import React from 'react';
import styled from 'styled-components';

const StyledBtn = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 0.8rem;

  &:focus,
  &:hover {
    filter: ${({ theme }) => theme.contrast};
  }

  svg {
    width: 1.5rem;
    height: 1.5rem;
    fill: ${({ theme }) => theme.colors.svg};
  }

  img {
    width: 1.5rem;
    height: 1.5rem;
  }
`;

const IconBtn = ({ children, ...rest }) => {
  return <StyledBtn {...rest}> {children} </StyledBtn>;
};

export default IconBtn;
