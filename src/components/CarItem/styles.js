import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  carContainer: {
    width: '100%',
    height: Dimensions.get('screen').height,
  },
  carImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    position: 'absolute',
  },
  titleContainer: {
    marginTop: '30%',
    alignItems: 'center',
  },
  name: {
    fontSize: 40,
    fontWeight: '500',
  },
  tagline: {
    fontSize: 16,
    color: '#5c5e62',
  },
  taglineCTA: {
    fontSize: 16,
    color: '#5c5e62',
    textDecorationLine: 'underline',
  },
});

export default styles;
