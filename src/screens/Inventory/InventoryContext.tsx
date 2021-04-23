import React, { createContext, FC, useContext, useState } from "react";
import { Stock } from "../../types/stock";

type InventoryContextState = {
  stock: Stock[] | null;
  setStock: (stock: Stock[]) => void;
};

const initialValues = {
  stock: null,
  setStock: (stock: Stock[]) => null,
};

const InventoryContext = createContext<InventoryContextState>(initialValues);

export const useInventoryContext = () => useContext(InventoryContext);

const InventoryContextProvider: FC<InventoryContextState> = ({ children }) => {
  const [stock, setStock] = useState<Stock[] | null>(null);

  const value = {
    stock,
    setStock,
  };
  return (
    <InventoryContext.Provider value={value}>
      {children}
    </InventoryContext.Provider>
  );
};

export default InventoryContextProvider;
