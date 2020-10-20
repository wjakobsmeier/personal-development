import React, { useState } from 'react';
import TodoList from './TodoList';

function App() {

    // default state - when it loads empty array
    const [todos, setTodos] = useState([
        {
            id: 1,
            name: 'to do 1',
            isCompleted: false
        },
        {
            id: 2,
            name: 'to do 2',
            isCompleted: false
        },
        {
            id: 3,
            name: 'to do 3',
            isCompleted: false
        }
    ]);

    useState([])
    return (
        <>
            <TodoList todos={todos} />
            <input type="text" />
            <button>Add To do</button>
            <button>Clear To dos</button>
            <div>0 to dos left</div>
        </>
    );
}

export default App;
