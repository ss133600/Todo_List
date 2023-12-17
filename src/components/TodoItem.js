import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const TodoItemBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  /* margin-top: 40px; */
  margin: 0px 10px;
  /* padding-top: 40px; */
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
  /* color: white; */
  background-color: transparent;
  /* background-color: aliceblue; */
`;
const CheckBox = styled.div`
  /* width: 20px;
  height: 20px; */
  align-items: center;
  font-size: 30px;
  color: #ff7a7a;
`;

const Work = styled.p`
  display: flex;
  width: 350px;
  height: 20px;
  margin: 10px;
  padding: 7px;
  /* background-color: gainsboro; */
  font-size: 20px;
  /* justify-content: center; */
  line-height: 30px;
  font-weight: 500;
  /* color: rebeccapurple; */
  align-items: center;
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
  color: #e0e0e0;
`;
export const TodoItem = ({ todo, onRemove, onToggle }) => {
  const { id, text, checked } = todo;
  //TodoList에서 props로 넘김

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
          style={{
            textDecoration: checked ? "line-through" : null,
            color: checked ? "#ccc" : "#686868",
          }}
        >
          {text}
        </Work>
        <DeleteBtn onClick={() => onRemove(id)}>
          <DeleteBox>
            <FontAwesomeIcon icon={faXmark} />
          </DeleteBox>
        </DeleteBtn>
      </TodoItemBox>
    </>
  );
};
