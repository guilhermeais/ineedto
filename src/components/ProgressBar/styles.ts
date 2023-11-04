import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 10,
  },
  bar: {
    height: 20,
    borderColor: '#000',
    borderWidth: 2,
    borderRadius: 5,
  },
  progress: {
    height: '100%',
    backgroundColor: '#6bc926',
  },
  text: {
    textAlign: 'center',
    color: '#000',
  },
});