import React from "react";
import { View, Text } from "react-native";
import { MEALS } from "../../data/dummy-data";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../../components/HeaderButton";

const MealDetailsScreen = (props) => {
  const mealId = props.navigation.getParam("mealId");

  const chosedMeal = MEALS.find((meal) => meal.id === mealId);

  return (
    <View>
      <Text>{chosedMeal.title}</Text>
    </View>
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
