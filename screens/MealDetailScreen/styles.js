import styled from "styled-components/native";

export const MealImage = styled.Image`
  width: 100%;
  height: 200px;
`;

export const MealDetail = styled.View`
  /* background-color: blue; */
  flex-direction: row;
  height: 40px;
  padding: 15px;
  justify-content: space-around;
`;

export const TextTitle = styled.Text`
  font-family: "open-sans-bold";
  font-size: 20px;
  text-align: center;
`;

export const ListItem = styled.View`
  margin: 10px;
  border: 1px solid #ccc;
  padding: 10px;
  background-color: white;
`;

export const MealContent = styled.View`
  background-color: #B1A8B9;
  padding-top: 5px;
`;
