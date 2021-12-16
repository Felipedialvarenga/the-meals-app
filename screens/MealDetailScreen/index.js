import React from "react";
import { ScrollView, Text } from "react-native";
import { MEALS } from "../../data/dummy-data";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../../components/HeaderButton";
import {
  ListItem,
  MealContent,
  MealDetail,
  MealImage,
  TextTitle,
} from "./styles";
import { DefaultText } from "../../components/DefaultText/styles";

const MealDetailsScreen = (props) => {
  const mealId = props.navigation.getParam("mealId");

  const chosedMeal = MEALS.find((meal) => meal.id === mealId);

  return (
    <ScrollView>
      <MealImage source={{ uri: chosedMeal.imageUrl }} />
      <MealDetail>
        <DefaultText>{chosedMeal.duration}m</DefaultText>
        <DefaultText>{chosedMeal.complexity.toUpperCase()}</DefaultText>
        <DefaultText>{chosedMeal.affordability.toUpperCase()}</DefaultText>
      </MealDetail>
      <MealContent>
        <TextTitle>Ingredients</TextTitle>
        {chosedMeal.ingredients.map((ing) => (
          <ListItem key={ing}>
            <DefaultText>{ing}</DefaultText>
          </ListItem>
        ))}
        <TextTitle>Steps</TextTitle>
        {chosedMeal.steps.map((step) => (
          <ListItem key={step}>
            <DefaultText>{step}</DefaultText>
          </ListItem>
        ))}
      </MealContent>
    </ScrollView>
  );
};

MealDetailsScreen.navigationOptions = (navigationData) => {
  const mealId = navigationData.navigation.getParam("mealId");

  const chosedMeal = MEALS.find((meal) => meal.id === mealId);

  return {
    headerTitle: chosedMeal.title,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Favorite"
          iconName="ios-star"
          onPress={() => console.log("fav")}
        />
      </HeaderButtons>
    ),
  };
};

export default MealDetailsScreen;
