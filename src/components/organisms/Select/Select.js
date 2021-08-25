import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import back from '../../../assets/icons/back.svg';
import add from '../../../assets/icons/add.svg';
import City from '../../atoms/City/City';
import { FormField } from '../../atoms/FormField/FormField';
import { useDispatch, useSelector } from 'react-redux';
import { toggleSelect, setCity } from '../../../store';
import { getLocalWeather, getForecat } from '../../../store';
import { uniq } from '../../../utils/utils';
import useLocalStorage from '../../../hooks/useLocalStorage';
import ErrorModal from '../../molecules/ErrorModal/ErrorModal';

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

  img {
    width: 1.3rem;
    height: 1.3rem;
  }
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
  const citiesSet = uniq(cities, (cities) => cities.city);
  const dispatch = useDispatch();
  const inputEl = useRef(null);
  const [visible, setVisible] = useState(false);
  const { addToLocalStorage } = useLocalStorage();
  const [error, setError] = useState(null);

  const handleToggle = () => {
    dispatch(toggleSelect({ isSelectOpen: false }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const value = inputEl.current.value.trim();

    if (!visible) {
      setVisible(true);
      inputEl.current.style.visibility = 'visible';
      inputEl.current.focus();
    } else {
      setVisible(false);
      inputEl.current.style.visibility = 'hidden';
      if (
        value !== '' &&
        !citiesSet.filter((city) => city.city === value).length
      ) {
        dispatch(getLocalWeather({ city: value }))
          .unwrap()
          .then(() => {
            addToLocalStorage(value);
          })
          .catch((error) => {
            setError(error.message);
            setTimeout(() => {
              setError(null);
            }, 8000);
          });
      }
      inputEl.current.value = '';
    }
  };

  const handleSelectCity = (city) => {
    const { lat, lon } = city.coord;
    dispatch(getForecat({ lat, lon }));
    dispatch(setCity({ city: city.city }));
    setVisible(false);
    inputEl.current.style.visibility = 'hidden';
    dispatch(toggleSelect({ isSelectOpen: false }));
  };

  return (
    <Wrapper isOpen={isOpen}>
      {error ? <ErrorModal errorMessage={error} /> : null}
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
        {citiesSet.map((city) => (
          <City
            key={city.city}
            value={city}
            onClick={() => handleSelectCity(city)}
          />
        ))}
      </CityList>
    </Wrapper>
  );
};

export default Select;
