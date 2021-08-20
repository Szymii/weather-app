import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getLocalWeather } from '../store';

const useLocalStorage = () => {
  const [localCities, setLocalCities] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const cities = localStorage.getItem('cities');
    if (cities) {
      const splited = cities.split(',');
      setLocalCities([...splited]);
      splited.map((city) => dispatch(getLocalWeather({ city })));
    }
  }, [dispatch]);

  useEffect(() => {
    console.log(localCities);
  }, [localCities]);

  const addToLocalStorage = (city) => {
    const newLocalCities = [...localCities, city];
    if (newLocalCities.length > 5) newLocalCities.shift();
    localStorage.setItem('cities', newLocalCities);
    setLocalCities(newLocalCities);
  };

  return { localCities, addToLocalStorage };
};

export default useLocalStorage;
