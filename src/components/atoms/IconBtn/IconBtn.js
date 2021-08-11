import React from 'react';
import styled from 'styled-components';

const StyledBtn = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 0.8em;

  &:focus,
  &:hover {
    filter: ${({ theme }) => theme.contrast};
  }

  svg {
    width: 1.7em;
    height: 1.7em;
    fill: ${({ theme }) => theme.colors.middle};
  }
`;

const IconBtn = ({ children, ...rest }) => {
  return <StyledBtn {...rest}> {children} </StyledBtn>;
};

export default IconBtn;
