import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const TextInput = styled.input`
  width: 350px;
  padding: 10px;
  margin: 15px 10px;
  font-size: 16px;
`;
const InputBtn = styled.button`
  width: 60px;
  height: 30px;
  /* border-radius: 10px; */
`;

export const TodoCreate = (props) => {
  const [con, setCon] = useState("");
  // const ref = useRef();

  const handleChange = (e) => {
    setCon(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!con) return;
    props.onSubmit(con);
    setCon("");
  };
  // console.log(props);

  // useEffect(() => {
  //   ref.current.focus();
  // }, []);

  return (
    <>
      <Container>
        <form onSubmit={handleSubmit}>
          <TextInput
            // ref={ref}
            type="text"
            name="text"
            placeholder="할 일을 입력해주세요"
            autocomplete="off"
            value={con}
            onChange={handleChange}
          />
          <InputBtn
            type="submit"
            onClick={handleSubmit}
            onKeyPress={handleKeyPress}
          >
            Add
          </InputBtn>
        </form>
      </Container>
    </>
  );
};
