import React, { FC } from "react";
import { FlatList, StyleSheet, View } from "react-native";

import { useNavigation } from "@react-navigation/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useInventoryContext } from "./InventoryContext";
import { InventoryItem } from "../../components";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 16,
    marginHorizontal: 16,
  },
});
const InventoryStock: FC = () => {
  const { navigate } = useNavigation();
  const { stock } = useInventoryContext();

  return (
    <View style={styles.container}>
      {stock?.length > 1 ? (
        <FlatList
          data={stock}
          renderItem={({ item, index }) => (
            <InventoryItem
              key={index}
              onPress={() => navigate("InventoryStockDetail")}
              stockItem={item}
            />
          )}
        />
      ) : (
        <SingleProductStock />
      )}
    </View>
  );
};

export default InventoryStock;
