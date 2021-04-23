import React from "react";
import { Ionicons } from "@expo/vector-icons";

import { NavigationContainer } from "@react-navigation/native";
import { BottomNavigatorParams } from "./src/types/navigation";

import Main from "./src/screens/Main";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import PrepareOrder from "./src/screens/PrepareOrder";
import PickList from "./src/screens/PickList";
import { InventoryNavigation } from "./src/screens";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const { Navigator, Screen } = createBottomTabNavigator<BottomNavigatorParams>();

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Navigator initialRouteName="Main">
          <Screen
            options={{
              tabBarIcon: (props) => <Ionicons {...props} name="ios-barcode" />,
            }}
            component={Main}
            name="Main"
          />
          <Screen
            options={{
              tabBarIcon: (props) => (
                <Ionicons {...props} name="ios-add-circle" />
              ),
            }}
            component={PrepareOrder}
            name="PrepareOrder"
          />
          <Screen
            options={{
              tabBarIcon: (props) => <Ionicons {...props} name="ios-albums" />,
            }}
            component={PickList}
            name="PickList"
          />
          <Screen
            options={{
              tabBarIcon: (props) => (
                <Ionicons {...props} name="ios-list-box" />
              ),
            }}
            component={InventoryNavigation}
            name="Inventory"
          />
        </Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
