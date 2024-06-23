import React from 'react'
import Todo from './Todo'

function TodoList({ todos, onRemoveTodo, onUpdatetodo }) {
    return (
        <div style={{ width: '100%', marginTop: '50px' }}>
            {
                todos && todos.map((todo) => (
                    <Todo key={todo.id} todo={todo} onRemoveTodo={onRemoveTodo} onUpdatetodo={onUpdatetodo} />
                ))
            }
        </div>
    )
}

export default TodoList