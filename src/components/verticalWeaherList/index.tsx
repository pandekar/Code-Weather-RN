import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';

import styles from './verticalWeatherList.styles';
import {getDateFromText} from '../../utils';
import {WeatherIcon} from '..';

import type {Props} from './verticalWeatherList.types';
import type {ForecastList} from '../../index.types';

/**
 * vertical weather list
 * @param {Props} props - props
 * @returns {React.JSX.Element} - component
 */
const VerticalWeatherList = ({weather: weathers}: Props): React.JSX.Element => (
  <View style={styles.container}>
    {weathers.map((item: ForecastList) => (
      <View key={item.dt}>
        <View style={styles.forecastContainer}>
          <View style={styles.leftSection}>
            <Text style={styles.textStyle}>{getDateFromText(item.dt_txt)}</Text>
          </View>
          <View style={styles.rigthSection}>
            <Text style={styles.textStyle}>
              {item.main.temp_max.toFixed(0)} / {item.main.temp_min.toFixed(0)}
              °C
            </Text>
            {WeatherIcon(item.weather[0].id)}
            <Icon name="chevron-right" size={16} color="gray" />
          </View>
        </View>
        <View style={styles.separatorLine} />
      </View>
    ))}
  </View>
);

export default VerticalWeatherList;
