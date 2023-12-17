import { createGlobalStyle } from "styled-components";
import { TodoTemplate } from "./components/TodoTemplate";
import { TodoHead } from "./components/TodoHead";
import { TodoList } from "./components/TodoList";
import { TodoCreate } from "./components/TodoCreate";

const GlobalStyle = createGlobalStyle`
body{
  background-color: lightgray;
}
`;
function App() {
  return (
    <>
      <GlobalStyle />
      <TodoTemplate>
        <TodoHead></TodoHead>
        <TodoCreate></TodoCreate>
        <TodoList>todolist</TodoList>
      </TodoTemplate>
    </>
  );
}

export default App;
