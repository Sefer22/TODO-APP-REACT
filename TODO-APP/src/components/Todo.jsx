import React from 'react'
import { IoIosRemoveCircle } from "react-icons/io";
import { FaEdit } from "react-icons/fa";

function Todo() {
    return (
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <div>
                I am first TODO
            </div>
            <div>
                <IoIosRemoveCircle />
                <FaEdit />
            </div>
        </div>
    )
}

export default Todo