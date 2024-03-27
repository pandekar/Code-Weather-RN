import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0e0e0',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 20,
    gap: 10,
  },
  infoLine: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textStyles: {
    color: 'black',
    fontWeight: 'bold',
  },
});

export default styles;
