import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import LightModeContextProvider from "./contexts/LightModeContext.jsx";
import App from "./App.jsx";
import "./index.css";
import "./styles/lightmode.css"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LightModeContextProvider>
      <App />
    </LightModeContextProvider>
  </StrictMode>
);
