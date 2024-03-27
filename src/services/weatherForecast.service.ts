import axios from 'axios';

import type {
  GeoLocationData,
  WeatherForecastData,
  WeatherDataInformation,
} from '../index.types';

const BASE_URL = 'http://api.openweathermap.org/data/2.5/';
const API_KEY = '01eefb1e65deb044d3ee72e3b5cd5ef3';

/**
 * get weather and location data
 * @param {WeatherForecastData} weatherForecastData - weather forecast data
 * @returns {WeatherDataInformation} - return weather data information
 */
const getWeatherData = (
  weatherForecastData: WeatherForecastData,
): WeatherDataInformation => {
  const {list: weatherForecastList, city} = weatherForecastData;

  return {
    weatherForecastList,
    city,
  };
};

/**
 * get weather forecast
 * @param {GeoLocationData} geoLocation - geoLocation data
 * @returns {Promise<WeatherDataInformation>} - promise WeatherDataInformation
 */
const getWeatherForecast = async ({
  latitude,
  longitude,
}: GeoLocationData): Promise<WeatherDataInformation> => {
  try {
    const {data} = await axios.get(
      `${BASE_URL}forecast?lat=${latitude}&lon=${longitude}&cnt=40&appid=${API_KEY}`,
    );
    const weatherData = getWeatherData(data);

    return weatherData;
  } catch (e: any) {
    throw e.data;
  }
};

export {getWeatherForecast};
