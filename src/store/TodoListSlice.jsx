import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialValue = [
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
];

export const todoListSlice = createSlice({
  name: "todoList",
  initialState: {
    todoLists: initialValue,
  },
  reducers: {
    deleteTodo: (state, action) => {
      state.todoLists = state.todoLists.filter((item) => {
        return item.id !== action.payload;
      });
    },
    addTodo: (state, action) => {
      const newTodoList = { id: uuidv4(), ...action.payload };
      state.todoLists = [...state.todoLists, newTodoList];
    },
    changeCheckTodo: (state, action) => {
      const todos = state.todoLists.map((todo) => {
        if (todo.id === action.payload) {
          todo.completed = !todo.completed;
        }
        return todo;
      });

      state.todoLists = todos;
    },
  },
});

export const { deleteTodo, addTodo, changeCheckTodo } = todoListSlice.actions;
export default todoListSlice.reducer;
