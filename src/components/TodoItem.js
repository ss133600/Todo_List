import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const TodoItemBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 3px 0;
`;
const DoneBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  cursor: pointer;
  background-color: aliceblue;
`;
const CheckBox = styled.div`
  width: 20px;
  height: 20px;
`;

const Work = styled.p`
  display: flex;
  width: 350px;
  height: 30px;
  margin: 10px;
  padding: 10px;
  background-color: gainsboro;
  align-items: center;
`;
const DeleteBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  cursor: pointer;
  background-color: aliceblue;
`;
const DeleteBox = styled.div`
  width: 20px;
  height: 20px;
`;
export const TodoItem = ({ todo }) => {
  const { id, text, checked } = todo;
  return (
    <>
      <TodoItemBox>
        <DoneBtn>
          {checked ? (
            <CheckBox>
              <FontAwesomeIcon icon={faCircleCheck} />
            </CheckBox>
          ) : null}
        </DoneBtn>
        <Work
          style={{
            textDecoration: checked ? "line-through" : null,
            color: checked ? "#ccc" : "#000",
          }}
        >
          {text}
        </Work>
        <DeleteBtn>
          <DeleteBox>
            <FontAwesomeIcon icon={faXmark} />
          </DeleteBox>
        </DeleteBtn>
      </TodoItemBox>
    </>
  );
};
