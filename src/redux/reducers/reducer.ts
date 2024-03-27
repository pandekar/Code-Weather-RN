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
  weather: [],
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
          weather: action.data.weatherForecastList,
        };
      }
    default:
      return state;
  }
};

export default weatherReducer;
