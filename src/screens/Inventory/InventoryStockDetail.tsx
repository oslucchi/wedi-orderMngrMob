import React, { FC } from "react";
import { Text, StyleSheet, View } from "react-native";

import { useNavigation } from "@react-navigation/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useInventoryContext } from "./InventoryContext";

const styles = StyleSheet.create({
  scanner: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
});
const StockDetail: FC = () => {
  const { top } = useSafeAreaInsets();
  const { stock } = useInventoryContext();

  return (
    <View style={[styles.container, { marginTop: top }]}>
      {stock?.map((stockItem, key) => {
        return <Text>{stockItem.articleDescription}</Text>;
      })}
    </View>
  );
};

export default StockDetail;
