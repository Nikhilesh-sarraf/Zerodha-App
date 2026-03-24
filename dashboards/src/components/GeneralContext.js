import React, { useState } from "react";

const GeneralContext = React.createContext();

export const GeneralContextProvider = ({ children }) => {
  const [isBuyWindowOpen, setIsBuyWindowOpen] = useState(false);
  const [selectedStockUID, setSelectedStockUID] = useState("");

  const openBuyWindow = (uid) => {
    setIsBuyWindowOpen(true);
    setSelectedStockUID(uid);
  };

  const closeBuyWindow = () => {
    setIsBuyWindowOpen(false);
    setSelectedStockUID("");
  };

  return (
    <GeneralContext.Provider
      value={{
        isBuyWindowOpen,
        selectedStockUID,
        openBuyWindow,
        closeBuyWindow,
      }}
    >
      {children}
    </GeneralContext.Provider>
  );
};

export default GeneralContext;
