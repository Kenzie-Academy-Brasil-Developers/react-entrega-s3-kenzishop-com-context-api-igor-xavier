import { createContext, useState } from "react";
import { produtos } from "../products/productsArray";

export const VitrineContext = createContext([]);

export const VitrineProvider = ({ children }) => {
  const [vitrine, setVitrine] = useState(produtos);

  return (
    <VitrineContext.Provider value={{ vitrine, setVitrine }}>
      {children}
    </VitrineContext.Provider>
  );
};
