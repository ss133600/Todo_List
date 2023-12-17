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

export const TodoCreate = () => {
  return (
    <>
      <Container>
        <form>
          <TextInput
            type="text"
            name="text"
            placeholder="할 일을 입력해주세요"
          />
          <InputBtn type="submit">Add</InputBtn>
        </form>
      </Container>
    </>
  );
};
