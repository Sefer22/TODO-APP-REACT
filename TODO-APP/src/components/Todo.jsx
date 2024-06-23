import React from 'react'
import { IoIosRemoveCircle } from "react-icons/io";
import { FaEdit } from "react-icons/fa";
import '../App.css';

function Todo() {
    return (
        <div style={{
            display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
            border: '1px solid lightgrey'
        }}>
            <div>
                I am first TODO
            </div>
            <div>
                <IoIosRemoveCircle className='todo-icons' />
                <FaEdit className='todo-icons' />
            </div>
        </div>
    )
}

export default Todo