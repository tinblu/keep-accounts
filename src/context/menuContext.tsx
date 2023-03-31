import { createContext } from "react";

export const menuContext = createContext({
  setVisible: (visible: boolean) => {}
})