import styles from "./TodoItem.module.css";

export default function Tododata({ data, deleteTodo, changeCheckTodo }) {
  return (
    <tr className={styles.row}>
      <td>
        <input
          type="checkbox"
          defaultChecked={data.completed ? true : false}
          onClick={() => changeCheckTodo(data.id)}
        />
      </td>
      <td
        className={data.completed ? styles.completed : ""}
        style={{ width: "400px" }}
      >
        {data.title}
      </td>
      <td className={styles.content}>
        <button className={styles.button} onClick={() => deleteTodo(data.id)}>
          Delete
        </button>
      </td>
    </tr>
  );
}
