import React from 'react'
import NewTodo from './components/NewTodo.tsx'
import TodoList from './components/TodoList'

const App: React.FC = () => {
    return (
        <div>
            <h1>Your List</h1>
            <NewTodo />
            <TodoList />
        </div>
    )
}

export default App