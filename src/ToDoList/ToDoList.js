import React from 'react'
import TodoListitem from './TodoListitem'

const ToDoList = ({ todos, onRemove }) => {
    return (
        <div className='TodoList'>
            {todos.map(todo => (
                <TodoListitem todo={todo} key={todo.id} onRemove={onRemove} />
            ))}
        </div>
    )
}

export default ToDoList