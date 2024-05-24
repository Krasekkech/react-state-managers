import React from 'react'
import { useTodoStore } from '../store/todo.store.ts'

interface TodoItemProps {
    id: number
    text: string
    completed: boolean
}

const Items: React.FC<TodoItemProps> = ({ id, text, completed }) => {
    const { toggleTodo, removeTodo } = useTodoStore()

    return (
        <li style={{ textDecoration: completed ? 'line-through' : 'none' }}>
            <span onClick={() => toggleTodo(id)}>{text}</span>
            <button onClick={() => removeTodo(id)}>Delete</button>
        </li>
    )
}

export default Items