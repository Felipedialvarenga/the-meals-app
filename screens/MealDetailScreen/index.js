import React, { useEffect } from "react";
import { ScrollView } from "react-native";
import { useSelector, useDispatch } from "react-redux";
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
import { toggleFavorite } from "../../store/Meals";

const MealDetailsScreen = (props) => {
  const availableMeals = useSelector((state) => state.meals.meals);
  const mealId = props.navigation.getParam("mealId");
  const mealIsFav = useSelector((state) =>
    state.meals.favoriteMeals.some((meal) => meal.id === mealId)
  );
  const dispatch = useDispatch();

  const chosedMeal = availableMeals.find((meal) => meal.id === mealId);

  const onFavorite = () => {
    dispatch(toggleFavorite(mealId));
  };

  useEffect(() => {
    props.navigation.setParams({ mealTitle: chosedMeal.title, onFavorite });
  }, [chosedMeal]);

  useEffect(() => {
    props.navigation.setParams({ isFavorite: mealIsFav });
  }, [mealIsFav]);

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
  const mealTitle = navigationData.navigation.getParam("mealTitle");
  const onFavorite = navigationData.navigation.getParam("onFavorite");
  const isFavorite = navigationData.navigation.getParam("isFavorite");

  return {
    headerTitle: mealTitle,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item title="Favorite" iconName="ios-star" buttonStyle={{color: isFavorite ? 'orange' : 'white'}} onPress={onFavorite} />
      </HeaderButtons>
    ),
  };
};

export default MealDetailsScreen;
