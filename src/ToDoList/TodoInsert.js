import React from 'react'
import { useState, useCallback } from 'react'


const TodoInsert = ({ onInsert }) => {
    const [value, setValue] = useState('');

    const onChange = useCallback(e => {
        setValue(e.target.value);
    }, [])

    const onSubmit = useCallback(
        e => {
            onInsert(value);
            setValue('');

            e.preventDefault()
        }, [onInsert, value]
    )
    return (
        <form className='TodoInsert' onSubmit={onSubmit}>
            <input placeholder='to do something'
                value={value}
                onChange={onChange}
            />
            <button type='submit'>
            </button>
        </form>
    )
}

export default TodoInsert