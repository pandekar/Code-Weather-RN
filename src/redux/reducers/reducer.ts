import constants from '../../constants';

import type {ReduxActionValue, InitialState} from '../../index.types';

const {LOADING, INITIATE_WEATHERDATA} = constants;
export const initialState: InitialState = {
  loading: false,
  city: {
    id: 0,
    name: '',
    coord: {
      lat: 0,
      lon: 0,
    },
    country: '',
    population: 0,
    timezone: 0,
    sunrise: 0,
    sunset: 0,
  },
  weatherList: [
    {
      dt: 0,
      main: {
        temp: 0,
        feels_like: 0,
        temp_min: 0,
        temp_max: 0,
        pressure: 0,
        sea_level: 0,
        grnd_level: 0,
        humidity: 0,
        temp_kf: 0,
      },
      weather: [
        {
          id: 0,
          main: '',
          description: '',
          icon: '',
        }
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 0,
        deg: 0,
        gust: 0,
      },
      visibility: 0,
      pop: 0,
      rain: {
        '3h': 0,
      },
      sys: {
        pod: '',
      },
      dt_txt: '',
    },
  ],
  weatherForecasts: [],
};

const weatherReducer = (state = initialState, action: ReduxActionValue) => {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        loading: true,
      };
    case INITIATE_WEATHERDATA:
      if (action.data) {
        return {
          ...state,
          loading: false,
          city: action.data.city,
          weatherList: action.data.weatherList,
          weatherForecasts: action.data.weatherForecasts,
        };
      }
    default:
      return state;
  }
};

export default weatherReducer;
