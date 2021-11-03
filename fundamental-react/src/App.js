import TodoPage from "./pages/todo/TodoPage";
import { mockTodoList } from "./mockData";
function App() {
  return (
    <>
      <TodoPage todoLists={mockTodoList} />
    </>
  );
}

export default App;
