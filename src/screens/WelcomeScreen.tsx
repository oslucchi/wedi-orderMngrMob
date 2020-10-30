import React, { FC } from "react";
import {
  FlatList,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from "react-native";
import colors from "../config/colors";
import { Order } from "../types/orders";

import { useGetOrders } from "../models/OrderPicking";

export interface OrderProps {
  orderList: Order[];
}

const messages = {
  noOrder: 'Nessun ordine in preparazione'
}

const OrdersComponent: FC<OrderProps> = ({ orderList }) => {
  return orderList.length > 0 ? (
    <FlatList
      data={orderList}
      renderItem={({ item }) => (
        <Text style={styles.actionError}>{item.orderRef}</Text>
      )}
    />
  ) : (
      <Text>{messages.noOrder}</Text>
    );
};

const ErrorComponent = () => {
  return (
    <View style={styles.alertContainer}>
      <Text style={styles.actionError}>Errore nella fetch</Text>
    </View>
  );
};

const WelcomeScreen: FC = () => {
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
  loginButton: {
    width: "100%",
    height: 70,
    backgroundColor: colors.primary,
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
  registerButton: {
    width: "100%",
    height: 70,
    backgroundColor: colors.secondary,
  },
});
export default WelcomeScreen;
