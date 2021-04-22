import React, { FC, useEffect, useState } from "react";
import { Button, Dimensions, StyleSheet, View } from "react-native";

import { useNavigation } from "@react-navigation/native";
import { BarCodeScanner } from "expo-barcode-scanner";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const { width } = Dimensions.get("screen");

const styles = StyleSheet.create({
  scanner: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
});
const Inventory: FC<any> = () => {
  const { navigate } = useNavigation();
  const { top } = useSafeAreaInsets();

  const [hasPermission, setHasPermission] = useState<boolean | null>(null); // la variabile hasPermiossion e' pbserved. la cambi via setHasPermission. La modifica implica il refresh
  const [scanning, setScanning] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  });

  const handledBarcodeScanned = ({ type, data }) => {
    setScanning(false);
    alert(`data ${data} scanned`);
  };

  return (
    <View style={[styles.container, { marginTop: top }]}>
      <BarCodeScanner
        onBarCodeScanned={scanning ? handledBarcodeScanned : undefined}
        style={styles.scanner}
      />
      {!scanning && (
        <Button title="Scansiona" onPress={() => setScanning(true)} />
      )}
    </View>
  );
};

export default Inventory;
