import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';

import styles from './horizontalSlider.styles';
import {getDateTime} from '../../utils';

import type {Props} from './horizontalSlider.types';

/**
 * Horizontal Slider
 * @param {Props} props - props
 * @returns {React.JSX.Element} - component
 */
const HorizontalSlider = ({weather: weathers}: Props): React.JSX.Element => (
  <View style={styles.container}>
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {weathers.map(weather => (
        <View key={weather.dt} style={styles.itemContainer}>
          <View>
            <Text>{`${getDateTime(weather.dt).getHours()}:00`}</Text>
          </View>
          <View>
            <Icon name="cloud" size={30} color="black" />
          </View>
          <View>
            <Text style={styles.textStyle}>
              {Math.floor(weather.main.temp)} °C
            </Text>
          </View>
        </View>
      ))}
    </ScrollView>
  </View>
);

export default HorizontalSlider;
