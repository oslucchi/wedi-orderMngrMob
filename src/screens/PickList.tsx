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
import { Order } from "../types/orders";

type PickListRouteProp = RouteProp<RootNavigatorParams, "PickList">;
type PickListNavProps = StackNavigationProp<RootNavigatorParams, "PickList">;

type Props = {
  route: PickListRouteProp;
  navigation: PickListNavProps;
};

const PickList: FC<Props> = (props) => {
  return <Text>{props.route.params.idOrder}</Text>;
};

export default PickList;
