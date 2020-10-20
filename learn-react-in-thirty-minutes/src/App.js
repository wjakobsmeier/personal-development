import React, { useState } from 'react';
import TodoList from './TodoList';

function App() {

    // const [state, setstate] = useState(initialState)
    // default state - when it loads empty array
    const [todos, setTodos] = useState(['to do 1', 'to do 2', 'to do 3']);

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
