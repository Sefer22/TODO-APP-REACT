import React from 'react'
import '../App.css';

function TodoCreate() {
    return (
        <div className='todo-create'>
            <input className='todo-input' type="text" placeholder='Enter TODO' />
            <button className='todo-button'>Enter TODO</button>
        </div>
    )
}

export default TodoCreate