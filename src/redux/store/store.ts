import {createStore, combineReducers} from 'redux';

import weatherReducer from '../reducers/reducer';

const store = createStore(
  combineReducers({
    weather: weatherReducer,
  }),
);

export default store;
