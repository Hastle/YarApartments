import React from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App";
import "./styles/global.scss";
// import "./styles/global.css";

const root = createRoot(document.getElementById("root"));
root.render(<App />);
