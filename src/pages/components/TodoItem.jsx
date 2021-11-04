import styles from "./TodoItem.module.css";

export default function Tododata({ data, deleteTodo, checkTodo, uncheckTodo }) {
  return (
    <tr className={styles.row}>
      <td>
        <input
          defaultChecked={data.completed ? true : false}
          type="checkbox"
          onClick={
            data.completed
              ? () => uncheckTodo(data.id)
              : () => checkTodo(data.id)
          }
        />
      </td>
      <td
        style={{ width: "400px" }}
        className={data.completed ? styles.completed : ""}
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
