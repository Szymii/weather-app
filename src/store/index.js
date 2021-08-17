import { configureStore, createAsyncThunk } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

const API_KEY = 'dbcbada632dd31f95f28b01fb8d69edb';

export const getLocalWeather = createAsyncThunk(
  'weather/getLocalWeather',
  async ({ city, lat = 52.22977, lon = 21.01178 }) => {
    let api_url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`;
    if (city)
      api_url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;
    const response = await fetch(api_url);
    const data = await response.json();

    return { data };
  }
);

export const getForecat = createAsyncThunk(
  'weather/getForecast',
  async ({ lat, lon }) => {
    const api_url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=alerts,current,minutely&appid=${API_KEY}`;

    const response = await fetch(api_url);
    const data = await response.json();

    return { data };
  }
);

const userPrefersDark =
  window.matchMedia &&
  window.matchMedia('(prefers-color-scheme: dark)').matches;

const stateSlice = createSlice({
  name: 'states',
  initialState: {
    theme: userPrefersDark ? 'dark' : 'light',
    isSelectOpen: false,
  },
  reducers: {
    toggleTheme: (state, action) => {
      return { ...state, theme: action.payload.theme };
    },
    toggleSelect: (state, action) => {
      return { ...state, isSelectOpen: action.payload.isSelectOpen };
    },
  },
});

const locationSlice = createSlice({
  name: 'locations',
  initialState: [],
  extraReducers: (builder) => {
    builder.addCase(getLocalWeather.fulfilled, (state, action) => {
      const city = action.payload.data.name;
      const coord = action.payload.data.coord;
      const {
        dt,
        main: details,
        visibility,
        wind,
        sys,
        weather: description,
      } = action.payload.data;
      const weather = {
        dt,
        details,
        visibility,
        wind,
        sys,
        ...description[0],
      };
      return [...state, { city, coord, weather }];
    });

    builder.addCase(getForecat.fulfilled, (state, action) => {
      const forecast = {
        hourly: action.payload.data.hourly,
        daily: action.payload.data.daily,
      };
      return [{ ...state[0], forecast }];
    });

    builder.addDefaultCase((state, action) => state);
  },
});

const store = configureStore({
  reducer: {
    locations: locationSlice.reducer,
    states: stateSlice.reducer,
  },
});

export const { toggleTheme, toggleSelect } = stateSlice.actions;
export default store;
