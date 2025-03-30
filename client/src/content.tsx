import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import FloatingButton from "./content/FloatingButton";

const root = document.createElement("div");
root.id = "crx-root";
document.body.appendChild(root);

createRoot(root).render(
  <React.StrictMode>
    <FloatingButton />
  </React.StrictMode>
);
