import React from 'react';
import {Text, View} from 'react-native';

import styles from './additionalInfo.styles';
import {getUVIndex, getDewPoint} from '../../utils';

import type {Props} from './additionalInfo.types';

/**
 * Additional info component
 * @param {Props} param0 - props
 * @returns {React.JSX.Element} - component
 */
const AdditionalInfo = ({weather, city}: Props): React.JSX.Element => {
  const currentWeather = weather[0];
  const visibilityInKm = (currentWeather.visibility / 1000).toFixed(1);

  return (
    <View style={styles.container}>
      <View style={styles.infoLine}>
        <Text style={styles.textStyles}>
          Wind: {currentWeather.wind.speed}m/s
        </Text>
        <Text style={styles.textStyles}>
          Humidity: {currentWeather.main.humidity}%
        </Text>
        <Text style={styles.textStyles}>
          UV index: {getUVIndex(city.coord.lat, currentWeather.dt)}
        </Text>
      </View>
      <View style={styles.infoLine}>
        <Text style={styles.textStyles}>
          Pressure: {currentWeather.main.pressure}hPa
        </Text>
        <Text style={styles.textStyles}>Visibility: {visibilityInKm}km</Text>
        <Text style={styles.textStyles}>
          Dew point: {getDewPoint(currentWeather)}°C
        </Text>
      </View>
    </View>
  );
};

export default AdditionalInfo;
