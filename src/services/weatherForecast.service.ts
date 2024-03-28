import axios from 'axios';

import type {
  GeoLocationData,
  WeatherForecastData,
  WeatherDataInformation,
  ForecastList,
} from '../index.types';

const BASE_URL = 'http://api.openweathermap.org/data/2.5/';
const API_KEY = '01eefb1e65deb044d3ee72e3b5cd5ef3';

const getWeatherForecastList = (
  forecasts: Array<ForecastList>,
): Array<ForecastList> => {
  // Get the current day and time
  const now = new Date();
  const currentHour = now.getHours();
  const currentMinutes = now.getMinutes();

  // Create a new Date object with the same day but specific time (current time)
  const specificTime = new Date(now);
  specificTime.setHours(currentHour, currentMinutes, 0, 0);

  // Find the closest forecast for each day
  let closestForecastsByDay = [];
  let nextDay = new Date(specificTime);
  while (closestForecastsByDay.length < 6) {
    const closestForecast = forecasts.reduce((acc: ForecastList, curr) => {
      const forecastDate = new Date(curr.dt_txt);
      if (forecastDate.toLocaleDateString() === nextDay.toLocaleDateString()) {
        if (
          !acc ||
          Math.abs(curr.dt - specificTime.getTime() / 1000) <
            Math.abs(acc.dt - specificTime.getTime() / 1000)
        ) {
          acc = curr;
        }
      }
      return acc;
    }, null);

    if (closestForecast) {
      closestForecastsByDay.push(closestForecast);
    }

    // Move to the next day
    nextDay.setDate(nextDay.getDate() + 1);
  }

  return closestForecastsByDay;
};

/**
 * get weather and location data
 * @param {WeatherForecastData} weatherForecastData - weather forecast data
 * @returns {WeatherDataInformation} - return weather data information
 */
const getWeatherData = (
  weatherForecastData: WeatherForecastData,
): WeatherDataInformation => {
  const {list: weatherList, city} = weatherForecastData;
  const weatherForecasts = getWeatherForecastList(weatherList);

  return {
    weatherList,
    weatherForecasts,
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
      `${BASE_URL}forecast?lat=${latitude}&lon=${longitude}&cnt=40&appid=${API_KEY}&units=metric`,
    );
    const weatherData = getWeatherData(data);

    return weatherData;
  } catch (e: any) {
    throw e.data;
  }
};

export {getWeatherForecast};
