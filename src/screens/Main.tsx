import React, { FC } from "react";
import { Image, StyleSheet, View } from "react-native";

import { useSafeAreaInsets } from "react-native-safe-area-context";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  logo: {
    width: 300,
  },
});

const Main: FC = () => {
  const { top } = useSafeAreaInsets();

  return (
    <View style={[styles.container, { marginTop: top }]}>
      <Image style={styles.logo} source={require("../assets/logoWedi.png")} />
    </View>
  );
};

export default Main;
