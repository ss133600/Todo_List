import styled from "styled-components";
import { TodoItem } from "./TodoItem";

const TodoListBox = styled.div`
  /* width: 100%; */
  height: 100%;
  padding: 30px;
  background-color: white;
`;

export const TodoList = ({ things, onRemove, onToggle, onUpdate }) => {
  return (
    <>
      <TodoListBox>
        {things.map((todo) => (
          <TodoItem
            todo={todo}
            key={todo.id}
            onRemove={onRemove}
            onToggle={onToggle}
            onUpdate={onUpdate}
          />
        ))}
      </TodoListBox>
    </>
  );
};
