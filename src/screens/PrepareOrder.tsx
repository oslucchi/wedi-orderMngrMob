import React, { FC } from "react";
import {
  Alert,
  Dimensions,
  FlatList,
  Image,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import colors from "../config/colors";
import { Order } from "../types/orders";

import { useGetOrders } from "../models/OrderPicking";
import { useNavigation } from "@react-navigation/native";

export interface OrderProps {
  orderList: Order[];
}

const { width } = Dimensions.get("screen");

const messages = {
  noOrder: "Nessun ordine in preparazione",
};

const OrdersComponent: FC<OrderProps> = ({ orderList }) => {
  const { navigate } = useNavigation();

  return orderList.length > 0 ? (
    <FlatList
      style={styles.flatlist}
      contentContainerStyle={styles.listContainer}
      data={orderList}
      renderItem={({ item }) => (
        <Pressable
          onPress={() => {
            navigate("PickList", { idOrder: item.idOrder });
          }}
        >
          <View style={styles.item}>
            <Text
              style={styles.actionError}
            >{`${item.orderRef} - ${item.customerDescription}`}</Text>
          </View>
        </Pressable>
      )}
    />
  ) : (
    <Text>{messages.noOrder}</Text>
  );
};

const ErrorComponent: FC = () => {
  return (
    <View style={styles.alertContainer}>
      <Text style={styles.actionError}>Errore nella fetch</Text>
    </View>
  );
};

const PrepareOrder: FC = () => {
  const { orderList, error } = useGetOrders();

  return (
    <ImageBackground
      source={require("../assets/splash.png")}
      style={styles.background}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logoWedi.png")} />

        <OrdersComponent orderList={orderList} />
      </View>
      {error && <ErrorComponent />}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  alertContainer: {
    position: "absolute",
    bottom: 30,
    alignItems: "center",
  },
  actionError: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.errorFatal,
  },
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  item: {
    height: 50,
    width,
    borderWidth: 1,
  },
  flatlist: {
    flex: 1,
    top: 80,
  },
  listContainer: {
    justifyContent: "center",
    alignItems: "center",
    // width: "100%",
    // height: 450,
    // backgroundColor: colors.secondary,
    // alignItems: "center",
    // flexGrow: 1,
    // justifyContent: "center",
  },
  logo: {
    width: 150,
    height: 30,
  },
  logoContainer: {
    position: "absolute",
    top: 30,
    alignItems: "center",
  },
});
export default PrepareOrder;
