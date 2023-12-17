import styled from "styled-components";

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

export const TodoTemplate = ({ children }) => {
  return (
    <>
      <TodoTemplateBox>{children}</TodoTemplateBox>
    </>
  );
};
