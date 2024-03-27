import React from 'react';
import {View, Text} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import {getWeatherForecast} from '../services';
import {
  initiateWeatherData,
  loadingApplication,
} from '../redux/actions/actions';
import {fetchLocation} from '../utils';

import type {InitialState} from '../index.types';

/**
 * Home
 * @returns {React.JSX.Element} - react element
 */
const Home = (): React.JSX.Element => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(loadingApplication());

    const fetchWeatherData = async () => {
      const location = await fetchLocation();

      getWeatherForecast(location).then(data => {
        dispatch(initiateWeatherData(data));
      });
    };

    fetchWeatherData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  let weatherForecast = useSelector(
    (state: {weather: InitialState}) => state.weather,
  );

  return (
    <View>
      {weatherForecast.loading ? (
        <Text>LOADING</Text>
      ) : (
        <View>
          <Text>{weatherForecast.city.name}</Text>
          <Text>{weatherForecast.city.country}</Text>
        </View>
      )}
    </View>
  );
};

export default Home;
