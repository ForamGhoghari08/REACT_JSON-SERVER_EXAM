// IMPORTING NECESSARY MODULES AND COMPONENTS
import React from "react";
import ReactDOM from "react-dom/client";
import MainApp from "./MainApp.jsx"; // CHANGED FROM "App" TO "MainApp"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MainApp /> {/* UPDATED COMPONENT NAME */}
  </React.StrictMode>
);
