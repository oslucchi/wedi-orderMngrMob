import React, { FC } from "react";
import { Pressable, StyleSheet } from "react-native";
import { Colors, ListItem, TextField } from "react-native-ui-lib";
import Text from "react-native-ui-lib/text";
import { Stock } from "../types/stock";

type Props = {
  stockItem: Stock;
  onPress: () => void;
};

const styles = StyleSheet.create({
  newQty: {
    width: 50,
    height: 50,
    borderColor: "black",
    borderWidth: 1,
  },
  listItemDescription: {
    paddingLeft: 16,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: Colors.dark70,
  },
});

const InventoryItem: FC<Props> = ({ stockItem, onPress }) => {
  return (
    <ListItem onPress={onPress}>
      <ListItem.Part containerStyle={styles.listItemDescription} left>
        <Text>{stockItem.articleDescription}</Text>
      </ListItem.Part>
    </ListItem>
  );
};

export default InventoryItem;
