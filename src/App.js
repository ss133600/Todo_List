import { TodoCreate } from "./components/TodoCreate";
import { TodoList } from "./components/TodoList";
import { TodoTemplate } from "./components/TodoTemplate";

function App() {
  return (
    <TodoTemplate>
      <TodoCreate />
      <TodoList />
    </TodoTemplate>
  );
}

export default App;
