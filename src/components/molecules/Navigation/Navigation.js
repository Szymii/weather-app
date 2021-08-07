import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import IconBtn from '../../atoms/IconBtn/IconBtn';
import Location from '../../atoms/Location/Location';
import map from '../../../assets/icons/map.svg';

const StyledNav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 20vh;
  padding: 0 1.6em;
  display: grid;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const BtnWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6em;
`;

const Navigation = () => {
  const state = useSelector((state) => state.locations[0]);

  return (
    <StyledNav>
      <Wrapper>
        <Location location={state?.city} />
        <BtnWrapper>
          <IconBtn>
            <img src={map} alt="map" />
          </IconBtn>
          <IconBtn>
            <img src={map} alt="map" />
            {/*theme toggler */}
          </IconBtn>
        </BtnWrapper>
      </Wrapper>
    </StyledNav>
  );
};

export default Navigation;
