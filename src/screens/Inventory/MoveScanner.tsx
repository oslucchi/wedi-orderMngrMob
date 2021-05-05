import React, { FC } from "react";

import { useNavigation, useRoute } from "@react-navigation/native";
import { useRestService } from "../../services/RestService";
import { Scanner } from "../../components";


const MoveScanner: FC = () => {
  const { navigate } = useNavigation();
  const { post } = useRestService();
  const { params } = useRoute<any>();

  const handledBarcodeScanned = (coordinates: string) => {
    post(`locations/move-stock`, {idStock: params?.idStock, coordinates})
      .then(() => {
        navigate("InventoryScanner");
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <Scanner onScanned={handledBarcodeScanned} />
  );
};

export default MoveScanner;
