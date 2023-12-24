import {
  faCheck,
  faCircleCheck,
  faPencil,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import styled from "styled-components";

const TodoItemBox = styled.div`
  max-width: 350px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0px 10px;
`;
const DoneBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  cursor: pointer;
  border: 3.5px solid #f0f0f0;
  background-color: transparent;
`;
const CheckBox = styled.div`
  align-items: center;
  font-size: 30px;
  color: #ff7a7a;
`;

const Work = styled.p`
  display: flex;
  max-width: 350px;
  width: 100%;
  /* height: 20px; */
  margin: 10px;
  padding: 7px;
  /* background-color: gainsboro; */
  font-size: 20px;
  /* justify-content: center; */
  line-height: 30px;
  font-weight: 500;
  /* color: rebeccapurple; */
  align-items: center;
  cursor: pointer;
`;
const DeleteBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  cursor: pointer;
  /* background-color: aliceblue; */
`;
const DeleteBox = styled.div`
  /* width: 20px;
  height: 20px; */
  font-size: 21px;
  color: #a0a0a0;
`;
const UpdateBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  cursor: pointer;
`;
const UpdateBox = styled.div`
  margin-right: 28px;
  font-size: 20px;
  color: #a0a0a0;
`;

const Start = styled.div``;
const Finish = styled.div``;
export const TodoItem = ({ todo, onRemove, onToggle, onUpdate }) => {
  const { id, text, checked } = todo;
  //TodoList에서 props로 넘김
  const [edited, setEdited] = useState(false);
  // const [newText, setNewTest] = useState(TodoItem.text);
  // const onChangeEditInput = (e) => {
  //   setNewTest(e.target.value);
  // };
  const onClickEditButton = () => {
    setEdited(true);
  };

  // const onClickSubmitButton = () => {
  //   const nextTodoList = TodoItem.map((todo) => ({
  //     ...todo,
  //     text: todo.id === TodoItem.id ? newText : todo.text,
  //   }));
  //   TodoItem(nextTodoList);

  //   setEdited(false);
  // };
  return (
    <>
      <TodoItemBox>
        <DoneBtn onClick={() => onToggle(id)}>
          {checked ? (
            <CheckBox>
              <FontAwesomeIcon icon={faCircleCheck} />
            </CheckBox>
          ) : null}
        </DoneBtn>
        <Work
          onClick={() => onToggle(id)}
          style={{
            textDecoration: checked ? "line-through" : null,
            color: checked ? "#ccc" : "#686868",
          }}
        >
          {text}
        </Work>

        <UpdateBtn onClick={() => onToggle(id)}>
          <UpdateBox>
            {!UpdateBtn.checked ? (
              edited ? (
                <Finish>
                  <FontAwesomeIcon icon={faCheck} />
                </Finish>
              ) : (
                <Start type="button" onClick={onClickEditButton}>
                  <FontAwesomeIcon icon={faPencil} />
                </Start>
              )
            ) : null}
          </UpdateBox>
        </UpdateBtn>

        {/* <UpdateBtn onClick={() => onToggle(onUpdate)}>
          <UpdateBox>
            {!TodoItem.checked ? (
              edited ? (
                <Finish>
                  <FontAwesomeIcon icon={faCheck} />
                </Finish>
              ) : (
                <Start type="button" onClick={onClickEditButton}>
                  <FontAwesomeIcon icon={faPencil} />
                </Start>
              )
            ) : null}
          </UpdateBox>
        </UpdateBtn> */}
        <DeleteBtn onClick={() => onRemove(id)}>
          <DeleteBox>
            {/* <FontAwesomeIcon icon={faXmark} /> */}
            <FontAwesomeIcon icon={faTrashCan} />
          </DeleteBox>
        </DeleteBtn>
      </TodoItemBox>
    </>
  );
};
