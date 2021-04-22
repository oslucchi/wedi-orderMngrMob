import {
  NavigationState,
  RouteProp,
  useNavigation,
} from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React, { FC } from "react";
import { Text } from "react-native";
import colors from "../config/colors";
import { RootNavigatorParams } from "../types/navigation";

type InventoryRouteProp = RouteProp<RootNavigatorParams, "Inventory">;
type InventoryNavProps = StackNavigationProp<RootNavigatorParams, "Inventory">;

type Props = {
  route: InventoryRouteProp;
  navigation: InventoryNavProps;
};

const Inventory: FC<Props> = (props) => {
  return <Text>{props.route.params.idLocation}</Text>;
};

export default Inventory;
