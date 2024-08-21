import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css"; // Ensure this file exists and is correctly linked

// Make sure the root element is present in your index.html file
const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error('Root element with id "root" not found in index.html');
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
