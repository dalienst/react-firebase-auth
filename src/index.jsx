import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { AuthUserProvider } from "./firebase/auth";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthUserProvider>
      <App />
      <ToastContainer />
    </AuthUserProvider>
  </React.StrictMode>
);
