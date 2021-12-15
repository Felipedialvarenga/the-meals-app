import React from "react";
import { MealsList, ScreenContainer } from "./styles";
import MealCard from "../MealCard";

const MealList = (props) => {
  const renderMealItem = (itemData) => {
    return (
      <MealCard
        title={itemData.item.title}
        image={itemData.item.imageUrl}
        onSelect={() => {
          props.navigation.navigate({
            routeName: "MealDetails",
            params: {
              mealId: itemData.item.id,
            },
          });
        }}
        duration={itemData.item.duration}
        complexity={itemData.item.complexity.toUpperCase()}
        affordability={itemData.item.affordability.toUpperCase()}
      />
    );
  };

  return (
    <ScreenContainer>
      <MealsList data={props.listData} renderItem={renderMealItem} />
    </ScreenContainer>
  );
};

export default MealList;
