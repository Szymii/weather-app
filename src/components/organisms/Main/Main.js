import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addLocation } from '../../../store';
import { getWeather } from '../../../store';

const Main = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.locations);

  useEffect(() => {
    dispatch(getWeather());
  }, [dispatch]);

  return (
    <div>
      <button onClick={() => dispatch(addLocation({ city: 'Rumia' }))}>
        add
      </button>
      <>Current</>
      {console.log(state)}
    </div>
  );
};

export default Main;
