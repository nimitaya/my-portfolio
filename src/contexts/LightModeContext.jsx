import { createContext, useState } from "react";

export const LightModeContext = createContext();

const LightModeContextProvider = ({ children }) => {
  const [isLightMode, setIsLightMode] = useState(false);
  const valueObject = {isLightMode, setIsLightMode};

  return <LightModeContext value={valueObject}>{children}</LightModeContext>;
};
export default LightModeContextProvider;
