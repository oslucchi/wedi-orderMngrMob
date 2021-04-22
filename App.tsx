import React from "react";
import { Button, Modal, StyleSheet, Text, View } from "react-native";

import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { RootNavigatorParams } from "./src/types/navigation";

import Root from "./Root";
import Main from "./src/screens/Main";

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen component={Main} name="Main"></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const Stack = createStackNavigator<RootNavigatorParams>();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
