import { useState } from 'react'
import styles from './App.module.css'
import { Header } from './components/Header'
import { Task, TaskType } from './components/Task'
import { TaskForm } from './components/TaskForm'

export function App() {
  const [tasks, setTasks] = useState<TaskType[]>([])


  const createTask = (text: string) => {
    setTasks([...tasks, {checked: false, text}])
  }

  const deleteTask = (text: string) => {
    const tasksWithoutDeletedOne = tasks.filter(task => task.text !== text)
    setTasks(tasksWithoutDeletedOne)
  }

  const checkTask = (taskToFind: TaskType) => {
    setTasks(tasks.map(task => {
      if (taskToFind.text === task.text) {
        return {...task, checked: !task.checked}
      }

      return {...task}
    }))
  }

  const createdTasks = tasks.length
  const finishedTasks = tasks.filter(task => task.checked).length

  return (
    <div>
      <Header />
      <main className={styles.wrapper}>
        <div className={styles.appContent}>
          <TaskForm onCreate={createTask}/>
          <header className={styles.headerContent}>
            <div className={styles.headerTask}>
              Tarefas criadas
              <span className={styles.headerTaskQuantity}>{createdTasks}</span>
            </div>
            <div className={styles.headerTask}>
              Concluídas
              <span className={styles.headerTaskQuantity}>{finishedTasks} de {createdTasks}</span>
            </div>
          </header>
          <div className={styles.taskList}>
            {tasks.map(task => {
              return (
                <Task 
                  id={task.text} 
                  task={task} 
                  onDeleteTask={deleteTask} 
                  onChecked={checkTask}
                />
              )
            })}
          </div>
        </div>
      </main>
    </div>
  )
}
