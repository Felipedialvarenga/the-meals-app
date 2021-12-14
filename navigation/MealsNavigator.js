import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealScreen from "../screens/CategoryMealsScreen";
import MealDetailsScreen from "../screens/MealDetailScreen";

import Colors from "../constants/Colors";

const MealsNavigator = createStackNavigator(
  {
    Categories: CategoriesScreen,
    CategoryMeals: {
      screen: CategoryMealScreen,
    },
    MealDetails: MealDetailsScreen,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Colors.primaryColor,
      },
      headerTintColor: "white",
    },
  }
);

export default createAppContainer(MealsNavigator);
