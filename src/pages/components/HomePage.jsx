import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Title from "./Title";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

export default function Home() {
  const [state, setState] = useState({
    data: [
      {
        id: 1,
        title: "Mengerjakan Exercise",
        completed: true,
      },
      {
        id: 2,
        title: "Mengerjakan Assignment",
        completed: false,
      },
    ],
  });

  const deleteTodo = (id) => {
    const newTodoList = state.data.filter((item) => item.id !== id);

    setState({ data: newTodoList });
  };

  const addTodo = (newTodo) => {
    const newTodoList = { id: uuidv4(), ...newTodo };

    setState({ data: [...state.data, newTodoList] });
  };

  const changeCheckTodo = (id) => {
    const todos = state.data.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });

    setState({ data: todos });
  };


  return (
    <div>
      <Title text="todos" />
      <TodoInput addTodo={addTodo} />
      <TodoList
        data={state.data}
        deleteTodo={deleteTodo}
        changeCheckTodo={changeCheckTodo}
      />
    </div>
  );
}
