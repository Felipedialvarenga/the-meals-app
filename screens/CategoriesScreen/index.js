import React from "react";
import { Text, FlatList } from "react-native";
import { CATEGORIES } from "../../data/dummy-data";
import { GridItem } from "./styles";
import Colors from '../../constants/Colors'

const CategoriesScreen = (props) => {
  const renderGridItem = (itemData) => {
    return (
      <GridItem onPress={() => {
          props.navigation.navigate({routeName: 'CategoryMeals', params: {
              categoryId: itemData.item.id
          }})
      }}>
        <Text>{itemData.item.title}</Text>
      </GridItem>
    );
  };

  return (
    <FlatList data={CATEGORIES} renderItem={renderGridItem} numColumns={2} />
  );
};

CategoriesScreen.navigationOptions = {
    headerTitle: 'Meal Categories'
}

export default CategoriesScreen;
