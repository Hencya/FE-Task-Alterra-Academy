import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../store/TodoListSlice";
import styles from "./TodoInput.module.css";

export default function TodoInput(props) {
  const dispatch = useDispatch();

  const [state, setState] = useState({
    title: "",
    completed: false,
  });

  const onChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isEmpty = state.title === "";
    if (!isEmpty) {
      const newData = {
        title: state.title,
        completed: state.completed,
      };
      dispatch(addTodo(newData));
      setState({
        title: "",
        completed: false,
      });
    } else {
      alert("Please Fill Todo Field");
    }
  };

  return (
    <div className={styles.container}>
      <input
        type="text"
        placeholder="Add todo..."
        name="title"
        className={styles.input}
        value={state.title}
        onChange={onChange}
      />
      <button onClick={handleSubmit} className={styles.button}>
        Submit
      </button>
    </div>
  );
}
