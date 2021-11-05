import TodoItem from "./TodoItem";
import styles from "./TodoList.module.css";

export default function TodoList(props) {
  const { data, deleteTodo, changeCheckTodo } = props;
  return (
    <div className={styles.container}>
      <table style={{ borderCollapse: "collapse" }}>
        <tbody>
          {data.map((todo) => (
            <TodoItem
              deleteTodo={deleteTodo}
              changeCheckTodo={changeCheckTodo}
              // checkTodo={checkTodo}
              // uncheckTodo={uncheckTodo}
              key={todo.id}
              data={todo}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
