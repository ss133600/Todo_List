import styled from "styled-components";

const Dday = styled.div``;

export const CustomDate = () => {
  const today = new Date();
  const formattedDate = `${today.getFullYear()}년
      ${today.getMonth() + 1}월 ${today.getDate()}일 `;

  return (
    <div>
      <Dday>
        {formattedDate}
        {today.getDay() === 0
          ? "일요일"
          : today.getDay() === 1
          ? "월요일"
          : today.getDay() === 2
          ? "화요일"
          : today.getDay() === 3
          ? "수요일"
          : today.getDay() === 4
          ? "목요일"
          : today.getDay() === 5
          ? "금요일"
          : "토요일"}
      </Dday>
      <Dday></Dday>
    </div>
  );
};
