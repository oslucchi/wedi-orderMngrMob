import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { RootNavigatorParams } from "./src/types/navigation";
import { createDrawerNavigator } from "@react-navigation/drawer";

import PickList from "./src/screens/PickList";
import Inventory from "./src/screens/Inventory";
import PrepareOrder from "./src/screens/PrepareOrder";
import Main from "./src/screens/Main";

const App = () => {
  const { toggleDrawer } = useNavigation();
  return (
    <NavigationContainer>
      <Button title="Mazzo" onPress={ () => { toggleDrawer() } }>Cazzo</Button>
      <Drawer.Navigator initialRouteName="Root">
        <Drawer.Screen component={Main} name="Root"></Drawer.Screen>
        <Drawer.Screen component={PrepareOrder} name="PrepareOrder"></Drawer.Screen>
        <Drawer.Screen component={PickList} name="PickList"></Drawer.Screen>
        <Drawer.Screen component={Inventory} name="Inventory"></Drawer.Screen>
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

const Stack = createStackNavigator<RootNavigatorParams>();
const Drawer = createDrawerNavigator();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
