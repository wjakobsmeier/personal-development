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

    function handleAddTodo(event) {
        const name = todoNameRef.current.value;
        // if input is empty do nothing
        if (name === '') {
            return;
        }
        // add the new to do to the list of all to dos
        setTodos(prevTodos => {
            return [...prevTodos, { id: uuidv4(), name: name, isComplete: false }]
        })
        // clear the inpiut
        todoNameRef.current.value = null;
        console.log('name: ', name);
    }

    useState([])
    return (
        <>
            <TodoList todos={todos} />
            <input ref={todoNameRef} type="text" />
            <button onClick={handleAddTodo}>Add To do</button>
            <button>Clear To dos</button>
            <div>0 to dos left</div>
        </>
    );
}

export default App;
