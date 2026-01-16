import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "./theme/ThemeProvider";
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="light">
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
