import React from "react";
import { observer } from "mobx-react-lite";
import { todoStore } from "../store/TodoStore";
import TodoItem from "./Items";
import "./TodoStyle.css"

const TodoList: React.FC = observer(() => {
    return (
        <div>
            <h1>Your list</h1>
            <input
                type="text"
                value={todoStore.newTodo}
                onChange={(e) => todoStore.setNewTodoText(e.target.value)}
            />
            <button onClick={() => todoStore.addTodo()}>Add</button>
            <ul>
                {todoStore.todos.map(todo => (
                    <TodoItem key={todo.id} todo={todo} />
                ))}
            </ul>
        </div>
    );
});

export default TodoList;