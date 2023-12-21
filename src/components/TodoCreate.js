import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  /* max-width: 230px;
  width: 100%; */
  display: flex;
  flex-direction: row;
  /* justify-content: center; */
  align-items: center;
  position: relative;
  margin-bottom: 40px;
`;
const TextInput = styled.input`
  max-width: 300px;
  width: 100%;
  height: 25px;
  /* padding: 10px;
  margin: 0px 0px; */
  padding: 15px;
  font-size: 16px;
  border: none;
  border-radius: 50px;
  /* position: absolute; */
  position: absolute;
  left: 40px;
  background-color: whitesmoke;
  outline: none;
  padding-left: 30px;
`;
const InputBox = styled.div`
  margin: 0 auto;
  justify-content: center;
`;
const InputBtn = styled.button`
  margin: 0 auto;
  width: 85px;
  height: 56px;
  border-radius: 50px;
  line-height: 45px;
  color: white;
  font-size: 16px;
  text-align: center;
  justify-content: center;
  align-items: center;
  background-color: #ff7a7a;
  border: none;
  position: absolute;
  left: 340px;
  cursor: pointer;
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
            maxLength={200}
          />
          <InputBox>
            <InputBtn
              type="submit"
              onClick={handleSubmit}
              onKeyPress={handleKeyPress}
            >
              Add
            </InputBtn>
          </InputBox>
        </form>
      </Container>
    </>
  );
};
