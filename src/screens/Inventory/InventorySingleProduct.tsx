import React, { FC, useState } from "react";
import { StyleSheet, View } from "react-native";

import { useNavigation } from "@react-navigation/native";
import { useInventoryContext } from "./InventoryContext";
import { Button, Text, TextField } from "react-native-ui-lib";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 16,
    marginHorizontal: 16,
  },
  article: {
    fontSize: 24
  },
  quantityUpdate: {
    fontSize: 24,
    width: 150
  },
  quantityContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center"
  }
});

const messages = {
  quantityInventory: "quantità rilevata",
  quantityReal: "quantità rilevata"
};

const StockDetail: FC = () => {
  const { goBack, navigate } = useNavigation();
  const [stockQuantity, setStockQuantity] = useState<string | undefined>();
  const { stock } = useInventoryContext();
  const stockItem = stock ? stock[0] : null;

  const updateQuantity = () => {
    goBack()
  }
  
  if (!stockItem) {
    return <></>;
  }
  return (
    <View style={styles.container}>
      <Text style={styles.article}>{stockItem.articleCode}</Text>
      <Text style={styles.article}>{stockItem.articleDescription}</Text>
      <View style={styles.quantityContainer}>
        {/* <Text style={styles.article}>{stockItem.quantity}</Text> */}
        <TextField
          floatingPlaceholder
          editable={false}
          placeholder={messages.quantityInventory}
          onChangeText={(text: string) => setStockQuantity(text)}
          value={`${stockItem.quantity}`}
          style={styles.quantityUpdate}
        />
       <TextField
          floatingPlaceholder
          placeholder={messages.quantityReal}
          onChangeText={(text: string) => setStockQuantity(text)}
          value={`${stockItem.quantity}`}
          style={styles.quantityUpdate}
        />
      </View>
      <Button
        backgroundColor="#FB3C62"
        borderRadius={7}
        style={{height: 45, marginBottom: 16}}
        onPress={ () => stockQuantity && updateQuantity()}
        label="Update"
        text60
        disabled={!stockQuantity}
       />
      <Button
        backgroundColor="#FB3C62"
        borderRadius={7}
        style={{height: 45, marginBottom: 16}}
        onPress={ () => navigate("MoveScanner", {idStock: stockItem.idStock})}
        label="Move"
        text60
       />
    </View>
  );
};


export default StockDetail;
