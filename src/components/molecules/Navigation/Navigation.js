import React from 'react';
import styled from 'styled-components';

import IconBtn from '../../atoms/IconBtn/IconBtn';
import Location from '../../atoms/Location/Location';

const StyledNav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 10em;
  padding: 0 1.6em;
  display: grid;
  align-items: center;
  background: linear-gradient(
    rgba(255, 255, 255, 1) 70%,
    rgba(255, 255, 255, 0.2)
  );
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const BtnWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1em;
`;

const Navigation = () => {
  return (
    <StyledNav>
      <Wrapper>
        <Location location="Mumbai" />
        <BtnWrapper>
          <IconBtn>Map</IconBtn>
          <IconBtn>Toggler</IconBtn>
        </BtnWrapper>
      </Wrapper>
    </StyledNav>
  );
};

export default Navigation;
