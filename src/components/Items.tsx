import React from "react";
import { observer } from "mobx-react-lite";
import { todoStore } from "../store/TodoStore";
import "./TodoStyle.css"

type Props = {
    todo: { id: number; text: string; completed: boolean };
};

const TodoItem: React.FC<Props> = observer(({ todo }) => {
    return (
        <li>
            <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => todoStore.toggleTodoCompletion(todo.id)}
            />
            <span style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
        {todo.text}
      </span>
            <button onClick={() => todoStore.deleteTodo(todo.id)}>Delete</button>
        </li>
    );
});

export default TodoItem;