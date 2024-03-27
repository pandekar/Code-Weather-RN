/**
 * get date time
 * @param {number} unixTimestamp - unixTimeStamp
 * @returns {Date} - date object
 */
const getDateTime = (unixTimestamp: number): Date => {
  const milliseconds = unixTimestamp * 1000;

  const date = new Date(milliseconds);

  return date;
};

export default getDateTime;
