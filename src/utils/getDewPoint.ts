import type {ForecastList} from '../index.types';

/**
 * get dew point
 * @param {ForecastList} weather - weather forecast
 * @returns {string} - dew point string
 */
const getDewPoint = (weather: ForecastList): string => {
  const temperature = weather.main.temp;
  const humidity = weather.main.humidity;

  const a = 17.27;
  const b = 237.7;
  const alpha =
    (a * temperature) / (b + temperature) + Math.log(humidity / 100);
  const result = (b * alpha) / (a - alpha);

  return result.toFixed(0);
};

export default getDewPoint;
