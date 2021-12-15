import React from "react";
import { CardContainer, CardText, GridItem } from "./styles";

const CategoryCard = (props) => {
  return (
    <GridItem onPress={props.onSelect}>
      <CardContainer color={props.color}>
        <CardText>{props.title}</CardText>
      </CardContainer>
    </GridItem>
  );
};

export default CategoryCard;
