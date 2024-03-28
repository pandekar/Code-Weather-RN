import React from 'react';
import {View, Text} from 'react-native';

import styles from './verticalWeatherList.styles';
import {getDateFromText} from '../../utils';

import type {Props} from './verticalWeatherList.types';
import type {ForecastList} from '../../index.types';

const VerticalWeatherList = ({weather: weathers}: Props) => (
  <View style={styles.container}>
    {weathers.map((item: ForecastList) => (
      <View key={item.dt} style={styles.forecastContainer}>
        <View>
          <Text style={styles.textStyle}>{getDateFromText(item.dt_txt)}</Text>
        </View>
        <View>
          <Text style={styles.textStyle}>
            {item.main.temp_max.toFixed(0)} / {item.main.temp_min.toFixed(0)}
            °C
          </Text>
        </View>
      </View>
    ))}
  </View>
);

export default VerticalWeatherList;
