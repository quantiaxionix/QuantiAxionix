// src/main.jsx (or index.jsx)
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import LenisProvider from "./LenisProvider";
import ThemeProvider from "./ThemeProvider";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <LenisProvider>
        <App />
      </LenisProvider>
    </ThemeProvider>
  </React.StrictMode>
);
