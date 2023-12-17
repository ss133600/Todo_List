import { useState } from "react";
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
  const [things, setThings] = useState([
    {
      id: 1,
      text: "밥먹기",
      checked: true,
    },
    {
      id: 2,
      text: "알바하기",
      checked: false,
    },
    {
      id: 3,
      text: "공부하기",
      checked: true,
    },
  ]);

  return (
    <>
      <TodoTemplateBox>
        <TodoHead></TodoHead>
        <TodoCreate></TodoCreate>
        <TodoList things={things}></TodoList>
      </TodoTemplateBox>
    </>
  );
};
