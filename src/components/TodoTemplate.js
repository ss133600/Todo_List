import { useRef, useState } from "react";
import styled from "styled-components";
import { TodoHead } from "./TodoHead";
import { TodoCreate } from "./TodoCreate";
import { TodoList } from "./TodoList";

const TodoTemplateBox = styled.div`
  max-width: 450px;
  width: 100%;
  /* width: 450px; */
  height: 750px;
  background-color: white;
  border-radius: 30px;
  overflow: hidden;
  margin: 0 auto;
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  overflow: auto;
`;

export const TodoTemplate = () => {
  const [things, setThings] = useState([]);
  console.log(things);
  // const [edited, setEdited] = useState(false);

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

  const onUpdate = (updateText, id) => {
    setThings(
      things.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            text: updateText,
          };
        }
        return todo;
      })
    );
  };

  // const saveText = (text) => {
  //   setThings([...things, text]);
  // };

  const onRemove = (id) => {
    setThings(things.filter((todo) => todo.id !== id));
  };

  const onToggle = (id) => {
    setThings(
      things.map((todo) => {
        return todo.id === id ? { ...todo, checked: !todo.checked } : todo;
      })
    );
  };

  return (
    <TodoTemplateBox>
      <TodoHead />
      <TodoCreate onSubmit={handleSubmit} />
      <TodoList
        things={things}
        onRemove={onRemove}
        onToggle={onToggle}
        onUpdate={onUpdate}
      />
    </TodoTemplateBox>
  );
};
