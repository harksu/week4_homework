import React from 'react'

const TodoListitem = ({ todo, onRemove }) => {
    const { id, text, checked } = todo; // 분해할당 

    return (
        <div className='TodoListitem'>
            <div className='checkbox'>
                <input type={"checkbox"} checked={checked}></input>
                <div className='text'>{text}</div>
            </div>
            <div className='remove'>
                <input type={"checkbox"} onClick={() => onRemove(id)}></input>
            </div>
        </div>
    )
}

export default TodoListitem