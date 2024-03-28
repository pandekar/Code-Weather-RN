import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';

import styles from './WeatherHeadline.styles';

import type {Props} from './WeatherHeadline.types';

/**
 * weather headline
 * @param {Props} props - props
 * @returns {React.JSX.Element} - component
 */
const WeatherHeadline = ({weather}: Props): React.JSX.Element => {
  return (
    <View style={styles.weatherHeadlineContainer}>
      <View style={styles.cloudAndWindContainer}>
        <View style={styles.cloudContainer}>
          <Icon name="cloud" size={30} color="black" />
        </View>
        <View>
          <Text style={styles.mainWeatherTextStyle}>
            {weather[0].weather[0].main}
          </Text>
          <Text>{weather[0].weather[0].description}</Text>
        </View>
      </View>

      <View style={styles.degreeContainer}>
        <Text style={styles.degreeTextStyle}>
          {weather[0].main.temp.toFixed(0)}°C
        </Text>
      </View>
      <View>
        <Text>Feels like {weather[0].main.feels_like.toFixed(0)}°C</Text>
      </View>
    </View>
  );
};

export default WeatherHeadline;
