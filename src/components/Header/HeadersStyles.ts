import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  headerContainer: {
    width: '100%',
    height: 80,
    backgroundColor: '#043156',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    justifyContent: 'space-between'
  },
  iconView: {
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white'
  },
  iconStyle: {
    height: 25,
    width: 25,
    resizeMode: 'contain',
    color: 'white',
    tintColor: 'white',
  },
  title: {
    maxWidth: 200,
    fontSize: 18,
    color: 'white',
    textAlign: 'center'
  },
  hitSlop: { left: 20, right: 20, top: 20, bottom: 20 }
});

export default styles;