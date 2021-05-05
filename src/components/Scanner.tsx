import React, { useEffect, useState } from "react";
import { Button, StyleSheet, View } from "react-native";

import { useIsFocused } from "@react-navigation/native";
import { BarCodeScannedCallback, BarCodeScanner } from "expo-barcode-scanner";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const styles = StyleSheet.create({
  scanner: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
});
const Scanner = ({onScanned}: {onScanned: (data: string) => void}) => {
  const { top } = useSafeAreaInsets();
  const [scanning, setScanning] = useState(false);
  const isFocused = useIsFocused();

  useEffect(() => {
    (async () => {
      await BarCodeScanner.requestPermissionsAsync();
    })();
  }, []);

  
  const handledBarcodeScanned: BarCodeScannedCallback = ({ type, data }) => {
    setScanning(false);
    onScanned(data);
  };

  return (
    <View style={[styles.container, { marginTop: top }]}>
      {isFocused && <BarCodeScanner
        onBarCodeScanned={scanning ? handledBarcodeScanned : () => null}
        style={styles.scanner}
      />}
      {!scanning && (
        <Button title="Scansiona" onPress={() => setScanning(true)} />
      )}
    </View>
  );
};

export default Scanner;
