import constants from '../../constants';

import type {WeatherDataInformation, ReduxActionValue} from '../../index.types';

const {LOADING, INITIATE_WEATHERDATA} = constants;

/**
 * loading application
 * @returns {ReduxActionValue} - return action
 */
const loadingApplication = (): ReduxActionValue => {
  return {
    type: LOADING,
  };
};

/**
 * initiate weather data
 * @param {WeatherDataInformation} data - WeatherDataInformation
 * @returns {ReduxActionValue} - return action
 */
const initiateWeatherData = (
  data: WeatherDataInformation,
): ReduxActionValue => {
  return {
    type: INITIATE_WEATHERDATA,
    data,
  };
};

export {loadingApplication, initiateWeatherData};
