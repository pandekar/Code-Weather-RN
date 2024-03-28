import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  forecastContainer: {
    flex: 1,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  textStyle: {
    fontSize: 16,
    color: 'black',
  },
  leftSection: {
    flex: 0.65,
  },
  rigthSection: {
    flex: 0.35,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 5,
  },
  separatorLine: {
    backgroundColor: '#e0e0e0',
    height: 1,
  },
});

export default styles;
