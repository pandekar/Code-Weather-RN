import {getDateTime} from '.';

/**
 * get uv index
 * @param {number} latitude - latitude coordinate
 * @param {number} dt - date time unixtimestamp
 * @returns {number} - UV index
 */
const getUVIndex = (latitude: number, dt: number): number => {
  const date = getDateTime(dt);

  // Get the day of the year (1 to 365)
  const dayOfYear = Math.floor(
    (date.getTime() - new Date(date.getFullYear(), 0, 0).getTime()) / 86400000,
  );

  // Calculate solar declination angle
  const solarDeclination =
    23.45 * Math.sin((2 * Math.PI * (284 + dayOfYear)) / 365);

  // Calculate solar zenith angle
  const hourAngle = (date.getUTCHours() - 12) * 15; // Hour angle in degrees
  const solarZenithAngle = Math.acos(
    Math.sin(latitude) * Math.sin(solarDeclination) +
      Math.cos(latitude) *
        Math.cos(solarDeclination) *
        Math.cos(hourAngle * (Math.PI / 180)),
  );

  // Convert solar zenith angle to degrees
  const solarZenithAngleDegrees = solarZenithAngle * (180 / Math.PI);

  // Calculate UV index based on solar zenith angle
  let uvIndex: number;
  if (solarZenithAngleDegrees <= 90) {
    uvIndex = 10; // UV index at its maximum
  } else {
    uvIndex = 0; // UV index is not applicable (sun is below the horizon)
  }

  return uvIndex;
};

export default getUVIndex;
