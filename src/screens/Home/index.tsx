import {
  Alert,
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  findNodeHandle,
} from 'react-native'
import { styles } from './styles'
import { Task } from '../../components/Task'
import { useEffect, useState } from 'react'
import { ProgressBar } from '../../components/ProgressBar'

type TaskData = {
  task: string
  isDone: boolean
}

type TaskProgress = {
  doneAmount: number
  totalAmount: number
}

export function Home() {
  const [tasks, setTasks] = useState<TaskData[]>([])
  const [newTask, setNewTask] = useState('')

  const taskProgress: TaskProgress = {
    doneAmount: tasks.filter(task => task.isDone).length,
    totalAmount: tasks.length,
  }

  function renderTask({ item, index }: { item: TaskData; index: number }) {
    return (
      <View style={styles.taskList}>
        <Task
          task={item.task}
          isDone={item.isDone}
          onRemoveTask={() => handleRemoveTask(index, item.task)}
          onToggleTask={() => handleToggleTask(index)}
        />
      </View>
    )
  }

  function handleRemoveTask(index: number, task: string) {
    Alert.alert(
      'Atenção',
      `Deseja realmente excluir a tarefa "${task}"?`,
      [
        {
          text: 'Não',
          style: 'cancel',
        },
        {
          text: 'Sim',
          onPress: () => removeTask(index),
        },
      ],
      {
        cancelable: true,
      }
    )
  }

  function removeTask(index: number) {
    const newTasks = [...tasks]
    newTasks.splice(index, 1)
    setTasks(newTasks)
  }

  function handleToggleTask(index: number) {
    const newTasks = [...tasks]
    newTasks[index] = toggleTask(newTasks[index])
    setTasks(newTasks)
  }

  function toggleTask(task: TaskData): TaskData {
    const toggledTask: TaskData = { ...task, isDone: !task.isDone }

    return toggledTask
  }

  function handleAddNewTask() {
    if (newTask === '') {
      Alert.alert('Atenção', 'Você precisa informar uma tarefa para adicionar.')
      return
    }

    const data = {
      task: newTask,
      isDone: false,
    }

    setTasks(oldState => [...oldState, data])
    setNewTask('')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.pageTitle}>I've To App</Text>
      <Text style={styles.subTitle}>
        App simples para suas tarefas diárias.
      </Text>

      <View style={styles.form}>
        <TextInput
          value={newTask}
          onChangeText={setNewTask}
          style={styles.input}
          placeholder="Nova tarefa"
        />

        <TouchableOpacity onPress={handleAddNewTask} style={styles.addButton}>
          <Text style={styles.addButtonText}> + </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.progressContainer}>
        <View style={styles.bar}>
          <ProgressBar
            height={10}
            amount={taskProgress.doneAmount}
            total={taskProgress.totalAmount}
            color="#352F44"
          />
        </View>

        <Text>
          {taskProgress.doneAmount} / {taskProgress.totalAmount}
        </Text>
      </View>

      <FlatList
        data={tasks}
        renderItem={renderTask}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(_, index) => index.toString()}
        ListEmptyComponent={() => (
          <View>
            <Text style={styles.emptyText}> Nenhuma tarefa adicionada. </Text>
          </View>
        )}
      />
    </View>
  )
}
