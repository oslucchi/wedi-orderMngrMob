import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import InventoryContextProvider from "./InventoryContext";
import InventoryScanner from "./InventoryScanner";
import InventoryStockDetail from "./InventoryStockDetail";

const { Navigator, Screen } = createStackNavigator();

const InventoryNavigation = () => {
  return (
    <InventoryContextProvider stock={null} setStock={() => null}>
      <Navigator>
        <Screen name="InventoryScanner" component={InventoryScanner} />
        <Screen name="InventoryStockDetail" component={InventoryStockDetail} />
      </Navigator>
    </InventoryContextProvider>
  );
};

export default InventoryNavigation;
