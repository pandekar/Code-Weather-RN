import {requestLocationPermission} from '../services';

import type {GeoLocationData} from '../index.types';

/**
 * fetch location
 * @returns {Promise<GeoLocationData>} - promise geolocation data
 */
const fetchLocation = async (): Promise<GeoLocationData> => {
  const location = await requestLocationPermission();

  if (location !== null) {
    return location;
  } else {
    return {
      latitude: -7.68127,
      longitude: 110.840691,
    };
  }
};

export default fetchLocation;
