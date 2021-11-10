import Title from "../../components/Home/Title";
import TodoInput from "../../components/Home/TodoInput";
import TodoList from "../../components/Home/TodoList";
import Navbar from "../../components/Home/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Title text="todos" />
      <TodoInput />
      <TodoList />
    </div>
  );
}
