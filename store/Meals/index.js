import { createSlice } from "@reduxjs/toolkit";
import { MEALS } from "../../data/dummy-data";

const initialState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favoriteMeals: [],
};

export const mealsSlice = createSlice({
  name: "meals",
  initialState,
  reducers: {
      toggleFavorite: (state, {payload}) => {
          const isFav = state.favoriteMeals.find(meal => meal.id === payload);
          if(isFav){
              state.favoriteMeals = state.favoriteMeals.filter(meal => meal.id !== payload);
          } else {
              const newFavMeal = state.meals.find(meal => meal.id === payload);
              state.favoriteMeals = [...state.favoriteMeals, newFavMeal];
          }
      },
      setFilters: (state, {payload}) => {
          state.filteredMeals = state.meals.filter(meal => {
              if(payload.glutenFree && !meal.isGlutenFree) {
                  return false;
              }

              if(payload.lactoseFree && !meal.isLactoseFree) {
                  return false;
              }

              if(payload.vegan && !meal.isVegan) {
                  return false;
              }

              if(payload.vegetarian && !meal.isVegetarian) {
                  return false;
              }

              return true;
          })
      }
  },
});

export const { toggleFavorite, setFilters } = mealsSlice.actions;
