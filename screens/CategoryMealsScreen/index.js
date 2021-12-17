import React from "react";
import MealList from "../../components/MealList";
import { useSelector } from "react-redux";
import { CATEGORIES } from "../../data/dummy-data";
import { DefaultText, FallbackTextContainer } from "../../components";

const CategoryMealScreen = (props) => {
  const categoryId = props.navigation.getParam("categoryId");

  const availableMeals = useSelector((state) => state.meals.filteredMeals);

  const displayedMeals = availableMeals.filter(
    (meal) => meal.categoryIds.indexOf(categoryId) >= 0
  );

  if (!displayedMeals.length) {
    return (
      <FallbackTextContainer>
        <DefaultText>
          No favorite meals found. Try checking your filters. 😊
        </DefaultText>
      </FallbackTextContainer>
    );
  }

  return <MealList listData={displayedMeals} navigation={props.navigation} />;
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
