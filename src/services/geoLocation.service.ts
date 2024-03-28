import {PermissionsAndroid} from 'react-native';
import Geolocation from '@react-native-community/geolocation';

import type {GeoLocationData} from '../index.types';

/**
 * request location permission
 * @returns {Promise<LocationData | null>} return location data
 */
const requestLocationPermission = async (): Promise<GeoLocationData | null> => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: 'Request Location Permission',
        message: 'WeatherApp needs access to your location ',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      return new Promise((resolve, reject) => {
        Geolocation.getCurrentPosition(
          (success: any) => {
            resolve({
              latitude: success.coords.latitude,
              longitude: success.coords.longitude,
            });
          },
          (error: any) => {
            const stringError = JSON.stringify(error);

            reject(error)
          },
        );
      });
    } else {
      return null;
    }
  } catch (err) {
    console.warn(err);
    return null;
  }
};

export {requestLocationPermission};
