import React from 'react';
import TodoList from './TodoList';

function App() {
    return (
        <>
            <TodoList />
            <input type="text" />
            <button>Add To do</button>
            <button>Clear To dos</button>
            <div>0 to dos left</div>
        </>
    );
}

export default App;
