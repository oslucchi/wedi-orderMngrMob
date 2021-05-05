import React, { FC } from "react";
import { useNavigation } from "@react-navigation/native";
import { useRestService } from "../../services/RestService";
import { useInventoryContext } from "./InventoryContext";
import { Scanner } from "../../components";


const InventoryScanner: FC = () => {
  const { navigate } = useNavigation();
  const { get } = useRestService();
  const { setStock } = useInventoryContext();

  const handledBarcodeScanned = (data: string) => {
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
    <Scanner onScanned={handledBarcodeScanned} />
  );
};

export default InventoryScanner;
