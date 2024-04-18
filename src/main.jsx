import "./index.css";

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import PicsProvider from "./context/PicsContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <PicsProvider>
        <App />
      </PicsProvider>
    </BrowserRouter>
  </React.StrictMode>
);
