import { Check, Trash } from "phosphor-react";
import styles from "./Task.module.css"

export interface TaskType {
    checked: boolean
    text: string
}

interface TaskProps {
    id: string
    task: TaskType
    onDeleteTask: (text: string) => void
    onChecked: (task: TaskType) => void
}




export function Task(props: TaskProps) {
    const handleDeleteTask = () => {
        props.onDeleteTask(props.task.text)
    }

    const handleCheckTask = () => {
        props.onChecked(props.task)
    }

    return (
        <div className={styles.task}>
            <div className={styles.taskInput}>
                <input id={props.id} checked={props.task.checked} type="checkbox" onChange={handleCheckTask}/>
                <label htmlFor={props.id}>
                    <Check size={12}/>
                </label>
            </div>
            <p className={props.task.checked ?  styles.taskTextChecked : styles.taskText}>{props.task.text}</p>
            <Trash size={24} className={styles.taskDelete} onClick={handleDeleteTask}/>
        </div>
    )
}