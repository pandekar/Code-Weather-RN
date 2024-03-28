import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome6';

/**
 * weather icon
 * @param {number} weatherId - weather id
 * @returns {React.JSX.Element} - component
 */
const WeatherIcon = (weatherId: number): React.JSX.Element => {
  let iconName = '';

  switch (true) {
    case weatherId >= 200 && weatherId <= 232:
      iconName = 'cloud-bolt';
      break;
    case weatherId >= 300 && weatherId <= 321:
      iconName = 'cloud-rain';
      break;
    case weatherId >= 500 && weatherId <= 531:
      iconName = 'cloud-showers-heavy';
      break;
    case weatherId >= 600 && weatherId <= 622:
      iconName = 'snowflake';
      break;
    case weatherId === 701:
      iconName = 'smog';
      break;
    case weatherId === 711:
      iconName = 'smog';
      break;
    case weatherId === 721:
      iconName = 'smog';
      break;
    case weatherId === 731:
      iconName = 'sun';
      break;
    case weatherId === 741:
      iconName = 'smog';
      break;
    case weatherId === 751:
      iconName = 'sun';
      break;
    case weatherId === 761:
      iconName = 'sun';
      break;
    case weatherId === 762:
      iconName = 'meteor';
      break;
    case weatherId === 771:
      iconName = 'cloud-bolt';
      break;
    case weatherId === 781:
      iconName = 'tornado';
      break;
    case weatherId >= 801 && weatherId <= 804:
      iconName = 'cloud';
      break;
    default:
      iconName = 'cloud-sun';
  }

  return <Icon name={iconName} size={30} color="black" />;
};

export default WeatherIcon;
