import { StyleSheet } from 'react-native';
import { vh, vw } from 'react-native-expo-viewport-units';

const size = Math.min(vh(25), vw(25));

const styles = StyleSheet.create({
  loadFullContainer: {
    position: 'absolute',
    zIndex: 99,
    alignItems: 'center',
    justifyContent: 'center',
  },
  paddedBox: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#043156',
    padding: 30,
    borderRadius: 20,
  },
  nonBlockScreen: {
    top: vh(50),
    left: vw(50),
    transform: [{ translateX: -(size / 2) }, { translateY: -size * 2 }],
    height: size,
    width: size,
  },
  blockScreen: {
    ...StyleSheet.absoluteFill,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;