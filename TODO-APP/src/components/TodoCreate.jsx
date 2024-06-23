import React from 'react'
import '../App.css';

function TodoCreate() {
    return (
        <div className='todo-create'>
            <input type="text" placeholder='Enter TODO' />
            <button>Enter TODO</button>
        </div>
    )
}

export default TodoCreate