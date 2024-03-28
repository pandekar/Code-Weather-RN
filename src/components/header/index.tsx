import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';

import styles from './Header.styles';

import type {Props} from './Header.types';

/**
 * Header
 * @param {Props} props - props
 * @returns {React.JSX.Element} - component
 */
const Header = ({city}: Props): React.JSX.Element => (
  <View style={styles.header}>
    <View style={styles.leftContainer}>
      <View style={styles.iconContainer}>
        <Icon name="location-dot" size={25} color="black" />
      </View>
      <Text style={styles.leftText}>
        {city.name}, {city.country}
      </Text>
    </View>
    <View>
      <Icon name="sliders" size={25} color="black" />
    </View>
  </View>
);

export default Header;
