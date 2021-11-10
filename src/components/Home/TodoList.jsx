import TodoItem from "./TodoItem";
import styles from "./TodoList.module.css";
import { useSelector, useDispatch } from "react-redux";
import { deleteTodo, changeCheckTodo } from "../../store/TodoListSlice";

export default function TodoList(props) {
  const todoLists = useSelector((state) => state.todoList.todoLists);
  const dispatch = useDispatch();

  return (
    <div className={styles.container}>
      <table style={{ borderCollapse: "collapse" }}>
        <tbody>
          {todoLists.map((todo) => (
            <TodoItem
              deleteTodo={() => {
                dispatch(deleteTodo(todo.id));
              }}
              changeCheckTodo={() => {
                dispatch(changeCheckTodo(todo.id));
              }}
              key={todo.id}
              data={todo}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
