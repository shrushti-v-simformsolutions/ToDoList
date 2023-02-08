import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    padding: 10,
    margin: 10,
    width: '90%',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'gray',
  },
  button: {
    padding: 10,
    margin: 10,
    width: '90%',
    borderRadius: 5,
    alignItems: 'center',
    backgroundColor: 'gray',
  },
  buttonText: {
    color: 'white',
  },
});

export default styles;