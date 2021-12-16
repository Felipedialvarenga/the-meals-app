import React from "react";
import MealList from "../../components/MealList";
import { CATEGORIES, MEALS } from "../../data/dummy-data";

const CategoryMealScreen = (props) => {
  const categoryId = props.navigation.getParam("categoryId");

  const displayedMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(categoryId) >= 0
  );

  return <MealList listData={displayedMeals} navigation={props.navigation}/>
};

CategoryMealScreen.navigationOptions = (navigationData) => {
  const categoryId = navigationData.navigation.getParam("categoryId");
  const categoryColor = navigationData.navigation.getParam("categoryColor");

  const chosedCategory = CATEGORIES.find(
    (category) => category.id === categoryId
  );

  return {
    headerTitle: chosedCategory.title,
    headerStyle: {
      backgroundColor: categoryColor,
    },
  };
};

export default CategoryMealScreen;
