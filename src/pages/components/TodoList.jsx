import TodoItem from "./TodoItem";
import styles from "./TodoList.module.css";

export default function TodoList(props) {
  const { data, deleteTodo, checkTodo, uncheckTodo } = props;
  return (
    <div className={styles.container}>
      <table style={{ borderCollapse: "collapse" }}>
        <tbody>
          {data.map((todo) => (
            <TodoItem
              deleteTodo={deleteTodo}
              checkTodo={checkTodo}
              uncheckTodo={uncheckTodo}
              key={todo.id}
              data={todo}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
