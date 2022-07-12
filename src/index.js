import React from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import Counter from "./components/counter";
import App from "./app";

const root = createRoot(document.querySelector("#root"));



root.render(<App />);