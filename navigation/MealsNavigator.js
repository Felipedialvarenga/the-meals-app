import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createDrawerNavigator } from "react-navigation-drawer";
import { createAppContainer } from "react-navigation";
import { Ionicons } from "@expo/vector-icons";

import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealScreen from "../screens/CategoryMealsScreen";
import MealDetailsScreen from "../screens/MealDetailScreen";
import FiltersScreen from "../screens/FiltersScreen";

import Colors from "../constants/Colors";
import FavoritesScreen from "../screens/FavoritesScreen";

const defaultStackNavOpt = {
  headerStyle: {
    backgroundColor: Colors.primaryColor,
  },
  headerTintColor: "white",
  headerTitleStyle: {
    fontFamily: 'open-sans-bold'
  }
};

const MealsNavigator = createStackNavigator(
  {
    Categories: CategoriesScreen,
    CategoryMeals: {
      screen: CategoryMealScreen,
    },
    MealDetails: MealDetailsScreen,
  },
  {
    defaultNavigationOptions: defaultStackNavOpt,
  }
);

const FavoritesNavigator = createStackNavigator(
  {
    Favorites: FavoritesScreen,
    MealDetails: MealDetailsScreen,
  },
  {
    defaultNavigationOptions: defaultStackNavOpt,
  }
);

const MealsFavTabNavigator = createBottomTabNavigator(
  {
    Meals: {
      screen: MealsNavigator,
      navigationOptions: {
        tabBarIcon: (tabInfo) => {
          return (
            <Ionicons
              name="ios-restaurant"
              size={22}
              color={tabInfo.tintColor}
            />
          );
        },
      },
    },
    Favorites: {
      screen: FavoritesNavigator,
      navigationOptions: {
        tabBarIcon: (tabInfo) => {
          return (
            <Ionicons name="ios-star" size={22} color={tabInfo.tintColor} />
          );
        },
      },
    },
  },
  {
    tabBarOptions: {
      labelStyle: {
        fontFamily: 'open-sans'
      },
      activeTintColor: "orange",
      inactiveTintColor: "white",
      tabStyle: {
        backgroundColor: Colors.primaryColor,
      },
    },
  }
);

const FiltersNavigator = createStackNavigator(
  {
    Filters: FiltersScreen,
  },
  {
    defaultNavigationOptions: defaultStackNavOpt,
  }
);

const MainNavigator = createDrawerNavigator({
  MealsFavs: {
    screen: MealsFavTabNavigator,
    navigationOptions: {
      drawerLabel: "Meals",
    },
  },
  Filters: FiltersNavigator,
}, {
  contentOptions: {
    activeTintColor: 'orange',
    inactiveTintColor: 'white',
    labelStyle: {
      fontFamily: 'open-sans-bold'
    }
  },
  drawerBackgroundColor: Colors.primaryColor
});

export default createAppContainer(MainNavigator);
