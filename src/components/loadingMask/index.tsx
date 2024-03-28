import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';

import styles from './loadingMask.styles';

/**
 * loading mask
 * @returns {React.JSX.Element} - component
 */
const LoadingMask = (): React.JSX.Element => {
  return (
    <View style={styles.container}>
      <Icon name="cloud-sun" size={40} color="#f08030" />
      <Text style={styles.textStyles}>Fetching weather data...</Text>
    </View>
  );
};

export default LoadingMask;
