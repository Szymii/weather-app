import { configureStore, createAsyncThunk } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

export const getLocalWeather = createAsyncThunk(
  'weather/getLocalWeather',
  async ({ lat = 52.22977, lon = 21.01178 }) => {
    const API_KEY = 'dbcbada632dd31f95f28b01fb8d69edb';
    const api_url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`;

    const response = await fetch(api_url);
    const data = await response.json();
    return { data };
  }
);

const locationSlice = createSlice({
  name: 'locations',
  initialState: [],
  reducers: {
    addCity: (state, action) => {
      const newLocataion = {
        city: action.payload.city,
        weather: {},
      };
      state.push(newLocataion);
    },
  },
  extraReducers: {
    [getLocalWeather.fulfilled]: (state, action) => {
      const city = action.payload.data.name;
      const {
        dt,
        main,
        visibility,
        wind,
        sys,
        weather: description,
      } = action.payload.data;
      const weather = { dt, main, visibility, wind, sys, ...description };
      return [...state, { city, weather }];
    },
  },
});

const store = configureStore({
  reducer: {
    locations: locationSlice.reducer,
  },
});

export const { addCity } = locationSlice.actions;
export default store;
