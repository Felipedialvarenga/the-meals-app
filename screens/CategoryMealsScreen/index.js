import React from "react";
import { View, Text, Button } from "react-native";
import { CATEGORIES } from "../../data/dummy-data";

const CategoryMealScreen = props => {
    const categoryId = props.navigation.getParam('categoryId')

    const chosedCategory = CATEGORIES.find(category => category.id === categoryId)

    return (
        <View>
            <Text>Category Meal Screen</Text>
            <Button title="Go to Details" onPress={() => {
                props.navigation.navigate('MealDetails')
            }}/>
        </View>
    )
}

CategoryMealScreen.navigationOptions = navigationData => {
    const categoryId = navigationData.navigation.getParam('categoryId')

    const chosedCategory = CATEGORIES.find(category => category.id === categoryId)

    return {
        headerTitle: chosedCategory.title
    }
}

export default CategoryMealScreen;