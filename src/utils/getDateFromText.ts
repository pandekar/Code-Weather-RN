/**
 * get date from text
 * @param {string} dt_txt - date text
 * @returns {string} - formatted date string
 */
const getDateFromText = (dt_txt: string): string => {
  const date = new Date(dt_txt);
  const formattedDate = date.toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
  });

  return formattedDate;
};

export default getDateFromText;
