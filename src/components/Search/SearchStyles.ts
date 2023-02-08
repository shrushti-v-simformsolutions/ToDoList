import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 30,
    paddingHorizontal: 20,
  },
  inputStyles: {
    borderBottomColor: 'black',
    borderBottomWidth: 2,
    color: 'black',
    fontSize: 18,
    height: 50,
    marginHorizontal: 30,
    marginVertical: 20,
    paddingLeft: 5,
    paddingRight: 45,
  },
  backArrowStyles: {
    height: '100%',
    top: 60,
    left: 10,
    position: 'absolute',
  },
  background: {
    alignItems: 'center',
    backgroundColor: 'black',
    flex: 1,
    height: '100%'
  },
  backspaceStyles: {
    alignSelf: 'flex-end',
    top: 60,
    height: '100%',
    position: 'absolute',
    right: 20,
  },
  searchStyles: {
    alignSelf: 'flex-end',
    height: '100%',
    top: 60,
    position: 'absolute',
    right: 60
  },
  search: {
    alignSelf: 'center',
  },
  card: {
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: 'black',
    borderRadius: 10,
    elevation: 5,
    height: 170,
    justifyContent: 'space-evenly',
    marginTop: 10,
    shadowColor: 'black',
    shadowOffset: {
      width: 2,
      height: 2
    },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    width: '45%',
    margin: 10,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
});

export default styles;