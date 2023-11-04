import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  task: {
    backgroundColor: '#352F44',
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
    padding: 12,
    height: 48,
    borderRadius: 8,
    flex: 1,
    marginRight: 8,
  },
  taskDone: {
    textDecorationLine: 'line-through',
    color: '#bfbfbf',
    backgroundColor: '#5C5470',
  },
  buttons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 8,
  },
  doneButton: {
    backgroundColor: '#A7D397',
    borderRadius: 8,
    height: 48,
    width: 48,
    alignItems: 'center',
    justifyContent: 'center',
  },
  undoneButton: {
    backgroundColor: '#F2C94C',
    borderRadius: 8,
    height: 48,
    width: 48,
    alignItems: 'center',
    justifyContent: 'center',
  },
  removeButton: {
    backgroundColor: '#FF8080',
    borderRadius: 8,
    height: 48,
    width: 48,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
