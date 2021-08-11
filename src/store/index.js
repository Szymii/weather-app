import { configureStore, createAsyncThunk } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

const API_KEY = 'dbcbada632dd31f95f28b01fb8d69edb';

export const getLocalWeather = createAsyncThunk(
  'weather/getLocalWeather',
  async ({ lat = 52.22977, lon = 21.01178 }) => {
    const api_url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`;

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

const themeSlice = createSlice({
  name: 'themes',
  initialState: userPrefersDark ? 'dark' : 'light',
  reducers: {
    toggleTheme: (state, action) => {
      return action.payload.theme;
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
      return [{ city, coord, weather }];
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
    themes: themeSlice.reducer,
  },
});

export const { toggleTheme } = themeSlice.actions;
export default store;
