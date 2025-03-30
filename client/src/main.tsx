import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import FloatingButton from "./content/FloatingButton.tsx";
import Popup from "./baseCode/popup.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <FloatingButton /> */}
    <Popup />
  </StrictMode>
);
