import React, { FC } from "react";
import {
  Button,
  Dimensions,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { Stock } from "../../types/stock";

type Props = {
  stockItem: Stock;
};

const { width } = Dimensions.get("screen");

const styles = StyleSheet.create({
  listItem: {
    height: 50,
    width,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: "grey",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  newQty: {
    width: 50,
    height: 50,
    borderColor: "black",
    borderWidth: 1,
  },
});

const InventoryItem: FC<Props> = ({ stockItem }) => {
  return (
    <View style={styles.listItem}>
      <Text>{stockItem.articleDescription}</Text>
      <TextInput style={styles.newQty}></TextInput>
    </View>
  );
};

export default InventoryItem;
