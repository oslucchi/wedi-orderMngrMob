import React, { FC, useState } from "react";
import { StyleSheet, View } from "react-native";

import { useNavigation } from "@react-navigation/native";
import { useInventoryContext } from "./InventoryContext";
import { Text, TextField } from "react-native-ui-lib";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 16,
    marginHorizontal: 16,
  },
});

const messages = {
  quantity: "quantita'",
};

const StockDetail: FC = () => {
  const { navigate } = useNavigation();
  const [stockQuantity, setStockQuantity] = useState<string | undefined>();
  const { stock } = useInventoryContext();
  const stockItem = stock ? stock[0] : null;

  if (!stockItem) {
    return <></>;
  }
  return (
    <View style={styles.container}>
      <Text>{stockItem.articleDescription}</Text>
      <TextField
        floatingPlaceholder
        placeholder={messages.quantity}
        onChangeText={(text: string) => setStockQuantity(text)}
      />
    </View>
  );
};

export default StockDetail;
