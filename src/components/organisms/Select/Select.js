import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import back from '../../../assets/icons/back.svg';
import add from '../../../assets/icons/add.svg';
import City from '../../atoms/City/City';
import { FormField } from '../../atoms/FormField/FormField';
import { useDispatch, useSelector } from 'react-redux';
import { toggleSelect } from '../../../store';
import { getLocalWeather } from '../../../store';

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 100%;
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.middle};
  padding: 3em 2em 2em;
  visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
  transform: translateX(${({ isOpen }) => (isOpen ? '-100%' : '0')});
  transition: transform 0.4s ease, visibility 0.4s linear;

  @media (min-width: ${({ theme }) => theme.media.desktop}) {
    border-left: 1px solid ${({ theme }) => theme.colors.middle};
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
  position: relative;
  align-items: center;
  height: 2.5em;
  margin-left: -0.8em;
`;

const Select = () => {
  const isOpen = useSelector((state) => state.states.isSelectOpen);
  const cities = useSelector((state) => state.locations);
  const dispatch = useDispatch();
  const inputEl = useRef(null);
  const [visible, setVisible] = useState(false);

  const handleToggle = () => {
    dispatch(toggleSelect({ isSelectOpen: false }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!visible) {
      setVisible((prev) => !prev);
      inputEl.current.style.visibility = 'visible';
      inputEl.current.focus();
    } else {
      setVisible((prev) => !prev);
      inputEl.current.style.visibility = 'hidden';
      dispatch(getLocalWeather({ city: inputEl.current.value }));
      inputEl.current.value = '';
    }
  };

  return (
    <Wrapper isOpen={isOpen}>
      <BtnWrapper>
        <StyledBtn aria-label="return" onClick={handleToggle}>
          <img src={back} alt="return" />
          Select City
        </StyledBtn>
        <form onSubmit={handleSubmit}>
          <FormField ref={inputEl} />
          <StyledBtn aria-label="add city">
            <img src={add} alt="add city" />
          </StyledBtn>
        </form>
      </BtnWrapper>
      <CityList>
        {cities.map((city) => (
          <City key={city.city} value={city} />
        ))}
      </CityList>
    </Wrapper>
  );
};

export default Select;
