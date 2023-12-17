import styled from "styled-components";
import { TodoItem } from "./TodoItem";

const TodoListBox = styled.div`
  width: 100%;
  height: 100%;
  padding: 30px;
  background-color: gray;
`;

export const TodoList = ({ children }) => {
  return (
    <>
      <TodoListBox>
        <TodoItem />
      </TodoListBox>
    </>
  );
};
