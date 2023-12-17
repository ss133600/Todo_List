import { useRef, useState } from "react";
import styled from "styled-components";
import { TodoHead } from "./TodoHead";
import { TodoCreate } from "./TodoCreate";
import { TodoList } from "./TodoList";

const TodoTemplateBox = styled.div`
  width: 500px;
  height: 700px;
  background-color: white;
  border-radius: 14px;
  overflow: hidden;
  margin: 0 auto;
  margin-top: 100px;
  display: flex;
  flex-direction: column;
`;

export const TodoTemplate = () => {
  const [things, setThings] = useState([]);

  const nextId = useRef(0);
  // console.log(nextId);
  const handleSubmit = (text) => {
    const todo = {
      id: nextId.current,
      text,
      checked: false,
    };
    // console.log(text);
    setThings(things.concat(todo));
    nextId.current += 1;
    // console.log(todo);
  };

  const onRemove = (id) => {
    setThings(things.filter((todo) => todo.id !== id));
  };

  return (
    <TodoTemplateBox>
      <TodoHead />
      <TodoCreate onSubmit={handleSubmit} />
      <TodoList things={things} onRemove={onRemove} />
    </TodoTemplateBox>
  );
};
