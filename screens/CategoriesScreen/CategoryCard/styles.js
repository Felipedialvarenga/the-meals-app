import styled from "styled-components/native";

export const GridItem = styled.TouchableOpacity`
  flex: 1;
  margin: 15px;
  height: 150px;
`;

export const CardContainer = styled.View`
  background-color: ${(props) => props.color};
  flex: 1;
  border-radius: 10;
  box-shadow: 5px 5px 3px rgba(0, 0, 0, 0.2);
  justify-content: center;
  align-items: center;
`;

export const CardText = styled.Text`
  font-family: "open-sans-bold";
  font-size: 18px;
`;
