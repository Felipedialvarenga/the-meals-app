import React from "react";
import { FilterContainer} from "./styles";
import { Text, Switch } from "react-native";
import { DefaultText } from "../../../components/DefaultText/styles";
import Colors from "../../../constants/Colors";

const FilterSwitch = (props) => {
  return (
    <FilterContainer>
      <DefaultText>{props.label}</DefaultText>
      <Switch
        value={props.state}
        onValueChange={props.onChange}
        trackColor={{true: Colors.primaryColor, false: 'white'}}
        thumbColor={Colors.primaryColor}
        
      />
    </FilterContainer>
  );
};

export default FilterSwitch;
