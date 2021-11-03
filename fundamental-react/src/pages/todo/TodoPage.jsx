import React from "react";
import Header from "./components/Header";
import ToDoList from "./components/ToDoList";
export default function todoPage({ todoLists }) {
  return (
    <>
      <Header title="To Do App" />
      {todoLists.map((list) => (
        <ToDoList todoList={list} />
      ))}
    </>
  );
}
