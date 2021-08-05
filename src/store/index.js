import { configureStore, createAsyncThunk } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

export const getWeather = createAsyncThunk(
  'weather/getWeather',
  async (city = 'Reda') => {
    const API_KEY = 'dbcbada632dd31f95f28b01fb8d69edb';
    const api_url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;

    const response = await fetch(api_url);
    const data = await response.json();
    return { data };
  }
);

const locationSlice = createSlice({
  name: 'locations',
  initialState: [
    {
      city: 'Wej',
      weather: {},
    },
  ],
  reducers: {
    addLocation: (state, action) => {
      const newLocataion = {
        city: action.payload.city,
        weather: {},
      };
      state.push(newLocataion);
    },
  },
  extraReducers: {
    [getWeather.fulfilled]: (state, action) => {
      return [
        ...state,
        { city: action.payload.data.name, weather: action.payload.data },
      ];
    },
  },
});

const store = configureStore({
  reducer: {
    locations: locationSlice.reducer,
  },
});

export const { addLocation } = locationSlice.actions;
export default store;
