import React, { FC, useEffect, useState } from "react";
import {
  Alert,
  Button,
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

import { useNavigation, useNavigationState } from "@react-navigation/native";
import { BarCodeScanner } from "expo-barcode-scanner";
import { useRestService } from "../services/RestService";
import { Stock } from "../types/stock";

const { width } = Dimensions.get("screen");

const Main: FC<any> = () => {
  const { navigate } = useNavigation();
  const { get } = useRestService();
  const [hasPermission, setHasPermission] = useState<boolean|null>(null); // la variabile hasPermiossion e' pbserved. la cambi via setHasPermission. La modifica implica il refresh
  const [scanned, setScanned] = useState(false);
  const [stock, setStock] = useState<Stock|null>(null);
  
  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission( status === 'granted' );
    }) ();
  });
  
  const handledBarcodeScanned = ({ type, data }) => {
    setScanned(true);
    get(`locations/${data}`)
      .then( res => {
        setStock(res.data.stock);
        alert(`Location ${data}
               Article ${res.data.stock.articleCode} - ${res.data.stock.articleDescription}
               Quantity: ${res.data.stock.quantity}`);
      })
  }
  
  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handledBarcodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      {scanned && <Button title={'Clicca per scansione'} onPress={() => setScanned(false)} />}
    </View>
  );
}

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
  },
  logo: {
    width: 150,
    height: 30,
  },
  container: {
    flex: 1,
  },
});
export default Main;
