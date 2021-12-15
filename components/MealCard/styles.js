import styled from "styled-components/native";

export const MealCardItem = styled.View`
  height: 200px;
  width: 100%;
  background-color: #f5f5f5;
  border-radius: 10px;
  overflow: hidden;
  margin: 10px 0;
`;

export const MealRow = styled.View`
  flex-direction: row;
`;

export const MealHeader = styled(MealRow)`
  height: 160px;
  /* background-color: red; */
`;

export const MealImage = styled.ImageBackground`
  width: 100%;
  height: 100%;
  justify-content: flex-end;
`;

export const MealTitle = styled.Text`
  font-family: "open-sans-bold";
  font-size: 18px;
  color: white;
  background-color: rgba(0,0,0,0.5);
  padding: 12px 5px;
  text-align: center;
`;

export const MealDetail = styled(MealRow)`
  /* background-color: blue; */
  height: 40px;
  padding: 0 10px;
  justify-content: space-between;
  align-items: center;
`;
