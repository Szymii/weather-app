import { configureStore, createAsyncThunk } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

const key = process.env.API_KEY;

export const getLocalWeather = createAsyncThunk(
  'weather/getLocalWeather',
  async ({ city, lat = 52.22977, lon = 21.01178 }) => {
    let api_url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${key}`;
    if (city)
      api_url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${key}`;

    try {
      const response = await fetch(api_url);
      if (!response.ok) throw new Error('City Not Found');
      const data = await response.json();

      return { data };
    } catch (err) {
      if (err.message !== 'City Not Found') throw Error('Could Not Connect');
      throw Error(err.message);
    }
  }
);

export const getForecat = createAsyncThunk(
  'weather/getForecast',
  async ({ lat, lon }) => {
    try {
      const api_url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=alerts,current,minutely&appid=${key}`;

      const response = await fetch(api_url);
      const data = await response.json();

      return { data };
    } catch (err) {
      throw Error('Could Not Connect');
    }
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
    city: null,
  },
  reducers: {
    toggleTheme: (state, action) => {
      return { ...state, theme: action.payload.theme };
    },
    toggleSelect: (state, action) => {
      return { ...state, isSelectOpen: action.payload.isSelectOpen };
    },
    setCity: (state, action) => {
      return { ...state, city: action.payload.city };
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
    builder.addDefaultCase((state, action) => state);
  },
});

const forecastSlice = createSlice({
  name: 'forecast',
  initialState: { forecast: [], loading: true },
  extraReducers: (builder) => {
    builder.addCase(getForecat.pending, (state, action) => {
      return { ...state, loading: true };
    });

    builder.addCase(getForecat.rejected, (state, action) => {
      return { ...state, loading: 'iddle' };
    });

    builder.addCase(getForecat.fulfilled, (state, action) => {
      const forecast = {
        hourly: action.payload.data.hourly,
        daily: action.payload.data.daily,
      };
      return { ...forecast, loading: false };
    });

    builder.addDefaultCase((state, action) => state);
  },
});

const store = configureStore({
  reducer: {
    locations: locationSlice.reducer,
    forecast: forecastSlice.reducer,
    states: stateSlice.reducer,
  },
});

export const { setCity, toggleTheme, toggleSelect } = stateSlice.actions;
export default store;
