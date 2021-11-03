import React from "react";
import styles from "./ToDoList.module.css";

export default function toDoList({ todoList }) {
  return (
    <div className={styles.todoList}>
      <div className={styles.list}>
        <p className={todoList.completed ? styles.completed : ""}>
          {todoList.title}
        </p>
      </div>
    </div>
  );
}
