import React from "react";
import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import {
  MealCardItem,
  MealHeader,
  MealDetail,
  MealTitle,
  MealImage,
} from "./styles";

const MealCard = (props) => {
  return (
    <MealCardItem>
      <TouchableOpacity onPress={props.onSelect}>
        <View>
          <MealHeader>
            <MealImage source={{ uri: props.image }}>
              <MealTitle numberOfLines={1}>{props.title}</MealTitle>
            </MealImage>
          </MealHeader>
          <MealDetail>
            <Text>{props.duration}m</Text>
            <Text>{props.complexity}</Text>
            <Text>{props.affordability}</Text>
          </MealDetail>
        </View>
      </TouchableOpacity>
    </MealCardItem>
  );
};

export default MealCard;
