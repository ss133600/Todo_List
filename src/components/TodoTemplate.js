import styled from "styled-components";

const Template = styled.div`
  width: 500px;
  border-radius: 4px;
  overflow: hidden;
  margin: 0 auto;
`;
const TodoTitle = styled.div`
  font-size: 20px;
  display: flex;
  color: white;
  align-items: center;
  justify-content: center;
  background-color: gainsboro;
`;
const Content = styled.div`
  background-color: white;
`;

export const TodoTemplate = ({ children }) => {
  return (
    <Template>
      <TodoTitle>투두리스트</TodoTitle>
      <Content>{children}</Content>
    </Template>
  );
};
