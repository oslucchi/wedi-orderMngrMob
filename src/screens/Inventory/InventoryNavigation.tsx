import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import InventoryContextProvider from "./InventoryContext";
import InventoryScanner from "./InventoryScanner";
import InventorySingleProduct from "./InventorySingleProduct";
import InventoryMultipleProducts from "./InventoryMultipleProducts";

const { Navigator, Screen } = createStackNavigator();

const InventoryNavigation = () => {
  return (
    <InventoryContextProvider stock={null} setStock={() => null}>
      <Navigator>
        <Screen name="InventoryScanner" component={InventoryScanner} />
        <Screen
          name="InventorySingleProduct"
          component={InventorySingleProduct}
        />
        <Screen
          name="InventoryMultipleProducts"
          component={InventoryMultipleProducts}
        />
      </Navigator>
    </InventoryContextProvider>
  );
};

export default InventoryNavigation;
