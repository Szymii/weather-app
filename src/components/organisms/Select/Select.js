import React from 'react';
import styled from 'styled-components';
import back from '../../../assets/icons/back.svg';
import add from '../../../assets/icons/add.svg';
import StyledCity from '../../atoms/StyledCity/StyledCity';
import { useDispatch, useSelector } from 'react-redux';
import { toggleSelect } from '../../../store';

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 100%;
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.middle};
  padding: 4em 2em 2em;
  visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
  transform: translateX(${({ isOpen }) => (isOpen ? '-100%' : '0')});
  transition: all 0.4s ease;

  @media (min-width: ${({ theme }) => theme.media.desktop}) {
    max-width: 30em;
  }
`;

const CityList = styled.ul`
  list-style: none;
  margin-top: 2em;
  overflow-y: auto;
  max-height: 80vh;
`;

const StyledBtn = styled.button`
  display: flex;
  background-color: transparent;
  border: none;
  color: inherit;
  font-size: ${({ theme }) => theme.fs.m};
  gap: 0.5em;
  align-items: center;
  padding: 0.2em 0.4em;
  cursor: pointer;
`;

const BtnWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Select = () => {
  const isOpen = useSelector((state) => state.states.isSelectOpen);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(toggleSelect({ isSelectOpen: false }));
  };

  return (
    <Wrapper isOpen={isOpen}>
      <BtnWrapper>
        <StyledBtn aria-label="return" onClick={handleClick}>
          <img src={back} alt="return" />
          Select City
        </StyledBtn>
        <StyledBtn aria-label="add city">
          <img src={add} alt="add city" />
        </StyledBtn>
      </BtnWrapper>
      <CityList>
        <StyledCity />
        <StyledCity />
      </CityList>
    </Wrapper>
  );
};

export default Select;
