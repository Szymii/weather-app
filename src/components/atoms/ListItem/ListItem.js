import React from 'react';
import styled from 'styled-components';

const StyledLi = styled.li`
  display: flex;
  flex-direction: column;
  gap: 0.15em;
`;

const StyledTitle = styled.h3`
  color: ${({ theme }) => theme.colors.middle};
  font-size: ${({ theme }) => theme.fs.s};
  font-weight: 400;
`;

const StyledInfo = styled.div`
  font-size: ${({ theme }) => theme.fs.xm};
`;

const ListItem = ({ title, value = 'N/A', unit }) => {
  return (
    <StyledLi>
      <StyledTitle>{title}</StyledTitle>
      <StyledInfo>{`${value} ${unit}`}</StyledInfo>
    </StyledLi>
  );
};

export default ListItem;
