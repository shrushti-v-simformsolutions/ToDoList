import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#e9e9e9',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 5,
  },
  title: {
    fontSize: 20,
    color: 'black',
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  edit: {
    marginRight: 10
  },
});

export default styles;