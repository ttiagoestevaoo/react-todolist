import { PlusCircle } from "phosphor-react";
import styles from "./TaskForm.module.css"
import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";

interface TaskFormProps {
    onCreate: (text: string) => void
}

export function TaskForm(props: TaskFormProps) {
    const [newTaskText, setNewTaskText] = useState('')

    const handleNewTaskChange  = (event: ChangeEvent<HTMLInputElement>) => {
        event.target.setCustomValidity('')
        setNewTaskText(event.target.value)
    }

    const handleNewTaskInvalid = (inputEvent: InvalidEvent<HTMLInputElement>) => {
        inputEvent.target.setCustomValidity('Esse campo é obrigatório')
    }

    const handleNewTask = (event: FormEvent) => {
        event.preventDefault()
        props.onCreate(newTaskText)
        setNewTaskText('')
    }

    return (
        <form className={styles.taskForm} onSubmit={handleNewTask}>
            <input 
                type="text" 
                placeholder="Adicione uma nova tarefa"
                value={newTaskText}
                onChange={handleNewTaskChange}
                onInvalid={handleNewTaskInvalid}
                required
            />
            <button>
                Criar
                <PlusCircle size={20}/>
            </button>
        </form>
    )
}