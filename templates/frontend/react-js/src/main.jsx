import { ToastContainer } from "react-toastify";
import { createRoot } from "react-dom/client";
import { StrictMode } from "react";

import Router from "./routes/index.jsx";
import config from "./utils/config.js";

import "react-toastify/dist/ReactToastify.css";
import "./styles/global.css";

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <ToastContainer {...config.toast}/>
     <Router />
  </StrictMode>,
);