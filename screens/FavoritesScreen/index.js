import React from "react";
import MealList from "../../components/MealList";
import { useSelector } from "react-redux";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../../components/HeaderButton";
import {DefaultText, FallbackTextContainer} from '../../components'

const FavoritesScreen = (props) => {
  const favMeals = useSelector((state) => state.meals.favoriteMeals);

  if (!favMeals.length) {
    return (
      <FallbackTextContainer>
        <DefaultText>No favorite meals found. 🙁</DefaultText>
        <DefaultText>Start adding some! 😊</DefaultText>
      </FallbackTextContainer>
    );
  }

  return <MealList navigation={props.navigation} listData={favMeals} />;
};

FavoritesScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Your Favorites",
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Menu"
          iconName="ios-menu"
          onPress={() => navData.navigation.toggleDrawer()}
        />
      </HeaderButtons>
    ),
  };
};

export default FavoritesScreen;
