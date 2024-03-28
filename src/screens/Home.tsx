import React from 'react';
import {ScrollView, View, Text} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import {getWeatherForecast} from '../services';
import {
  initiateWeatherData,
  loadingApplication,
} from '../redux/actions/actions';
import {fetchLocation} from '../utils';
import styles from './Home.styles';
import {
  Header,
  WeatherHeadline,
  AdditionalInfo,
  HorizontalSlider,
  VerticalWeatherList
} from '../components';

import type {Dispatch} from 'redux';

import type {InitialState} from '../index.types';

/**
 * fetch weather data
 * @param {Dispatch} dispatch - dispatch function
 * @returns {Promise<void>} - promise void
 */
const fetchWeatherData = async (dispatch: Dispatch): Promise<void> => {
  const location = await fetchLocation();

  getWeatherForecast(location).then(data => {
    dispatch(initiateWeatherData(data));
  });
};

/**
 * Home
 * @returns {React.JSX.Element} - react element
 */
const Home = (): React.JSX.Element => {
  const dispatch = useDispatch();

  let weatherForecast = useSelector(
    (state: {weather: InitialState}) => state.weather,
  );

  let appLoading = useSelector(
    (state: {weather: InitialState}) => state.weather.loading,
  );

  React.useEffect(() => {
    dispatch(loadingApplication());

    fetchWeatherData(dispatch);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={styles.homeContainer}>
      {appLoading ? (
        <Text>Fetching weather...</Text>
      ) : (
        // scrollview needs to wrap with <> instead of <View>
        <>
          <Header city={weatherForecast.city} />
          <ScrollView
            showsVerticalScrollIndicator={false}
            alwaysBounceHorizontal={false}
            alwaysBounceVertical={false}
            bounces={false}
            overScrollMode="never">
            <WeatherHeadline weather={weatherForecast.weatherList} />
            <AdditionalInfo
              weather={weatherForecast.weatherList}
              city={weatherForecast.city}
            />
            <HorizontalSlider weather={weatherForecast.weatherList} />
            <VerticalWeatherList weather={weatherForecast.weatherForecasts} />
          </ScrollView>
        </>
      )}
    </View>
  );
};

export default Home;
