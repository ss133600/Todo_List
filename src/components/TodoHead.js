import styled from "styled-components";

const TodoHeadBox = styled.div`
  width: 100%;
  display: flex;
  /* padding: 20px 0px 0px 40px; */
  padding-left: 30px;
  padding-top: 25px;
  padding-bottom: 10px;
  background-color: darkblue;
  /* justify-content: center; */
  /* align-items: center; */
  flex-direction: column;
  margin: 0;

  .Title {
    margin: 0;
    font-size: 50px;
    font-weight: 900;
  }

  .date {
    padding: 15px 0px 25px;
    margin: 0;
    font-size: 20px;
    font-weight: 500;
  }
`;

export const TodoHead = ({ children }) => {
  return (
    <>
      <TodoHeadBox>
        <div className="Title">To-Do List</div>
        <div className="date">2023년 12월 17일 일요일</div>
      </TodoHeadBox>
    </>
  );
};
