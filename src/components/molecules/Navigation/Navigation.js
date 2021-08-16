import React from 'react';
import styled from 'styled-components';
import IconBtn from '../../atoms/IconBtn/IconBtn';
import Location from '../../atoms/Location/Location';
import map from '../../../assets/icons/map.svg';
import { useDispatch, useSelector } from 'react-redux';
import { toggleSelect } from '../../../store';
import SwitchBtn from '../SwitchBtn/SwitchBtn';

const StyledNav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 20vh;
  padding: 0 1.6em;
  display: grid;
  align-items: center;
  color: ${({ theme }) => theme.colors.black};
  background-color: ${({ theme }) => theme.colors.white};
  transition: background-color 0.4s ease, color 0.4s ease;

  @media (min-width: ${({ theme }) => theme.media.desktop}) {
    position: relative;
    height: 10vh;
    grid-column: 1 / 3;
    padding: 0;
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const BtnWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Navigation = () => {
  const state = useSelector((state) => state.locations[0]);
  const isOpen = useSelector((state) => state.states.isSelectOpen);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(toggleSelect({ isSelectOpen: !isOpen }));
  };

  return (
    <StyledNav>
      <Wrapper>
        <Location location={state?.city} />
        <BtnWrapper>
          <IconBtn onClick={handleClick} aria-label="select city">
            <img src={map} alt="map" />
          </IconBtn>
          <SwitchBtn />
        </BtnWrapper>
      </Wrapper>
    </StyledNav>
  );
};

export default Navigation;
