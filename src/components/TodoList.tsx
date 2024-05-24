import React from 'react'
import { useTodoStore } from '../store/todo.store.ts'
import TodoItem from './Items'

const TodoList: React.FC = () => {
    const todos = useTodoStore(state => state.todos)

    return (
        <ul>
            {todos.map(todo => (
                <TodoItem key={todo.id} {...todo} />
            ))}
        </ul>
    )
}

export default TodoList