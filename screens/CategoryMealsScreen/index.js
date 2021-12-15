import React from "react";
import { CATEGORIES, MEALS } from "../../data/dummy-data";
import MealCard from "./MealCard";
import { MealsList, ScreenContainer } from "./styles";

const CategoryMealScreen = (props) => {
  const categoryId = props.navigation.getParam("categoryId");

  const displayedMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(categoryId) >= 0
  );

  const renderMealItem = (itemData) => {
    return (
      <MealCard
        title={itemData.item.title}
        image={itemData.item.imageUrl}
        onSelect={() => {
            props.navigation.navigate({
                routeName: 'MealDetails',
                params: {
                    mealId: itemData.item.id
                }
            })
        }}
        duration={itemData.item.duration}
        complexity={itemData.item.complexity.toUpperCase()}
        affordability={itemData.item.affordability.toUpperCase()}
      />
    );
  };

  return (
    <ScreenContainer>
      <MealsList data={displayedMeals} renderItem={renderMealItem} />
    </ScreenContainer>
  );
};

CategoryMealScreen.navigationOptions = (navigationData) => {
  const categoryId = navigationData.navigation.getParam("categoryId");

  const chosedCategory = CATEGORIES.find(
    (category) => category.id === categoryId
  );

  return {
    headerTitle: chosedCategory.title,
  };
};

export default CategoryMealScreen;
