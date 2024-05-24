import { makeAutoObservable } from "mobx";

class Todo {
    id: number;
    text: string;
    completed: boolean;

    constructor(id: number, text: string) {
        this.id = id;
        this.text = text;
        this.completed = false;
    }
}

class TodoStore {
    todos: Todo[] = [];
    newTodo: string = "";

    constructor() {
        makeAutoObservable(this);
        this.loadTodos();
    }

    addTodo() {
        if (this.newTodo.trim() === "") return;
        const newTodo = new Todo(
            this.todos.length ? this.todos[this.todos.length - 1].id + 1 : 1,
            this.newTodo
        );
        this.todos.push(newTodo);
        this.newTodo = "";
        this.saveTodos();
    }

    toggleTodoCompletion(id: number) {
        const todo = this.todos.find(todo => todo.id === id);
        if (todo) {
            todo.completed = !todo.completed;
            console.log(todo.completed)
            this.saveTodos();
        }
    }

    setNewTodoText(text: string) {
        this.newTodo = text;
    }

    deleteTodo(id: number) {
        this.todos = this.todos.filter(todo => todo.id !== id);
        this.saveTodos();
    }

    saveTodos() {
        localStorage.setItem("todos", JSON.stringify(this.todos));
    }

    loadTodos() {
        const savedTodos = localStorage.getItem("todos");
        if (savedTodos) {
            this.todos = JSON.parse(savedTodos).map((todo: any) => new Todo(todo.id, todo.text));
        }
    }
}

export const todoStore = new TodoStore();