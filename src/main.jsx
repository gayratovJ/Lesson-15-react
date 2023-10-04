import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App.jsx";
import AuthContextProvider from "./context/AuthContext.jsx";
import StoreProvider from "./redux/store/index.jsx";

import "antd/dist/reset.css";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <StoreProvider>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </StoreProvider>
  </React.StrictMode>
);
