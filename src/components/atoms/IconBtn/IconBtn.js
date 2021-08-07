import React from 'react';
import styled from 'styled-components';

const StyledBtn = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

const IconBtn = ({ children }) => {
  return <StyledBtn> {children} </StyledBtn>;
};

export default IconBtn;
