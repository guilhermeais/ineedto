import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#FAF0E6',
  },
  pageTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#352F44',
    marginTop: 16,
  },
  subTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#5C5470',
  },
  form: {
    flexDirection: 'row',
    marginVertical: 16,
  },
  input: {
    backgroundColor: '#FFF',
    color: '#352F44',
    borderRadius: 8,
    height: 48,
    padding: 16,
    marginTop: 16,
    marginRight: 12,
    flex: 1,
  },
  addButton: {
    backgroundColor: '#352F44',
    borderRadius: 8,
    height: 48,
    padding: 14,
    marginTop: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
  emptyText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#5C5470',
    marginTop: 16,
    textAlign: 'center',
  },
  taskList: {
    marginBottom: 8,
  },
  progressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  bar: {
    flex: 1,
    marginRight: 10,
  },
})
