import React, { useState, useRef, useEffect } from 'react';
import TodoList from './TodoList';
import { v4 as uuidv4 } from 'uuid';

const LOCAL_STORAGE_KEY = 'todoApp.todos'

function App() {

    // default state - when it loads empty array
    const [todos, setTodos] = useState([]);

    const todoNameRef = useRef();

    // onload
    useEffect(() => {
        const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
        if (storedTodos) {
            setTodos(storedTodos);
        }
    }, [])

    // watcher - when todos is updated
    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
    }, [todos])

    function toggleTodo(id) {
        // copy
        const newTodos = [...todos];
        const updatedTodo = newTodos.find(todo => todo.id === id);
        // modify
        updatedTodo.isCompleted = !updatedTodo.isCompleted;
        // set/overwrite to do list
        setTodos(newTodos);
    }

    function handleAddTodo(event) {
        const name = todoNameRef.current.value;
        // if input is empty do nothing
        if (name === '') {
            return;
        }
        // add the new to do to the list of all to dos
        setTodos(prevTodos => {
            return [...prevTodos, { id: uuidv4(), name: name, isCompleted: false }]
        })
        // clear the inpiut
        todoNameRef.current.value = null;
    }

    function handleClearTodos() {
        const incompleteTodos = todos.filter(todo => !todo.isCompleted);
        setTodos(incompleteTodos);
    }

    useState([])
    return (
        <>
            <TodoList todos={todos} toggleTodo={toggleTodo} />
            <input ref={todoNameRef} type="text" />
            <button onClick={handleAddTodo}>Add To do</button>
            <button onClick={handleClearTodos}>Clear To dos</button>
            <div>{todos.filter(todo => !todo.isCompleted).length} to dos left</div>
        </>
    );
}

export default App;
