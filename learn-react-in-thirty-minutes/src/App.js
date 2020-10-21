import React, { useState, useRef } from 'react';
import TodoList from './TodoList';

function App() {

    // default state - when it loads empty array
    const [todos, setTodos] = useState([]);
    // const [todos, setTodos] = useState([
    //     {
    //         id: 1,
    //         name: 'to do 1',
    //         isCompleted: true
    //     },
    //     {
    //         id: 2,
    //         name: 'to do 2',
    //         isCompleted: false
    //     },
    //     {
    //         id: 3,
    //         name: 'to do 3',
    //         isCompleted: false
    //     }
    // ]);

    const todoNameRef = useRef();

    function handleAddTodo(event) {
        const name = todoNameRef.current.value;
        // if input is empty do nothing
        if (name === '') {
            return;
        }
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
