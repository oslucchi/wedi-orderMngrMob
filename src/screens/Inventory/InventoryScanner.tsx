import React, { FC, useEffect, useState } from "react";
import { Button, Dimensions, StyleSheet, View } from "react-native";

import { useNavigation } from "@react-navigation/native";
import { BarCodeScannedCallback, BarCodeScanner } from "expo-barcode-scanner";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useRestService } from "../../services/RestService";
import { useInventoryContext } from "./InventoryContext";

const { width } = Dimensions.get("screen");

const styles = StyleSheet.create({
  scanner: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
});
const InventoryScanner: FC = () => {
  const { navigate } = useNavigation();
  const { top } = useSafeAreaInsets();
  const { get } = useRestService();
  const [hasPermission, setHasPermission] = useState<boolean | null>(null); // la variabile hasPermission e' observed. La cambi via setHasPermission. La modifica implica il rerender
  const [scanning, setScanning] = useState(false);
  const { setStock } = useInventoryContext();

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  });

  const handledBarcodeScanned: BarCodeScannedCallback = ({ type, data }) => {
    setScanning(false);
    alert(`data ${data} scanned`);
    get(`locations/${data}`)
      .then((res) => {
        setStock(res.data.stockList);
        navigate("InventorySingleProduct");
      })
      .catch((err) => {
        throw err;
      });
  };

  return (
    <View style={[styles.container, { marginTop: top }]}>
      <BarCodeScanner
        onBarCodeScanned={scanning ? handledBarcodeScanned : () => null}
        style={styles.scanner}
      />
      {!scanning && (
        <Button title="Scansiona" onPress={() => setScanning(true)} />
      )}
    </View>
  );
};

export default InventoryScanner;
