import styled from "styled-components";
import { CustomDate } from "./CustomDate";

const TodoHeadBox = styled.div`
  max-width: 350px;
  width: 100%;
  display: flex;
  /* padding: 20px 0px 0px 40px; */
  padding-left: 45px;
  padding-top: 30px;
  padding-bottom: 10px;
  /* background-color: darkblue; */
  /* justify-content: center; */
  /* align-items: center; */
  flex-direction: column;
  margin: 0;
  /* margin-bottom: 40px; */

  .Title {
    max-width: 350px;
    width: 100%;
    margin: 0;
    font-size: 50px;
    font-weight: 900;
    color: #383838;
  }

  .date {
    padding: 15px 0px 25px;
    margin: 0;
    font-size: 20px;
    font-weight: 700;
    color: #505050;
  }
`;

export const TodoHead = () => {
  return (
    <>
      <TodoHeadBox>
        <div className="Title">To-Do List</div>
        <div className="date">
          <CustomDate />
        </div>
      </TodoHeadBox>
    </>
  );
};

// 2023년 12월 18일 월요일
