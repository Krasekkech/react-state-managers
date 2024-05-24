import React, { useState } from 'react'
import { useTodoStore } from '../store/todo.store.ts'

const NewTodo: React.FC = () => {
    const [text, setText] = useState('')
    const addTodo = useTodoStore(state => state.addTodo)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (text.trim()) {
            addTodo(text)
            setText('')
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button type="submit">Add</button>
        </form>
    )
}

export default NewTodo