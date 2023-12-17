import { createGlobalStyle } from "styled-components";
import { TodoTemplate } from "./components/TodoTemplate";

const GlobalStyle = createGlobalStyle`
body{
  background-color: lightgray;
}
`;
function App() {
  return (
    <>
      <GlobalStyle />
      <TodoTemplate></TodoTemplate>
    </>
  );
}

export default App;
