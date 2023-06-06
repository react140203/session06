import { createContext } from "react";

interface AppContextType {
  color: string;
  setColor?: (color: string) => void;
}
export const AppContext = createContext<AppContextType>({ color: "red" });
