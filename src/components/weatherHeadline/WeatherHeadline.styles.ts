import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  weatherHeadlineContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  cloudAndWindContainer: {
    flexDirection: 'row',
  },
  cloudContainer: {
    marginRight: 10,
  },
  degreeContainer: {
    marginBottom: 5,
  },
  degreeTextStyle: {
    fontSize: 80,
    color: 'black',
  },
  mainWeatherTextStyle: {
    color: 'black',
    fontSize: 16,
  },
});

export default styles;
