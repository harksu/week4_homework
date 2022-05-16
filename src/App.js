import { useState, useRef, useCallback } from 'react';
import logo from './logo.svg';
import './App.css';
import Information from './Information';
import BackGround from './BackGround'
import Main from './Main';

import TodoInsert from './ToDoList/TodoInsert'
import ToDoList from './ToDoList/ToDoList';

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '리액트는 너무 어려웡',
      //checked: true,
    },
    {
      id: 2,
      text: '리눅스는 너무 어려웡',
      //checked: true,
    },
    {
      id: 3,
      text: '학교공부는 너무 어려웡',
      // checked: false,
    }

  ]);

  const nextId = useRef(4); // ? 

  const onInsert = useCallback(
    text => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };
      setTodos(todos.concat(todo))
      nextId.current += 1;
    }, [todos]
  )

  const onRemove = useCallback(
    id => {
      setTodos(todos.filter(todo => todo.id !== id));
    },
    [todos]
  )
  return (
    <div>
      <BackGround>
        <Information name="face" link="false"></Information>
        <Information name="major" link="false"></Information>
        <Information name="habit" link="false"></Information>
        <Information name="mbti" link="false"></Information>
        <Information name="instar" link="true"></Information>
        <Main></Main>


        <TodoInsert onInsert={onInsert}></TodoInsert>
        <ToDoList todos={todos} onRemove={onRemove} />
      </BackGround>
    </div>

  );
}

export default App;
