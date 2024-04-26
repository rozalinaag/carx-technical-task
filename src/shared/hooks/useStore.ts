import { createContext, useContext } from "react";
import RootStore from "../../app/rootStore";

export const RootStoreContext  = createContext<RootStore | null>(null);

export const useStores = () => {
  const context = useContext(RootStoreContext);

  if (context === null){
    throw new Error ('context is null');
  }

  return context
}