import { Text, TouchableOpacity, View } from 'react-native'
import { styles } from './styles'
import Ionicons from '@expo/vector-icons/Ionicons'

type TaskProps = {
  task: string
  isDone?: boolean
  onToggleTask?: () => void
  onRemoveTask?: () => void
}

export function Task({
  task,
  isDone = false,
  onToggleTask = () => {},
  onRemoveTask = () => {},
}: TaskProps) {
  function getTaskStyle(isDone: boolean) {
    return isDone ? { ...styles.task, ...styles.taskDone } : styles.task
  }

  function doneButton(onToggleTask: () => void) {
    return (
      <TouchableOpacity onPress={onToggleTask} style={styles.doneButton}>
        <Ionicons name="checkmark" size={18} />
      </TouchableOpacity>
    )
  }

  function undoneButton(onToggleTask: () => void) {
    return (
      <TouchableOpacity onPress={onToggleTask} style={styles.undoneButton}>
        <Ionicons name="close" size={18} />
      </TouchableOpacity>
    )
  }

  return (
    <View style={styles.container}>
      <Text style={getTaskStyle(isDone)}>{task}</Text>

      <View style={styles.buttons}>
        {isDone ? undoneButton(onToggleTask) : doneButton(onToggleTask)}

        <TouchableOpacity onPress={onRemoveTask} style={styles.removeButton}>
          <Text>
            <Ionicons name="trash" size={18} />{' '}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
