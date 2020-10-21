import React from 'react'

export default function Todo({ todo }) {
    return (
        <div>
            <label>
                <input type="checkbox" checked="{ todo.isCompleted }" />
                { todo.name }
                { todo.isCompleted }
            </label>
        </div>
    )
}
