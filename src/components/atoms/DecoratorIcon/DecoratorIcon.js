import React from 'react';
import styled from 'styled-components';
import arrowUp from '../../../assets/icons/arrowUp.svg';
import arrowDown from '../../../assets/icons/arrowDown.svg';
import sunrise from '../../../assets/icons/sunrise.svg';
import sunset from '../../../assets/icons/sunset.svg';

const Wrapper = styled.div`
  color: ${({ theme }) => theme.colors.middle};
`;

const StyledArrow = styled.img`
  display: inline-block;
  padding: 0 0.3em;
  height: 0.8em;
`;

const StyledSun = styled.img`
  display: inline-block;
  padding: 0 0.5em;
  height: 1.1em;
  vertical-align: text-top;
  @media (min-width: ${({ theme }) => theme.media.desktop}) {
    padding-left: 0;
  }
`;

const DecoratorIcon = ({ children, icon }) => {
  const selectIcon = (icon) => {
    if (icon === 'arrowDown')
      return <StyledArrow src={arrowDown} alt="minimum" />;
    if (icon === 'arrowUp') return <StyledArrow src={arrowUp} alt="maximum" />;
    if (icon === 'sunrise') return <StyledSun src={sunrise} alt="sunrise" />;
    if (icon === 'sunset') return <StyledSun src={sunset} alt="sunset" />;
  };

  const arrow = selectIcon(icon);

  return (
    <Wrapper>
      {arrow}
      {children}
    </Wrapper>
  );
};

export default DecoratorIcon;
